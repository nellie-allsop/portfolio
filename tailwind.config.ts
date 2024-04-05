import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				turq: "#17ffea",
				blue: "#94e1f9",
				pink: "#f2a4cf",
				yellow: "#fde072",
			},
		},
	},
	darkMode: "class",
  plugins: [nextui()],
};
export default config;
