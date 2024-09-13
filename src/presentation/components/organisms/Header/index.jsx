"use client";

// -- core
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// -- data
import headerData from "./headerData";

// -- style
import style from "./style.module.scss";

const Header = (props) => {
	const overlay = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const tl = useRef(null);
	console.log(isMenuOpen);

	useEffect(() => {}, [isMenuOpen]);

	const menuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			tl.current = gsap.timeline({ paused: true }).to(overlay, {
				duration: 1.25,
				ease: "power4.inOut",
				css: { opacity: 1, visibility: "visible" },
			});
		},
		{ scope: overlay }
	);

	useEffect(() => {
		if (isMenuOpen) {
			tl.current.play();
			console.log(overlay);
		} else {
			tl.current.reverse();
			console.log(overlay);
		}
	}, [isMenuOpen]);

	return (
		<>
			<header className={style.header}>
				<div className="container">
					<div className={style.inner}>
						{/* logo */}
						<Link href={headerData.logo.to} className={style.logo}>
							<Image
								src={headerData.logo.white}
								alt={headerData.logo.alt}
								height={60}
							/>
						</Link>
						{/* burger menu */}
						<button
							type="button"
							className={style.burgerMenu}
							onClick={menuToggle}
						>
							<span className={style.burgerMenuBar}></span>
							<span className={style.burgerMenuBar}></span>
							<span className={style.burgerMenuBar}></span>
						</button>
					</div>
				</div>
			</header>

			{/* overlay */}
			<div ref={overlay} className={style.overlay}>
				<div className="container">
					<div className={style.wrapper}>
						<div className={style.about}>
							<h2 className={style.title}>{headerData.title}</h2>
							<div className={style.info}>
								<p>{headerData.country}</p>
								<p>{headerData.email}</p>
								<p>{headerData.phone}</p>
							</div>
							<ul className={style.sosmed}>
								{headerData?.sosmed.map((valS, idxS) => (
									<li className={style.sosmedItem} key={`fs-${idxS}`}>
										<Link href={valS.to} className={style.sosmedLink}>
											<i className={`fi-${valS.icon}`}></i>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<ul className={style.nav}>
							{headerData.nav.map((val, idx) => (
								<li className={style.navItem} key={`hm-${idx}`}>
									<Link href={val.to} className={style.navLink}>
										{val.text}
										<div className="fi"></div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
