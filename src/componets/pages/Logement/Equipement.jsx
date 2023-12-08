import '../../../styles/Logement.css'
import {useParams} from "react-router-dom";
import donnee from "../../../datas/logements.json";

function EquipeMent () {
	const {id} = useParams()
	const DaTa = donnee.find((logement) => logement.id === id);
	const Equipement = DaTa?.equipments.map((equipment, i) => {
		return (
				<ul key={i}>
					<li>{equipment}</li>
				</ul>
		);
	});
	return (
			
			
			<ul className="Logement__descrption_equipement">
				{Equipement}
			</ul>
	
	
	)
}

export default EquipeMent;