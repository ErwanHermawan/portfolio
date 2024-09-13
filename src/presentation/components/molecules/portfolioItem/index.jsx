// -- cores
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

export const PortfolioItem = (props) => {
	return (
		<div className={style.item}>
			<div className={style.box}>
				<div className={style.text}>
					<div>
						<h3 className={style.name}>{props.name}</h3>
						<p className={style.description}>{props.description}</p>
						<ul className={style.skills}>
							{props.skills.map((val, idx) => {
								return (
									<li className={style.skillsItem} key={`sk-${idx}`}>
										{val}
									</li>
								);
							})}
						</ul>
					</div>
					<div className={style.button}>
						<Link href={props.website}>Landing Page</Link>
						<Link href={props.project}>View Project</Link>
					</div>
				</div>
				<div className={style.image}>
					<Image className={style.imageEl} src={props.image} alt={props.name} />
				</div>
			</div>
		</div>
	);
};

export default PortfolioItem;
