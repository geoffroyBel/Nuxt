<template>
	<div class="relative">
		<label
			:for="name"
			class="block text-sm font-medium text-muted"
			>{{ label }}</label
		>
		<select
			:name="name"
			v-model="selectedValue"
			:class="classes">
			<slot />
		</select>
		<div
			class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
			<svg
				class="w-4 h-4"
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M14.95 7.95a.75.75 0 0 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06L10 11.94l4.95-4.95z"></path>
			</svg>
		</div>
	</div>
</template>

<script setup lang="ts">
interface SelectProps {
	name: string;
	label: string;
	modelValue: string | number;
}
const props = defineProps<SelectProps>();
const emits = defineEmits(["update:modelValue"]);
const selectedValue = ref(props.modelValue);

watch(selectedValue, (value) => {
	emits("update:modelValue", value);
});
const classes = computed(() => [
	"block",
	"appearance-none",
	// "w-full",
	// "bg-white",
	// "border",
	// "border-gray-400",
	// "hover:border-gray-500",
	// "px-4",
	// "py-2",
	// "pr-8",
	// "rounded",
	// "shadow",
	// "leading-tight",
	// "focus:outline-none",
	// "focus:shadow-outline",
	"block",
	"mt-1",
	"w-full",
	"p-2",
	"text-xl",
	"font-medium",
	"border",
	"border-gray-300",

	"focus:ring-indigo-500",
	"focus:border-indigo-500",
	"sm:text-sm",
	"rounded-md",
]);
</script>

<style>
select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
</style>
