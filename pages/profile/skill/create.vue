<template>
	<form @submit.prevent="submit">
		<BaseTypography
			class="my-3"
			variant="h3"
			>Add
			<span class="text-muted font-medium">new skills</span></BaseTypography
		>
		<p
			v-if="error"
			class="text-red-400 mt-3">
			{{ error }}
		</p>
		<div class="space-y-3 mb-4">
			<BaseInput
				name="name"
				label="Titre"
				v-model="state.name" />
			<BaseSelect
				name="category"
				label="Which catgory?"
				v-model="state.category">
				<option
					class="capitalize"
					v-for="[key, name] in Object.entries(options)"
					:key="key"
					:value="key">
					{{ name }}
				</option>
			</BaseSelect>
		</div>
		<BaseButton
			type="submit"
			variant="contained">
			add</BaseButton
		>
	</form>
</template>
<script setup>
import { createSkill } from "~~/composables/useProfile";
definePageMeta({
	layout: "profile",
	middleware: ["profile"],
});
useHead("Profile add skills");
const state = useState("createSkill", () => ({
	name: "",
	category: 1,
}));
const options = { 1: "Frontend", 2: "Backend", 3: "UX/Design" };
const error = ref(null);
const submit = async () => {
	try {
		const category = options[state.value.category].toLowerCase();
		await createSkill({ name: state.value.name, category });
	} catch (e) {
		error.value = e.message;
	}
};
</script>
