import { P } from 'storybook/internal/components';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./lib/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			primary: '#242F40',
			secondary: '#E5E5E5',
			warning: '#E93D42',
			accent: '#4B8F8C',
			accent2: '#363636',
		},
	},
	plugins: [],
};

