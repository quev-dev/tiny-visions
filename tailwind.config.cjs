/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				palette: {
					'c-dark': '#282732',
					'c-light': '#EEEEEE',
					'c-accent': '#F4387C',
				}
			},
		},
	},
	plugins: [],
}
