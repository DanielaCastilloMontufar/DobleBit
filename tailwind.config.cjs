/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			Comfortaa: ['Comfortaa', 'sans-serif'],
			'Montserrat': ['Montserrat','sans-serif'],
			'FjallaOne': ['FjallaOne','sans-serif'],
			'Poppins': ['Poppins','sans-serif'],
			'Raleway': ['Raleway', 'sans-serif'],
			'MontserratE': ['MontserratE', 'sans-serif'],
			'PoppinsE': ['Poppins','sans-serif'],
			'PoppinsM': ['Poppins','sans-serif'],
			'PoppinsB': ['Poppins','sans-serif']
		},
		colors: {
				'green': '#18DB59',
				'black': '#000000',
				'white': '#ffffff',
				'bluek': '#17171f',
				'new': '#002D95',
				'gray': '#808080',
				'hello': '#e5e7eb',
				transparent: 'transparent'
		},

	},
	plugins: [],
}
