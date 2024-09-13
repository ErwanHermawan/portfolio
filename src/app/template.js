// -- widgets
import HeaderWidget from "@widgets/HeaderWidget";
import FooterWidget from "@widgets/FooterWidget";
import PreLoader from "@organisms/PreLoader";

const Template = (props) => {
	const { children } = props;

	return (
		<>
			{/* <PreLoader /> */}
			<HeaderWidget />
			<main className="main">{children}</main>
			<FooterWidget />
		</>
	);
};

export default Template;
