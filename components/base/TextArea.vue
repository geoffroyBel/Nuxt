<template>
	<div>
		<label
			for="textarea"
			class="block text-sm font-medium text-muted"
			>{{ label }}</label
		>
		<!-- class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" -->
		<textarea
			v-model="text"
			:name="name"
			:rows="rows"
			:class="classes"></textarea>
	</div>
</template>

<script setup lang="ts">
interface TextAreaProps {
	rows: number;
	label: string;
	name: string;
	modelValue: string;
	placeholder: string;
}
const props = withDefaults(defineProps<TextAreaProps>(), {
	rows: 3,
});
const emits = defineEmits(["update:modelValue"]);
const text = ref(props.modelValue);
const classes = computed(() => [
	// "form-input",
	"block",
	"mt-1",
	"w-full",
	"py-2",
	"text-xl",
	"font-medium",
	"border",
	"border-gray-300",

	"focus:ring-indigo-500",
	"focus:border-indigo-500",
	"sm:text-sm",
	"rounded-md",
]);
watch(text, (value) => emits("update:modelValue", value));
</script>
