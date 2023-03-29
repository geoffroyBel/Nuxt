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
			<div
				v-for="(field, index) in data"
				:key="data.id">
				<BaseCard
					class="min-h-[300px] p-5"
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
						<NuxtLink
							:to="field.link"
							target="_blank">
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
						</NuxtLink>
					</template>
					<template v-slot:body>
						<BaseTypography
							class="bg-white mb-5 bg-transparent"
							variant="p"
							>{{ field.description }}</BaseTypography
						>
						<BaseTypography variant="h3">{{ field.tech }}</BaseTypography>
						<div class="mt-auto flex flex-wrap mb-1">
							<BaseBadge
								class="m-0.5"
								variant="primary"
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
			</div>
		</div>
	</div>
</template>
<script setup>
const { setTitle: setBreadCrumbTitle } = useBreadCrumb();
setBreadCrumbTitle("Projects en cours");
const data = [
	{
		id: "1",
		title: "Coach sportif",
		link: "hhhhhhh",
		description:
			'Projet "file rouge" formation AFPA. Place de marche, publier et vente de prestations sportives',
		frontend: ["react", "material Ui", "framer Motion", "Formik", "redux"],
		backend: ["symfony", "api plateform", "jwt authentication", "heroku"],
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
		backend: ["Nuxt", "heroku", "mysql", "heroku", "google oauth", "supabase"],
		link: "https://nuxt-car-trader.herokuapp.com/",
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
		id: "4",
		title: "Template css",
		description: "Visite de Kyoto",
		frontend: ["css3", "html5"],
		backend: ["php", "heroku"],
		link: "https://afpa-html-css.herokuapp.com/kyoto/index.php",
	},
	{
		id: "5",
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
