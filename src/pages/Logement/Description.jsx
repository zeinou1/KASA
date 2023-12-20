import '../../styles/Logement.scss'
import {useParams} from "react-router-dom";
import donnee from "../../datas/logements.json";

function Desc () {
	const {id} = useParams()
	const DaTa = donnee.find((logement) => logement.id === id);
	return (
					<p className="Logement__descrption_affichage">
						{/* collapse description*/}
						{DaTa.description}
					</p>
			
	
	)
}
export default Desc;