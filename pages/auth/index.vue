<template>
	<NuxtPage />
</template>
<script setup>
definePageMeta({
	layout: "authentication",
	middleware: ["auth"],
});
</script>
