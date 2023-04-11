<template>
	<div class="pb-10 px-20 bg-primary-light">
		<!-- <BaseTypography
			variant="h4"
			align="center"
			>Projects</BaseTypography
		>
		<BaseTypography
			variant="h2"
			class="mb-20"
			align="center"
			>My Current projects!</BaseTypography
		> -->
		<div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
			<BaseCard
				class="min-h-[300px]"
				:title="project.name"
				body="whatever"
				v-for="(project, index) in projects"
				:key="index">
				<template v-slot:header>
					<div class="flex justify-between items-start">
						<BaseIcon
							name="skill"
							size="sm" />
						<BaseTypography
							variant="h5"
							class="text-3xl"
							>{{ numberToString(index + 1) }}</BaseTypography
						>
					</div>
					<!-- <NuxtLink
							:to="field.link"
							target="_blank">	</NuxtLink> -->
					<div class="flex flex-col items-center space-x-2">
						<BaseTypography
							variant="h4"
							class="tracking-wide"
							>{{ project.name }}
						</BaseTypography>

						<BaseTypography
							variant="h4"
							class="text-sm text-muted font-thin"
							>avancement {{ project.progress }}%
						</BaseTypography>
					</div>
				</template>
				<template v-slot:body>
					<div class="my-3 space-y-4">
						<p
							class="text-muted text-center font-light"
							variant="p">
							{{ project.description }}
						</p>

						<div class="flex flex-wrap justify-center mb-1">
							<BaseBadge
								class="m-0.5"
								variant="gray"
								uppercase="capitalize"
								size="sm"
								v-for="{ name } in project.skills.frontend"
								:key="name">
								{{ name }}
							</BaseBadge>
							<BaseBadge
								class="m-0.5"
								variant="info"
								uppercase="capitalize"
								size="sm"
								v-for="{ name } in project.skills.backend"
								:key="name">
								{{ name }}
							</BaseBadge>
						</div>
					</div>

					<div class="mt-auto flex justify-between space-x-4 items-center">
						<div class="flex">
							<BaseIcon name="github" />
							<a
								:href="project.github"
								class="ml-1 text-base text-muted"
								>Github</a
							>
						</div>
						<div class="flex">
							<BaseIcon name="world" />
							<a
								:href="project.url"
								class="ml-1 text-base text-muted"
								>Web</a
							>
						</div>
					</div>
				</template>
			</BaseCard>
			<!-- <NuxtLink
				v-for="(field, index) in data"
				:key="data.id"
				:to="field.link">
				<BaseCard
					class="min-h-[300px]"
					:title="field.title"
					body="whatever">
					<template v-slot:header>
						<div class="flex justify-between">
							<BaseIcon
								name="skill"
								size="sm" />
							<BaseTypography variant="h5">{{
								numberToString(index + 1)
							}}</BaseTypography>
						</div>

						<BaseTypography
							class="mb-5"
							variant="h4"
							>{{ field.title }}
							<BaseTypography
								class="mb-5"
								variant="h3">
								link
							</BaseTypography></BaseTypography
						>
					</template>
					<template v-slot:body>
						<BaseTypography
							class="bg-white mb-5 h-[100px]"
							variant="p"
							>{{ field.description }}</BaseTypography
						>

						<div class="mt-auto flex flex-wrap mb-1">
							<BaseBadge
								class="m-0.5"
								variant="gray"
								uppercase="capitalize"
								size="sm"
								v-for="tech in field.frontend"
								:key="tech">
								{{ tech }}
							</BaseBadge>
							<BaseBadge
								class="m-0.5"
								variant="info"
								uppercase="capitalize"
								size="sm"
								v-for="tech in field.backend"
								:key="tech">
								{{ tech }}
							</BaseBadge>
						</div>
					</template>
				</BaseCard>
			</NuxtLink> -->
		</div>
	</div>
</template>
<script setup>
import { getAllProject, getSkills } from "~~/composables/useProfile";
const { setTitle: setBreadCrumbTitle } = useBreadCrumb();
setBreadCrumbTitle("Projects en cours");
const { data } = await getAllProject();
const { data: skills } = await getSkills();
const projects = computed(() => {
	return data.value.reduce((a, project) => {
		const n = { ...project };
		n.skills = project.skills.reduce((b, { skillId }) => {
			const skill = skills.value.find(({ id }) => id === skillId);
			const category = skill.category.toLowerCase();
			if (!b[category]) b[category] = [];
			return { ...b, [category]: [...b[category], skill] };
		}, {});
		return [...a, n];
	}, []);
});

const dataA = [
	{
		id: "1",
		title: "Coach sportif",
		link: "hhhhhhh",
		description:
			"Projet de formation AFPA (en construction). Place de marché. Vente de prestation sportive.",
		frontend: ["react", "material Ui", "framer Motion", "Formik", "redux"],
		backend: [
			"symfony",
			"api plateform",
			"mercure",
			"doctrine",
			"mysql",
			"jwt authentication",
			"heroku",
		],
		link: "https://cryptic-badlands-94917.herokuapp.com/home",
	},
	{
		id: "2",
		title: "Car Trader",
		description:
			"Veille technologique sur Nuxt3.js. Plateforme de vente automobile, ",
		frontend: [
			"Nuxt3",
			"Vue3.js",
			"composition api",
			"vueuse motion",
			"tailwind css",
		],
		backend: ["Nuxt", "prisma", "mysql", "heroku", "google oauth", "supabase"],
		link: "https://nuxt-car-trader.herokuapp.com/",
	},
	{
		id: "3",
		title: "Portfolio",
		description: "Portfolio realiser avec Nuxt3.js et vue3.js",
		frontend: [
			"Nuxt3",
			"Vue3.js",
			"composition api",
			"vueuse motion",
			"tailwind css",
		],
		backend: ["Nuxt", "prisma", "mysql", "heroku", "google oauth", "supabase"],
		link: "https://nuxt3-portfolio.herokuapp.com/",
	},
	{
		id: "4",
		title: "Template Css",
		description: "Template pour la Restauration",
		frontend: ["css3", "sass", "html5"],
		backend: ["php", "heroku"],
		link: "https://afpa-html-css.herokuapp.com/sass/index.php",
	},
	{
		id: "5",
		title: "Template css",
		description: "Visite de Kyoto",
		frontend: ["css3", "html5"],
		backend: ["php", "heroku"],
		link: "https://afpa-html-css.herokuapp.com/kyoto/index.php",
	},
	{
		id: "6",
		title: "Slideguide",
		description: "Projet perso web1.0",
		frontend: ["css", "javascript", "html5"],
		backend: ["php", "mysql", "infomaniak"],
		link: "https://www.slideguide.com",
	},
];
const numberToString = (number) => {
	return number < 10 ? `0${number}` : number;
};
</script>
