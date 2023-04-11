<template>
	<div class="theme-light flex flex-col min-h-[100vh] w-full">
		<NavBar />
		<div
			class="mx-auto min-h-[100vh] max-w-10xl space-y-4 px-4 xs:px-8 sm:px-10 w-3/5">
			<slot />
		</div>
	</div>
</template>
<script setup>
const { title } = useBreadCrumb();
</script>
<style scoped>
@import "~/styles/theme.css";
</style>
