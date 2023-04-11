<template>
	<div class="flex flex-col">
		<p class="block text-sm font-medium text-muted mb-1">{{ label }}</p>
		<div class="flex flex-wrap">
			<label
				v-for="(option, index) in options"
				:key="index"
				class="inline-flex items-center w-[100px]">
				<input
					type="checkbox"
					:value="option.value"
					:checked="selectedOptions.includes(option.value)"
					@change="handleSelection($event, option.value)"
					v-model="selectedOptions"
					class="form-checkbox h-5 w-5 text-purple-600" />
				<span class="ml-2 text-sm text-muted">{{ option.label }}</span>
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Option {
	label: string;
	value: string;
}
interface InputGroups {
	label: string;
	modelValue: Array<any>;
	options: Array<Option>;
}
const props = defineProps<InputGroups>();
const emits = defineEmits(["update:modelValue"]);
let selectedOptions = ref(props.modelValue);

const handleSelection = (event: Event, value: string) => {
	const { checked } = event.target as HTMLInputElement;
	let newSelectedOptions = [...props.modelValue];
	if (checked) {
		newSelectedOptions.push(value);
	} else {
		newSelectedOptions = newSelectedOptions.filter((val) => val !== value);
	}
	emits("update:modelValue", newSelectedOptions);
};
</script>
