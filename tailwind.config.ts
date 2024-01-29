import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"blue": "#4ECDC4",
				"green": "#1A535C",
				"cream": "#F7FFF7",
				"red": "#FF6B6B",
				"yellow": "#FFE66D",
			},
		},
	},
	plugins: [],
};
export default config;
