// -- asset image
import logoWhite from "@images/logo/logo-white.svg";
import logoBlack from "@images/logo/logo-black.svg";

const headerData = {
	logo: {
		to: "/",
		white: logoWhite,
		black: logoBlack,
		alt: "Erwan Hermawan",
	},
	nav: [
		{
			to: "/home",
			text: "Home",
		},
		{
			to: "/portfolios",
			text: "Portfolios",
		},
		{
			to: "/about",
			text: "About",
		},
		{
			to: "/contact",
			text: "Contact",
		},
	],
	title: "Hi, I am Erwan! I am a Frontend Developer based on Indonesia. ",
	country: "Country - Indonesia",
	email: "Email - erwanhermawan858@gmail.com",
	phone: "Whatsapp - +6281-2101-6444",
	sosmed: [
		{
			to: "facebook.com",
			icon: "facebook",
		},
		{
			to: "instagram.com",
			icon: "instagram",
		},
		{
			to: "twitter.com",
			icon: "twitter",
		},
		{
			to: "linkedin.com",
			icon: "linkedin",
		},
	],
};

export default headerData;
