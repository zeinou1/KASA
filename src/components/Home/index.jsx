
import Card from "./Card.jsx";
import banner_img from "../../assets/Banner-img.png";
import '../../styles/HomeBanner.scss'

export default function Index () {
	return (
			<>
				<header className="Banner">
					<img src={banner_img} alt="image" className="Banner__img"/>
					<p className="Banner__infos">Chez vous, partout et ailleurs</p>
				</header>
				<Card/>
			</>
	);
}
