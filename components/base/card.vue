<template>
	<div class="card">
		<div class="p-4">
			<slot name="header">
				<h3 class="text-lg font-medium">{{ title }}</h3>
			</slot>
			<slot name="body">
				<p class="mt-2 text-gray-500">{{ body }}</p>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	title: { type: String, required: true },
	body: { type: String, required: true },
});
</script>

<style scoped>
.card {
	@apply bg-white rounded-lg shadow-md p-4;
}
.card:hover {
	@apply bg-primary-dark rounded-lg shadow-xl p-4;
}

.card-header {
	@apply text-lg font-medium;
}

.card-body {
	@apply mt-2 text-gray-500;
}
</style>
