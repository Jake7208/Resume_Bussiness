// /** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	// content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
