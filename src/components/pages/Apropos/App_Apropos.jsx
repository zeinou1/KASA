import BannerAp from "./BannerAp.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {faAngleUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/Apropos.css"
import {Fiabilite, Respect, Securite, Service} from "./Apropos.jsx";


function App_propos () {
	const [Viable, setViable] = useState(false)
	const [Respecte, setRespecte] = useState(false)
	const [ServiceA, setServiceA] = useState(false)
	const [Secure, setSecure] = useState(false)
	return (
			<>
				<>
					<BannerAp/>
				</>
				
				
				<main className="main">
					<div className="apropos">
						<article className="apropos__liste">
							<h2 className="apropos__title">
								Fiabilité
							</h2>
							
							
							{Viable ? (
											(<FontAwesomeIcon onClick={() => setViable(!Viable)} icon={faChevronDown}
											                  className="apropos__chevron"/>)
									
									) :
									<FontAwesomeIcon onClick={() => setViable(!Viable)} icon={faAngleUp} className="apropos__chevron"/>
							}
							
							
							{Viable && <Fiabilite/>}
						</article>
						
						
						<article className="apropos__liste">
							<h2 className="apropos__title"> Respect
							</h2>
							
							{Respecte ? (
											(<FontAwesomeIcon onClick={() => setRespecte(!Respecte)} icon={faChevronDown}
											                  className="apropos__chevron"/>)
									) :
									<FontAwesomeIcon onClick={() => setRespecte(!Respecte)} icon={faAngleUp}
									                 className="apropos__chevron"/>
							}
							
							{Respecte && <Respect/>}
						
						</article>
						
						<article className="apropos__liste">
							<h2 className="apropos__title"> Service
							</h2>
							
							{ServiceA ? (
											(<FontAwesomeIcon onClick={() => setServiceA(!ServiceA)} icon={faChevronDown}
											                  className="apropos__chevron"/>)
									) :
									<FontAwesomeIcon onClick={() => setServiceA(!ServiceA)} icon={faAngleUp}
									                 className="apropos__chevron"/>
							}
							
							{ServiceA && <Service/>}
						</article>
						
						
						<article className="apropos__liste">
							<h2 className="apropos__title"> Sécurité </h2>
							
							{Secure ? (
											(<FontAwesomeIcon onClick={() => setSecure(!Secure)} icon={faChevronDown}
											                  className="apropos__chevron"/>)
									) :
									<FontAwesomeIcon onClick={() => setSecure(!Secure)} icon={faAngleUp} className="apropos__chevron"/>
							}
							
							{Secure && < Securite/>}
						</article>
					
					</div>
				</main>
			</>
	
	
	)
}

export default App_propos;