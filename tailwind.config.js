/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem'
		},
		extend: {
			backgroundImage: {
				'hero-pattern': "url('./src/assets/music-banner.jpg')"
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		},

		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'bg-slate-200': 'rgb(241 245 249)',
			red: 'rgb(239 68 68)',
			white: '#ffffff',
			'black-text': '#000',
			'black-color': '#000',
			'smooth-black': '#121212',
			purple: '#3f3cbb',
			blue: '#0284c7',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			'bubble-gum': '#ff77e9',
			bermuda: '#78dcca',
			'menu-bg-color': 'rgb(107 114 128)',
			paragraph: 'background-color: rgb(226 232 240)',
			'gray-400': 'color: rgb(156 163 175)',
			'smooth-gray': '#ffffffd9'
		}
	},
	plugins: [ require('@tailwindcss/typography'), require('@tailwindcss/forms') ]
};
