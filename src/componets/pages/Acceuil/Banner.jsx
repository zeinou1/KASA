import banner_img from '../../../assets/Banner-img.png'
import '../../../styles/Banner.css'

function Banner () {
	return (
			<header className="Banner">
				<img src={banner_img} alt="image" className="Banner__img"/>
				<p className="Banner__infos">Chez vous, partout et ailleurs</p>
			</header>
	
	)
}

export default Banner;