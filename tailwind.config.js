/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
	darkMode: "class",
	content: [],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "var(--primary-main-color)",
					main: "var(--primary-main-color)",
					light: "var(--primary-light-color)",
					dark: "var(--primary-dark-color)",
				},
				accent: { DEFAULT: "var(--text-primary-color)" },
				secondary: { DEFAULT: "#bf1587" },
				muted: {
					DEFAULT: "var(--text-muted-color)",
					light: "var(--text-muted-color2)",
				},
			},
		},
	},
	plugins: [],
};
