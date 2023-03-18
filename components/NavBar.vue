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
				class="text-3xl uppercase text-primary font-bold"
				to="/"
				>Bellemare <span class="text-xl font-light">Geoffroy</span></NuxtLink
			>
		</div>

		<div
			v-motion-fade
			class="flex justify-end flex-1 pr-20">
			<NuxtLink
				class="relative p-3 menu-item text-xl font-sans"
				to="/"
				>Home</NuxtLink
			>
			<NuxtLink
				class="relative p-3 menu-item text-xl font-sans"
				to="/about"
				>About</NuxtLink
			>
			<NuxtLink
				class="relative p-3 menu-item text-xl font-sans"
				to="/contact"
				>Contact</NuxtLink
			>
		</div>
	</header>
</template>
<script setup>
import { useMotion } from "@vueuse/motion";
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
