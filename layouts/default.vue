<template>
	<div class="theme-light flex flex-col">
		<NavBar
			ref="target"
			class="fixed" />

		<slot />
		<BaseFooter />
	</div>
</template>
<script setup>
import { useMotion, useMotionControls } from "@vueuse/motion";
const { showFullNav } = useScrollPosition();
const target = ref();

const { motionProperties } = useMotionProperties(target);
const { apply, stopTransitions } = useMotionControls(motionProperties, {
	hide: {
		y: -100,
		opacity: 0,
		transition: {
			duration: 1000,
		},
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1000,
		},
	},
});
watch(showFullNav, async (prev, next) => {
	console.log(next);
	if (next === true) {
		await apply("hide");
	} else {
		await apply("show");
	}
});
// apply("initial");
// await apply("custom");
</script>
<style scoped>
@import "~/styles/theme.css";
</style>
