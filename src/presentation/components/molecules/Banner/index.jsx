// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

const Banner = () => {
	const data = {
		title: "Hi, I'm Erwan",
		description:
			"I'm a passionate Frontend Developer focused on crafting remarkable digital experiences. My aim is to blend functionality and aesthetics to create impactful solutions",
	};

	const title = data.title.split(" ");

	return (
		<div className={style.banner}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.text}>
						<h1 className={style.title}>
							{title.map((el, i) => (
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.5,
										delay: i / 5,
									}}
									key={i}
								>
									{el}{" "}
								</motion.span>
							))}
						</h1>
						<p className={style.description}>{data.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
