import "../../../styles/Logement.css"
import donnee from '../../../datas/logements.json'
import {Navigate, useParams} from "react-router-dom";
import Rating from "./Rating.jsx";
import Carrousel from "./Carousel.jsx";
import GestionAffichage from "./GestionAffichage.jsx";


export default function InfosLogement () {
	const {id} = useParams()
	const DaTa = donnee.find((logement) => logement.id === id);
	
	// Recuperation des Tags
	const TaGs = DaTa?.tags.map((tag, i) => {
		return (
				<ul key={i}>
					<li>{tag}</li>
				</ul>
		);
	});
	
	//if(!DaTa) {
	//	return <NotFound/>
	//}
	
	
	return (
			<>
				{
					DaTa ? (
							<>
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
										<div className="Logement__critere">
											{TaGs}
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
					
					) : (<Navigate to="/NonPage"/>)
				}
			
			
			</>
	)
			;
}
