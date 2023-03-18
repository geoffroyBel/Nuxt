<template>
	<svg
		:width="size"
		:height="size"
		viewBox="0 0 180 180">
		<path
			:d="path"
			:fill="color" />
	</svg>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 24,
		},
		radius: {
			type: Number,
			default: 10,
		},
		color: {
			type: String,
			default: "green",
		},
	},
	setup(props) {
		const path = computed(() => {
			const { size, radius } = props;
			const halfSize = size / 2;
			const halfRadius = radius / 2;
			return `M ${halfSize} 0 
              L ${size - halfRadius} 0 
              A ${halfRadius} ${halfRadius} 0 0 1 ${size} ${halfRadius} 
              L ${size} ${size - halfRadius} 
              A ${halfRadius} ${halfRadius} 0 0 1 ${size - halfRadius} ${size} 
              L ${halfSize} ${size} 
              L 0 ${size - halfRadius} 
              A ${halfRadius} ${halfRadius} 0 0 1 ${halfRadius} ${halfSize} 
              L 0 ${halfRadius} 
              A ${halfRadius} ${halfRadius} 0 0 1 ${halfRadius} 0 
              Z`;
		});

		return {
			path,
		};
	},
};
</script>
