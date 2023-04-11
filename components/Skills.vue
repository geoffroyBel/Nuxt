<template>
	<div class="bg-primary-light p-10">
		<BaseTypography
			variant="h4"
			align="center"
			>Services</BaseTypography
		>
		<BaseTypography
			variant="h2"
			class="mb-20"
			align="center"
			>What can i do for you !</BaseTypography
		>
		<div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
			<div
				v-for="([category, values], index) in Object.entries(skills)"
				:key="index">
				<BaseCard
					title="test"
					body="whatever">
					<template v-slot:header>
						<div class="flex justify-between">
							<BaseIcon
								name="skill"
								size="sm" />
							<BaseTypography variant="h5">0{{ index + 1 }}</BaseTypography>
						</div>
						<BaseTypography
							class="mb-5 uppercase"
							variant="h4"
							>{{ category }}</BaseTypography
						>
					</template>
					<template v-slot:body>
						<div class="min-h-[150px]">
							<BaseBadge
								size="md"
								class="m-1"
								variant="gray"
								v-for="tech in values"
								:key="tech">
								{{ tech }}</BaseBadge
							>
						</div>
					</template>
				</BaseCard>
			</div>
		</div>
	</div>
</template>
<script setup>
import { getSkills } from "~~/composables/useProfile";

const { data } = await getSkills();
const skills = computed(() => {
	return data.value.reduce(
		(acc, { name, category }) => {
			acc[category.toLowerCase()].push(name);
			return acc;
		},
		{ frontend: [], backend: [], design: [] }
	);
});
</script>
