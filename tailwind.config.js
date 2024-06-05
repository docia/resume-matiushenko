/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				galaxy: "url('/public/images/orange.jpg')",
			},
			fontSize: {
				sm: ["14px", "20px"],
				base: ["16px", "24px"],
				lg: ["20px", "28px"],
				xl: ["24px", "32px"],
				"2xl": ["30px", "36px"],
				"3xl": ["36px", "40px"],
				"4xl": ["42px", "44px"],
				"5xl": ["48px", "48px"],
			},
			fontFamily: {
				ubuntu: ["Ubuntu-Bold", "sans-serif"],
				nanum: ["NanumGothic-Bold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
