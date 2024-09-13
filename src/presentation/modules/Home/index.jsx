"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- components
import Banner from "@molecules/Banner";
import Portfolios from "@organisms/Portfolios";

const Home = (props) => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("");
	}, [setMenu]);

	return (
		<>
			<Banner />
			<Portfolios />
		</>
	);
};

export default Home;
