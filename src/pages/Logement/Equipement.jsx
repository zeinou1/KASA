import '../../styles/Logement.scss'

// eslint-disable-next-line react/prop-types
function EquipeMent({DATA}) {
	
	// eslint-disable-next-line react/prop-types
	const Equipement = DATA?.equipments.map((equipment, i) => {
		return (
			<li key={i}>
				{equipment}
			</li>);
	});
	
	return (
		<ul className="Logement__descrption_equipement">
			{/* collapse équipements*/}
			{
				Equipement
			}
		</ul>)
}

export default EquipeMent;