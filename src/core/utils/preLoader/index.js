import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
	tl.to("body", {
		duration: 0.1,
		css: { overflowY: "hidden" },
		ease: "power3.inOut",
	})
		.to(".landing", {
			duration: 0.05,
			css: { overflowY: "hidden", height: "90vh" },
		})
		.to(".texts-container", {
			duration: 0,
			opacity: 1,
			ease: "Power3.easeOut",
		})
		.from(".texts-container span", {
			duration: 1.5,
			delay: 1,
			y: 70,
			skewY: 10,
			stagger: 0.4,
			ease: "Power3.easeOut",
		})
		.to(".texts-container span", {
			duration: 1,
			y: 70,
			skewY: -20,
			stagger: 0.2,
			ease: "Power3.easeOut",
		})
		.to(".landing", {
			duration: 0.05,
			css: { overflowY: "hidden", height: "unset" },
		})
		.to("body", {
			duration: 0.1,
			css: { overflowY: "scroll" },
			ease: "power3.inOut",
		})
		.from(".landing__top .sub", {
			duration: 1,
			opacity: 0,
			y: 80,
			ease: "expo.easeOut",
		})
		.to(
			".preloader",
			{
				duration: 1.5,
				height: "0vh",
				ease: "Power3.easeOut",
				onComplete: mobileLanding(),
			},
			"-=2"
		)
		.from(".landing__main .text", {
			duration: 2,
			// scale: 0,
			y: 10,
			opacity: 0,
			stagger: {
				amount: 2,
			},
			ease: "power3.easeInOut",
		})
		.from(".links .item", {
			duration: 0.5,
			opacity: 0,
			delay: window.innerWidth < 763 ? -3 : -0.6,
			// y: 80,
			stagger: {
				amount: 0.5,
			},
			ease: "expo.easeOut",
			onComplete: animateMainShape(),
		})
		.from(".main-circle", {
			duration: 1,
			opacity: 0,
			ease: "power3.easeInOut",
			onComplete: animateShapes(),
		})
		.from(".shapes .shape", {
			duration: 1,
			opacity: 0,
			delay: -1,
			ease: "power3.easeInOut",
			stagger: 1,
		})
		.to(".preloader", {
			duration: 0,
			css: { display: "none" },
		});
};

export const openMenu = () => {
	const tl = gsap.timeline();
	tl.to("body", {
		duration: 0.3,
		css: { overflowY: "hidden" },
		ease: "power3.out",
	})
		.to(".nav", {
			duration: 0.5,
			css: { opacity: 1, visibility: "visible", height: "100vh" },
			ease: "power3.easeIn",
		})
		.from(".menu .item", {
			duration: 0.5,
			y: 40,
			opacity: 0,
			stagger: 0.2,
			ease: "Power3.easeOut",
		})
		.from(".title", {
			duration: 0.5,
			y: 40,
			opacity: 0,
			ease: "Power3.easeOut",
		})
		.from(".info", {
			duration: 0.5,
			y: 40,
			opacity: 0,
			ease: "Power3.easeOut",
		})
		.from(".sosmed", {
			duration: 0.5,
			y: 40,
			opacity: 0,
			ease: "Power3.easeOut",
		});
};

export const closeMenu = () => {
	const tl = gsap.timeline();
	tl.to("body", {
		duration: 0.05,
		css: { overflowY: "scroll" },
		ease: "power3.inOut",
	}).to([".nav"], {
		duration: 0.8,
		height: "0",
		transformOrigin: "right top",
		stagger: {
			amount: 0.1,
		},
		ease: "power3.inOut",
	});
};

// recurrent animations
export const fadeUp = (el, delay = 0) => {
	tl.from(el, {
		y: 150,
		duration: 1,
		delay,
		opacity: 0,
		ease: "power3.Out",
	});
};

export const mobileLanding = () => {
	window.innerWidth < 763 &&
		tl.from(".landing__main2", {
			duration: 1,
			delay: 0,
			opacity: 0,
			y: 80,
			ease: "expo.easeOut",
		});
};

const animateShapes = () => {
	const infiniteTl = gsap.timeline({
		repeat: -1,
	});
	infiniteTl
		.to(".shapes .shape", {
			duration: 4,
			rotate: 360,
			delay: -1,
			ease: "power3.easeInOut",
			stagger: 2,
		})
		.to(".shapes .shape-3", {
			duration: 1,
			rotate: 360,
			delay: -2,
			ease: "power3.easeInOut",
		})
		.to(".shapes .shape", {
			duration: 3,
			rotate: 0,
			ease: "power3.easeInOut",
			stagger: 1,
		})
		.to(".shapes .shape", {
			duration: 1,
			opacity: 0,
			delay: -1,
			ease: "power3.easeInOut",
			stagger: 1,
		})
		.to(".shapes .shape", {
			duration: 1.5,
			opacity: 1,
			ease: "power3.easeInOut",
			stagger: 1,
		});
};

const animateMainShape = () => {
	const infiniteTl = gsap.timeline({
		repeat: -1,
	});
	infiniteTl
		.to(".shapes .main-circle", {
			duration: 6,
			x: -30,
			y: -50,
			ease: "expo.easeOut",
		})
		.to(".shapes .main-circle", {
			duration: 6,
			x: -30,
			y: 50,
			ease: "expo.easeOut",
		})
		.to(".shapes .main-circle", {
			duration: 4,
			x: 0,
			y: 0,
			ease: "expo.easeOut",
		});
};

export const boxHover = (e) => {
	const tl = gsap.timeline();
	window.innerWidth >= 986 &&
		tl
			.to(e.target.querySelector(".link"), {
				duration: 0,
				opacity: 1,
			})
			.from(e.target.querySelectorAll(".box-anim"), {
				duration: 0.3,
				opacity: 0,
				y: 30,
				stagger: 0.1,
				ease: "Power3.easeOut",
			});
};

export const boxExit = (e) => {
	window.innerWidth >= 986 &&
		gsap.to(e.target.querySelector(".link"), {
			duration: 0,
			opacity: 0,
		});
};

export const fadeIn = (el) => {
	gsap.to(el, {
		duration: 2,
		opacity: 1,
		y: -60,
		ease: "power4.out",
	});
};

export const fadeOut = (el) => {
	gsap.to(el, {
		duration: 1,
		opacity: 0,
		y: -20,
		ease: "power4.out",
	});
};
