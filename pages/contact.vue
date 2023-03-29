<template>
	<div
		class="grid gap-y-5 grid-cols-12 mx-auto my-20 max-w-10xl px-4 xs:px-8 sm:px-10 w-3/4">
		<div class="col col-span-12 md:col-span-5">
			<div
				class="pb-2"
				v-for="info in contacts"
				:key="info.label">
				<div class="flex min-w-1/3">
					<BaseIcon
						class="px-4 mt-2"
						:name="info.icon"
						size="xs" />

					<div>
						<h3 class="block text-lg font-semibold">{{ info.label }}</h3>
						<p class="text-gray-400 font-normal">{{ info.value }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col col-span-12 md:col-span-7">
			<div
				class="pb-2"
				v-for="info in networks"
				:key="info.id">
				<div class="flex min-w-1/3">
					<BaseIcon
						class="px-4 mt-2"
						:name="info.icon"
						size="xs" />

					<div>
						<h3 class="block text-muted text-md font-semibold">
							{{ info.label }}
						</h3>
						<a
							:href="info.value"
							class="text-primary font-normal"
							>{{ info.value }}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
definePageMeta({
	layout: "custom",
});
useBreadCrumb().setTitle("Contact Me");
const contacts = [
	{
		id: 1,
		label: "call Me",
		value: "O6 11 25 90 67",
		icon: "phone",
	},
	{
		id: 2,
		label: "Email Me",
		value: "froygeo@live.fr",
		icon: "email",
	},
	{
		id: 3,
		label: "Location",
		value: "Rouen, Normandie",
		icon: "location",
	},
];

const networks = [
	{
		id: 1,
		label: "Facebook",
		value: "https://www.facebook.com/geof.slideguidien",
		icon: "facebook",
	},
	{
		id: 2,
		label: "LinkedIn",
		value: "https://www.linkedin.com/in/geoffroy-bellemare-29a123258/",
		icon: "linkedin",
	},
	{
		id: 3,
		label: "Github",
		value: "https://github.com/geoffroyBel",
		icon: "github",
	},
];
</script>
