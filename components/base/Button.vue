<template>
	<button :class="classes">
		<slot />
	</button>
</template>
<script>
export default {
	props: {
		variant: {
			type: String,
			required: true,
			default: "contained",
		},
	},

	computed: {
		classes() {
			const variant = {
				contained: "bg-primary py-3 px-7 rounded",
				outlined: "border-1  border-primary py-3 px-7 rounded",
			}[this.variant];

			const color = {
				contained: "text-white",
				outlined: "text-primary",
			}[this.variant];

			return [variant, color];
		},
	},
};
</script>
