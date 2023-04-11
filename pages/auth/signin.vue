<template>
	<form
		class="mx-auto max-w-[390px] h-screen flex flex-col justify-center"
		@submit.prevent="submit">
		<div class="space-y-2">
			<BaseInput
				type="text"
				label="Email"
				name="email"
				placeholder="ggg"
				v-model="state.email" />
			<BaseInput
				type="password"
				label="Password"
				name="password"
				v-model="state.password" />
		</div>

		<BaseButton
			type="submit"
			class="m-10"
			>Login</BaseButton
		>
	</form>
</template>
<script setup>
import { loginWithEmail } from "~~/composables/useAuth";
useHead({ title: "Login" });
definePageMeta({
	layout: "authentication",
	middleware: ["auth"],
});
const state = useState("login", () => ({
	email: "",
	password: "",
	mode: "login",
	isLoading: false,
	error: null,
}));

const textBtn = computed(() =>
	state.value.mode === "login" ? "Sign in" : "Sign up"
);
const textLink = computed(() =>
	state.value.mode === "login"
		? "Dont have an account? Sign Up!"
		: "Already have an account? Sign In!"
);
const submit = async () => {
	console.log("submit");
	const { password, email } = state.value;
	if (!state.value.isLoading) {
		state.value.isLoading = true;
		try {
			await loginWithEmail({ password, email });
		} catch (error) {
			state.value.error = error.message;
		}
	}
};
</script>
