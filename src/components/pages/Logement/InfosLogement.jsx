import "../../../styles/Logement.css"
import donnee from '../../../datas/logements.json'
import {useParams} from "react-router-dom";
import Rating from "./Rating.jsx";
import Carrousel from "./Carousel.jsx";
import GestionAffichage from "./GestionAffichage.jsx";





export default function InfosLogement () {
	const {id} = useParams()
	// recupération Des données et les affichées via leurs IDS
	const DaTa = donnee.find((logement) => logement.id === id);
	
	//function Recuperation des Tags
		const {tags} = DaTa;
 
	return (

			<>
				{<>
								<header>
									<Carrousel images={DaTa.pictures}
									/>
								</header>
								<main className="Logement__main">
									<h1>
										{DaTa.title}
									</h1>
									
									<p className='Logement__region'>{DaTa.location}</p>
									<div className="Logement__Infos">
										<div>
											{/*Recupération des tags*/}
											{
											<ul  className="Logement__critere">
												 { tags.map((tag, i) => (
														 <li key={tag.toString()}>
															 {tag}
														 </li>
												 ))
													
												 }
											</ul>
											
											
											}
										</div>
										<>
											<div className="Logement__Proprio">
												{/* Rating */}
												<Rating scaleValue={DaTa.rating}/>
												
												<div className="Logement__Proprio_contact">
													<p>{DaTa.host.name}<br/></p>
													<img src={DaTa.host.picture} className="Logement__Proprio_photo" alt="Photo propriov"/>
												</div>
											</div>
										
										</>
									</div>
									<GestionAffichage/>
								</main>
							</>
				}
			
			
			</>

	)
			;
}
