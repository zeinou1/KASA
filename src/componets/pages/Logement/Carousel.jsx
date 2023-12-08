import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import "../../../styles/Logement.css";

function Carrousel ({images}) {
	const [State, setState] = useState(0);
	const [animate, setAnimate] = useState('left')
	const handleNext = () => {
		setState(State === images.length - 1 ? 0 : State + 1);
		setAnimate('right')
	};
	
	const handlePrevious = () => {
		setState(State === 0 ? images.length - 1 : State - 1);
		setAnimate('left')
		
		
	};
	
	return (
			<div className='Logement__Banner'
			
			>
				{
					images.map((image, index) => {
						return (
								
								<div key={index}
								
								>
									
									{ index === State && (
													<img src={image} alt="img-appartement" className="Logement__pictures"
													     style= {{
														     animation: `Animate${animate === 'left' ? 'Left' : 'Right'} .7s ease-in backwards` ,
													     }}
													/>
											)
									}
									{
											images.length > 1 && (
													<span className="Logement__Number">
                {State + 1}/{images.length}
              </span>
											)
									}
									
									{/* arrow*/}
									{images.length > 1 && (
											<FontAwesomeIcon
													icon={faAngleLeft}
													className="Angle-left"
													onClick={handlePrevious}
											
											/>
									)}
									
									{images.length > 1 && (
											<FontAwesomeIcon
													icon={faAngleRight}
													className="Angle-right"
													onClick={handleNext}
											/>
									)}
								
								</div>
						);
					})}
			</div>
	);
}

export default Carrousel;
/*https://medium.com/@lou.augey/react-intercepter-les-erreurs-javascript-avec-les-error-boundaries-6e4966d9b0f7*/
/*https://fr.legacy.reactjs.org/docs/error-boundaries.html*/

