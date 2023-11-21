/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				blue: "#10218B",
				secondary: "#ddd",
			},
			backgroundImage: {
				"card-image": "url('/src/images/heder.jpg')",
				"bg-galeri1": "url('/src/images/galeri_sample1.jpg')",
				"bg-galeri2": "url('/src/images/galeri_sample2.jpg')",
				"logo-img": "url(/src/images/rsbp.logo.png)",
			},
		},
	},
	plugins: [],
};
