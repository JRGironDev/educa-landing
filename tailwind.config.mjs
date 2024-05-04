/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#2e2e46',
				'secondary': '#CCE148',
				'wa': '#65d072'
			}
		},
	},
	plugins: [] //[animations],
}
