<template>
	<button
		:type="type"
		@click:prevent="onClick"
		:class="classes">
		<slot />
	</button>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			default: "button",
		},
		variant: {
			type: String,
			required: true,
			default: "contained",
		},
		onClick: {
			type: Function,
			default: () => console.log("onclick"),
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
