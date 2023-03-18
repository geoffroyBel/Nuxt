<template>
	<div class="flex flex-col">
		<h1>typograpy</h1>
		<BaseTypography
			v-for="(variant, index) in typographies"
			:variant="variant"
			capitalize="true"
			>{{ variant }}</BaseTypography
		>
	</div>
</template>
<script setup>
definePageMeta({
	layout: "custom",
});
const typographies = computed(() => {
	return ["h1", "h2", "h3", "h4", "p"];
});
</script>
