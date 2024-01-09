import '../../styles/Logement.scss'

// eslint-disable-next-line react/prop-types
function Desc({DATA}) {
	
	return (
		<p className="Logement__descrption_affichage">
			{/* collapse description*/}
			{/* eslint-disable-next-line react/prop-types */}
			{DATA.description}
		</p>
	)
}

export default Desc;