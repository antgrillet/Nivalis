/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx,html}",
		"./src/*.html",
		"./*.html"
	],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["retro"],
	},
};
