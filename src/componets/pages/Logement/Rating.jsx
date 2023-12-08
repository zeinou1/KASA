import AvisNegatif from "../../../assets/AvisNegatif.png"
import AvisPositif from "../../../assets/AvisPositif.png"
import "../../../styles/Logement.css"
function Rating ({scaleValue}) {
	const Range = [1, 2, 3, 4, 5]
	
	return (
			<div className="avis_p">
				{
					Range.map((note) =>
							scaleValue >= note ? (
								<img key={note.toString()} src={AvisPositif} alt="avis negatif" className="Logement__tags"/>
							) : <img key={note.toString()} src={AvisNegatif} alt="avis positif" className="Logement__tags"/>
					)
				}
			</div>
	);
}

export default Rating;


/*import AvisNegatif from "../../../assets/AvisNegatif.png"
import AvisPositif from "../../../assets/AvisPositif.png"

function Rating (props) {
	const score = props.score;
	const Range = [1,2,3,4,5]
	return (
			<div>
				{ Range.map((NbAvis) =>
						score >= NbAvis ? (
								<img key={NbAvis.toString()} src={AvisPositif} alt="avis negatif"/>
						) : <img key={NbAvis.toString()} src={AvisNegatif} alt="avis positif"/>
				)
				}
			
			</div>
	);
}
export default Rating*/