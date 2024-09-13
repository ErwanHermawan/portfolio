// -- core
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

const Footer = (props) => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<p className={style.copyright}>&copy; 2024 Erwan Hermawan</p>
			</div>
		</footer>
	);
};

export default Footer;
