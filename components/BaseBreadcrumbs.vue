<template>
	<nav class="breadcrumb flex mb-4">
		<ol class="mx-auto list-none p-0 inline-flex">
			<!-- <li class="flex items-center">
				<nuxt-link
					to="/"
					class="text-gray-500 hover:text-gray-700"
					>Home</nuxt-link
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mx-2 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M14.707 7.293a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd" />
				</svg>
			</li> -->
			<li
				v-for="(crumb, index) in crumbs"
				:key="index"
				:class="{ active: index === crumbs.length - 1 }"
				class="flex items-center">
				<nuxt-link
					:to="crumb.path"
					class="text-gray-500 hover:text-gray-700 text-lg"
					>{{ crumb.name }}</nuxt-link
				>
				<BaseIcon
					v-if="index !== crumbs.length - 1"
					class="px-4 rotate-90"
					name="arrow-small"
					size="xs" />
				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mx-2 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M14.707 7.293a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd" />
				</svg> -->
			</li>
		</ol>
	</nav>
</template>

<script setup>
const route = useRoute();
const crumbs = computed(() => {
	const pathArray = useRoute()
		.path.split("/")
		.filter((crumb) => crumb !== "");
	const pathList = pathArray.map((crumb, index) => {
		return {
			name: crumb.charAt(0).toUpperCase() + crumb.slice(1),
			path: `/${pathArray.slice(0, index + 1).join("/")}`,
		};
	});
	return [{ name: "Home", path: "/" }, ...pathList];
});
</script>

<style scoped>
.breadcrumb li.active a {
	font-weight: bold;
	@apply text-primary-dark;
}

.breadcrumb li.active svg {
	display: none;
}

.breadcrumb li:last-child svg {
	display: none;
}
</style>
