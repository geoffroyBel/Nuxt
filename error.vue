<template>
	<div class="h-screen flex justify-center items-center flex-col">
		<h1 class="text-9xl">{{ error.statusCode }}</h1>
		<p class="text-4xl mt-7">{{ error.message }}</p>
		<button
			@click="handleError"
			class="bg-blue-400 mt-7 px-7 py-2 text-white">
			Back
		</button>
	</div>
</template>

<script setup>
const error = useError();
const handleError = () => {
	clearError({ redirect: "/" });
};
</script>
