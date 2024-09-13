"use client";

import { useEffect } from "react";
import { preLoaderAnim } from "@utils/preLoader";

// -- style
import style from "./style.module.scss";

const PreLoader = () => {
	useEffect(() => {
		preLoaderAnim();
	}, []);

	return (
		<div className="preloader">
			<div className="texts-container">
				<span>Developer,</span>
				<span>Curator,</span>
				<span>Vibes.</span>
			</div>
		</div>
	);
};

export default PreLoader;
