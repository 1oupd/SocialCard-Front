module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ['Poppins', 'Raleway', 'Sacramento', 'Work Sans'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
