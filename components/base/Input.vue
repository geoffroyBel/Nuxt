<template>
	<div>
		<label
			:for="name"
			class="block text-sm font-medium text-muted"
			>{{ label }}</label
		>
		<div class="mt-1">
			<input
				:id="name"
				:type="type"
				:name="name"
				v-model="inputValue"
				:class="classes" />
		</div>
	</div>
</template>
<script setup lang="ts">
interface InputProps {
	label: string;
	type: string;
	name: string;
	modelValue: string | number;
}
const props = withDefaults(defineProps<InputProps>(), {
	type: "text",
	modelValue: "",
});

const emits = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);
watch(inputValue, (value) => {
	emits("update:modelValue", value);
});
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
</script>
