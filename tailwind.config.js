/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				color: {
					menime: "#E50914",
					merah: "#CD2026",
					hijau: "#5EBA7D",
					kuning: "#F0AD4E",
					biru: "#337AB7",
					putih: "#FFFFFF",
					hitam: "#000000",
					abu: "#0f0f0f",
				},
			},
		},
	},
	plugins: [],
}
