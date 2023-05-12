// tailwind.config.js

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	// content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				2: 'repeat(2, minmax(0, 1fr))'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
