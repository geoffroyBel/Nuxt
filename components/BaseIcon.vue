<template>
	<span
		v-if="icon"
		:class="size"
		:style="style"
		v-html="icon" />
</template>

<script setup lang="ts">
interface Icon {
	name: string;
	size?: string;
	style?: string;
}

const props = withDefaults(defineProps<Icon>(), {
	size: "lg",
	style: "",
});

const size = computed(() => {
	return {
		xs: "h-4 w-4",
		sm: "h-8 w-8",
		md: "h-10 w-10",
		lg: "h-15 w-15",
		xl: "h-15 w-15",
	}[props.size];
});
const icons = Object.fromEntries(
	Object.entries(import.meta.glob("~/assets/icons/*.svg", { as: "raw" })).map(
		([key, value]) => {
			const filename = key.split("/").pop()!.split(".").shift();
			return [filename, value];
		}
	)
);

// Lazily load the icon
const icon = props.name && (await icons?.[props.name]?.());
</script>
