import '../../../styles/Card.css'
import Data from '../../../datas/logements.json'
import {Link} from "react-router-dom";


function Card () {
	
	
	return (
			<>
			
				<main className="card">
					{
						Data.map((logement) => (
						
								<article key={logement.id} className="card_article article">
									<Link to={`/Logement/${logement.id}`}>
									<img src={logement.cover} alt="" className="card_cover"/>
									</Link>
									<p className="card_title">
				
										{logement.title}
									
									</p>
									
								</article>
							
				
						))
						
					}
					
				</main>
			
				
			</>
			
		
	);
}
export default Card;