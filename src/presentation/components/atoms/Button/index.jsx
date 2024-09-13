// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "@atoms/SystemIcon";

const Button = (props) => {
	const { href, variant = "primary", category, text, icon } = props;

	const iconCont = icon && <SystemIcon name={icon} />;
	let variantStyle = style.btn;
	if (variant === "primary") {
		variantStyle += " " + style.btnPrimary;
	} else if (variant === "accent") {
		variantStyle += " " + style.btnAccent;
	}

	if (category === "icon") {
		variantStyle += " " + style.btnIcon;
	}

	if (category === "rounded") {
		variantStyle += " " + style.btnRounded;
	}

	return (
		<>
			{href && (
				<Link {...props} className={variantStyle}>
					{text}
					{iconCont}
				</Link>
			)}
			{!href && (
				<button {...props} className={variantStyle}>
					{text}
					{iconCont}
				</button>
			)}
		</>
	);
};

export default Button;
