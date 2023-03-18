<template>
	<component
		:is="variant"
		:class="{ [classes]: true, capitalize: capitalize }">
		<slot />
	</component>
</template>

<script>
export default {
	name: "Typography",

	props: {
		variant: {
			type: String,
			default: "body1",
		},
		align: {
			type: String,
			default: "left",
		},
		color: {
			type: String,
			default: "text-primary",
		},
		capitalize: {
			type: Boolean,
			required: false,
			default: false,
		},
	},

	computed: {
		classes() {
			const variantClasses = {
				h5: "text-5xl tracking-wide font-semibold text-gray-200",
				h1: "text-5xl tracking-wide font-semibold text-accent",
				h2: "text-4xl font-light font-sans tracking-wide text-accent",
				h3: "text-sm font-medium text-primary",
				h4: "text-lg font-semibold text-gray-500",
				p: "text-md text-muted",
				default: "text-sm text-primary",
			}[this.variant];
			console.log(variantClasses);
			const alignClasses = {
				left: "text-left",
				center: "text-center",
				right: "text-right",
			}[this.align];

			return variantClasses + " " + alignClasses;
		},
	},
};
</script>
