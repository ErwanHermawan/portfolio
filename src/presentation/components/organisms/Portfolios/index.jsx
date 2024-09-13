// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- components
import Button from "@atoms/Button";
import PortfolioItem from "@molecules/portfolioItem";

// -- data
import data from "./data";

const Portfolios = () => {
	return (
		<div className={style.portfolios}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{data.title}</h2>
					<p className={style.description}>{data.description}</p>
				</div>
				<div className={style.list}>
					{data.portfolios.map((val, idx) => {
						return <PortfolioItem key={`pi-${idx}`} {...val} />;
					})}
				</div>
				<div className={style.button}>
					<Button href={data.button.to} text={data.button.text} />
				</div>
			</div>
		</div>
	);
};

export default Portfolios;
