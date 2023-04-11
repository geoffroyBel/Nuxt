<template>
	<div>
		<div class="flex justify-between">
			<BaseTypography
				variant="h3"
				class="text-xl my-5">
				create your projects
			</BaseTypography>

			<button
				@click="navigateToSkill"
				variant="outlined"
				class="border-0 bg-primary-light p-0 m-0 text-primary">
				Ajouter nouvelles competences
			</button>
		</div>

		<form @submit.prevent="submit">
			<div class="space-y-3 mb-10">
				<BaseInput
					name="name"
					label="Nom de votre projet"
					v-model.trim="state.name" />
				<BaseInput
					name="url"
					label="Website"
					v-model.trim="state.url" />
				<BaseInput
					name="gitHub"
					label="GitHub"
					v-model.trim="state.github" />
				<BaseInput
					name="progress"
					label="État du projet"
					v-model.number="state.progress" />
				<BaseTextArea
					name="description"
					label="desc"
					v-model.trim="state.description" />

				<BaseMultiCheckBox
					name="skills"
					label="choix de vos technologies"
					v-model="state.skills"
					:options="optionSkills" />
			</div>
			<BaseButton type="submit">Save your project</BaseButton>
		</form>
	</div>
</template>
<script setup>
import { createProject, getSkills } from "~~/composables/useProfile";
definePageMeta({
	layout: "profile",
	middleware: ["profile"],
});
const state = useState("create-project", () => ({
	name: "",
	url: "",
	github: "",
	skills: [],
	progress: 0,
	description: "Not provided",
}));
// const skillOptions = [
// 	{ id: 1, label: "Livraison standard", value: "standard" },
// 	{ id: 2, label: "Livraison express", value: "express" },
// 	{ id: 3, label: "Ramassage en magasin", value: "store" },
// ];

const { data: skills } = await getSkills();

const optionSkills = computed(() => {
	return skills.value.map(({ id, name }) => ({ label: name, value: id }));
});
const navigateToSkill = () => {
	console.log("navigate");
	navigateTo("/profile/skill/create");
};
const submit = async () => {
	const user = useState("user");
	console.log("submit");
	console.log(user.value);
	console.log(state.value);
	await createProject({ ...state.value, userId: user.value.id });
};
</script>
