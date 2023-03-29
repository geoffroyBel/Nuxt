<template>
	<div class="theme-light flex flex-col">
		<NavBar />
		<section class="flex-1 text-center bg-primary-light p-20 space-y-2">
			<h1 class="text-4xl font-mono text-gray-700 m-0 p-0">
				{{ title }}
			</h1>
			<BaseBreadcrumbs />
		</section>
		<slot />
	</div>
</template>
<script setup>
const { title } = useBreadCrumb();
</script>
<style scoped>
@import "~/styles/theme.css";
</style>
