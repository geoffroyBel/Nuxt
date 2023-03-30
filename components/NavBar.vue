<template>
	<header
		class="w-screen dark flex z-50 justify-between items-center space-x-1 p-4 bg-white shadow border-b">
		<div
			ref="target"
			class="flex py-2 justify-center items-center">
			<BaseIcon
				class="text-primary flex justify-center items-center mr-2"
				size="md"
				name="computer" />
			<NuxtLink
				class="text-xl uppercase text-primary font-bold"
				to="/"
				>Bellemare <span class="text-lg font-light">Geoffroy</span></NuxtLink
			>
		</div>

		<div
			v-motion-fade
			class="flex justify-end flex-1 pr-20">
			<NuxtLink
				class="relative p-3 menu-item text-xl font-sans"
				to="/"
				><BaseTypography variant="h4">Home</BaseTypography></NuxtLink
			>
			<NuxtLink
				class="relative p-3 menu-item text-xl font-sans"
				to="/about">
				<BaseTypography variant="h4">About</BaseTypography>
			</NuxtLink>
			<NuxtLink
				class="relative p-3 menu-item text-xl font-sans"
				to="/project">
				<BaseTypography variant="h4">Projects</BaseTypography>
			</NuxtLink>
			<NuxtLink
				class="relative p-3 menu-item text-xl font-sans"
				to="/contact">
				<BaseTypography variant="h4">Contact</BaseTypography>
			</NuxtLink>
		</div>
	</header>
</template>
<script setup>
import { useMotion, useMotionControls } from "@vueuse/motion";

const target = ref();

const variants = ref({
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			delay: 1000,
		},
	},
});

const motionInstance = useMotion(target, variants);
</script>

<!-- function timer (time) {
// 	if(time == 0) {
// 		alert("fini")
// 		return;
// 	}
// 	timer--

// 	return timer(time)
// } -->
