import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import "../../../styles/Logement.css";

function Carrousel ({images}) {
	const [State, setState] = useState(0);
	const [animate, setAnimate] = useState('left')
	const handleNext = () => {
		setState(State === images.length - 1 ? 0 : State + 1);
		setAnimate('Right')
	};
	
	const handlePrevious = () => {
		setState(State === 0 ? images.length - 1 : State - 1);
		setAnimate('Left')
		
		
	};
	
	return (
			<div className='Logement__Banner'>
				{
					images.map((image, index) => {
						return (
								<div key={index}
								>
									{ index === State && (
													<img src={image} className="Logement__pictures" alt="image carrousel"
													     style= {{
																 //Animation carrousel
														     animation: `Animate${animate === 'Left' ? 'Left' : 'Right'} .7s ease-in backwards` ,
													     }}
													/>
											)
									}
									{
											images.length > 1 && (
													<span className="Logement__Number">
																{/* Nb Img Carrousel */}
                {State + 1}/{images.length}
              </span>
											)
									}
									
									{/* arrow left */}
									{images.length > 1 && (
											<FontAwesomeIcon
													icon={faAngleLeft}
													className="Angle-left"
													onClick={handlePrevious}
											/>
									)}
									{/* arrow right */}
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


