<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<script setup>
const { variant, size, uppercase } = defineProps({
	variant: {
		type: String,
		required: true,
		validator(value) {
			return ["info", "success", "primary", "gray"].includes(value);
		},
	},
	size: {
		type: String,
		required: true,
		validator(value) {
			return ["sm", "md", "lg"].includes(value);
		},
	},
	uppercase: {
		type: String,
		default: "capitalize",
	},
});

const classes = computed(() => {
	const upperClasses = { uppercase: "uppercase", capitalize: "capitalize" }[
		uppercase
	];
	const variantClasses = {
		info: "bg-primary text-white ",
		success: "bg-primary",
		primary: "bg-primary-light",
		gray: "border border-muted text-muted",
	}[variant];
	const sizeClasses = { sm: "text-xs", md: "text-sm", lg: "text-base" }[size];
	const css =
		"inline-flex font-semibold rounded-md tracking-wide whitespace-nowrap px-2 py-0.5";

	return `${upperClasses} ${variantClasses} ${sizeClasses} ${css}`;
});
</script>
