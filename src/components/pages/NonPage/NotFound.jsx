import {Link} from "react-router-dom";
import '../../../styles/NotFound.css'
Link

function NotFound () {
	return (
			<div>
				<div className="NotFound">
					<span className="NotFound__infos">404</span>
					<p>
						Oups! La page que vous demandez n'existe pas.
					</p>
					<Link to='/Accueil' className="NotFound__retour">
						Retourner sur la page d’accue
					</Link>
				</div>
			</div>
	);
}

export default NotFound;