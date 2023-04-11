<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { userLogout } from "~/composables/useAuth";
import { onClickOutside } from "@vueuse/core";
import { IUser } from "~~/types/IUser";
const avatar = (given: string | undefined) => given ?? "/img/logo_short.png";
const user = useState<IUser>("user");
const logout = userLogout;
const hideActions = ref(true);
const userActions = ref(null);
defineProps({
	isLoggedIn: Boolean,
});
onClickOutside(userActions, () => (hideActions.value = true));
</script>

<template>
	<div
		ref="userActions"
		class="hidden md:flex items-center text-accent justify-end">
		<span class="mr-2">
			Welcome <strong>{{ user.username }}</strong>
		</span>
		<div @click="hideActions = !hideActions">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 text-accent hover:dark:text-green-400 hover:text-green-400">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
			</svg>
		</div>

		<ul
			:class="[{ hidden: hideActions }]"
			class="dropdown-menu min-w-max absolute bottom bg-white text-base z-100 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 top- m-0 bg-clip-padding border-none"
			aria-labelledby="dropdownMenuButton1">
			<li
				v-if="isLoggedIn"
				@click="logout">
				<a
					class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
					href="#"
					>logout</a
				>
			</li>
			<li v-if="!isLoggedIn">
				<NuxtLink
					class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
					href="/register"
					>Register</NuxtLink
				>
			</li>
			<li v-if="!isLoggedIn">
				<NuxtLink
					class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
					href="/login"
					>Login</NuxtLink
				>
			</li>
		</ul>
	</div>
</template>
