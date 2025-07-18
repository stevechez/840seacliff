import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			// ... your theme extensions
		},
	},
	// --- ADD THE NEW PLUGIN TO THIS ARRAY ---
	plugins: [
		tailwindcssAnimate,
		tailwindTypography, // <-- ADD THIS LINE
	],
};

export default config;
