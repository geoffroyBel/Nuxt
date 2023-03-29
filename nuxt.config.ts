// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		// "@nuxtjs/supabase",
		// "@nuxt/image-edge",
		"@vueuse/nuxt",
		"@vueuse/motion/nuxt",
	],
	app: {
		layoutTransition: { name: "layout", mode: "out-in" },
		pageTransition: { name: "page", mode: "out-in" },
	},
});
