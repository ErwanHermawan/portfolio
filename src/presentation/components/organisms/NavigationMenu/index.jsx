"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// -- style
import "./style.scss";

// -- data
import data from "./data";

const NavigationMenu = (props) => {
	return (
		<div className="nav">
			<div className="inner">
				<div className="about">
					<h2 className="title">{data.title}</h2>
					<div className="info">
						<p className="text">{data.country}</p>
						<p className="text">{data.email}</p>
						<p className="text">{data.phone}</p>
					</div>
					<ul className="sosmed">
						{data?.sosmed.map((valS, idxS) => (
							<li className="sosmedItem" key={`fs-${idxS}`}>
								<Link href={valS.to} className="sosmedLink">
									<i className={`fi-${valS.icon}`}></i>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="menu">
					<ul className="list">
						{data.nav.map((val, idx) => (
							<motion.li
								className="item"
								key={`hm-${idx}`}
								whileHover={{ color: "#828282" }}
								transition={{ duration: 0.3 }}
								onMouseEnter={() => {
									console.log("hovered");
								}}
							>
								<Link href={val.to} className="link">
									{val.text}
									<div className="fi"></div>
								</Link>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavigationMenu;
