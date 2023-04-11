<template>
	<header
		class="w-screen dark flex z-50 justify-between items-center space-x-1 bg-white shadow border-b">
		<nav
			v-motion-fade
			class="relative flex justify-between items-center flex-1">
			<input
				type="checkbox"
				name="checkbox"
				id="checkbox" />
			<label
				class="md:invisible absolute top-1/2 -translate-y-1/2 right-[30px] flex justify-center rounded-full items-center w-10 h-10 bg-primary p-0 m-0 text-white"
				for="checkbox">
			</label>
			<div
				ref="target"
				class="flex mt-2 py-2 justify-center items-center">
				<BaseIcon
					class="text-primary flex justify-center items-center mr-2"
					size="md"
					name="computer" />
				<NuxtLink
					class="text-xl uppercase text-primary font-bold"
					to="/"
					>Bellemare <span class="text-lg font-light">Geoffroy</span></NuxtLink
				>
			</div>
			<ul class="hidden md:inline-block">
				<li
					v-for="({ label, to }, index) in nav_links"
					:key="index">
					<NuxtLink
						class="relative"
						:to="to"
						><BaseTypography
							variant="h4"
							class="menu-item font-normal tracking-wider text-muted"
							>{{ label }}</BaseTypography
						></NuxtLink
					>
				</li>
				<li>
					<BaseButton
						:onclick="handleLogin"
						variant="contained"
						class="rounded-full"
						v-if="user">
						Log Out
					</BaseButton>
					<BaseButton
						:onclick="handleLogin"
						variant="contained"
						class="rounded-full"
						v-else>
						Log In
					</BaseButton>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script setup>
import { useMotion, useMotionControls } from "@vueuse/motion";
const nav_links = [
	{ label: "Home", to: "/" },
	{ label: "Contact", to: "/contact" },
	{ label: "Project", to: "/project" },
	{ label: "About", to: "/about" },
];
const user = useState("user");
const target = ref();
const isMenuOpen = ref(true);
const handleLogin = async () => {
	console.log("hh");
	if (user.value) {
		console.log("allo");
		await userLogout();
		return;
	} else {
		navigateTo("auth/signin");
	}
};
const variants = ref({
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			delay: 1000,
		},
	},
});

const motionInstance = useMotion(target, variants);
</script>
<style scoped>
input {
	display: none;
}
input:checked ~ ul {
	display: block;
}
input:checked ~ div {
	display: none;
}
input ~ ul li {
	display: inline-block;
	padding: 0 1rem;
}
input:checked ~ ul li {
	display: block;
	padding: 1rem;
}
input:checked ~ label {
}
input + label {
	background-image: url(../assets/icons/menu.svg);
	background-size: 50% 50%;
	background-position: center;
	background-repeat: no-repeat;
}
input:checked + label {
	background-image: url(../assets/icons/close.svg);
	background-size: 50% 50%;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
<!-- function timer (time) {
// 	if(time == 0) {
// 		alert("fini")
// 		return;
// 	}
// 	timer--

// 	return timer(time)
// } -->
