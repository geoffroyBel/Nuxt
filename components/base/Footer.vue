<template>
	<footer
		ref="ref"
		class="bg-gray-100 py-4">
		<div
			class="flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
			<!-- <p class="text-center text-base text-gray-400"></p> -->
			<BaseTypography variant="p">
				GeoffBell&copy; 2023. Developed by
				<span class="text-primary font-semibold uppercase">
					Geoffroy Bellemare
				</span>
			</BaseTypography>
			<div class="flex items-center space-x-5">
				<nav
					class="flex flex-wrap justify-center"
					aria-label="Footer">
					<div class="px-3 py-1">
						<a
							href="https://github.com/geoffroyBel"
							class="text-base text-gray-500 hover:text-gray-900">
							<BaseIcon name="github" />
						</a>
					</div>

					<div class="px-3 py-1">
						<a
							href="https://www.linkedin.com/in/geoffroy-bellemare-29a123258/"
							class="text-base text-gray-500 hover:text-gray-900">
							<BaseIcon name="linkedin" />
						</a>
					</div>

					<div class="px-3 py-1">
						<a
							href="https://www.facebook.com/geof.slideguidien"
							class="text-base text-gray-500 hover:text-gray-900">
							<BaseIcon name="facebook" />
						</a>
					</div>
				</nav>
				<button
					v-on:click="handleClick"
					v-motion
					:initial="{ opacity: 0, y: 100 }"
					:enter="{ opacity: 1, y: 0, scale: 1 }"
					:variants="{ custom: { scale: 2 } }"
					:hovered="{
						scale: 1.5,
						transition: {
							duration: 200,
						},
					}"
					class="flex justify-center items-center w-11 h-11 bg-primary rounded-full">
					<BaseIcon name="up" />
				</button>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";

const Footer = defineComponent({
	name: "Footer",
});
const { scrollTop } = useScrollPosition();
const handleClick = () => {
	console.log("allllllo");
	scrollTop();
};
</script>

<style scoped>
/* Optional styling */
</style>
