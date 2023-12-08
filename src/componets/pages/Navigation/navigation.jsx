import logo from "../../../assets/logo.png"
//import '../../../styles/Nav.css';
import {Link} from "react-router-dom";
import '../../../styles/Nav-mobile.css';

const Navigation = () => {
	return (
			<nav className="navbar">
				<img src={logo} alt="logo Kasa" className="navbar_logo"/>
				<ul className="navbar_navigation">
					<Link to="/Accueil" className="active">
						
						<li className="navbar_active ">Accueil</li>
					</Link>
					
					<Link to="/App_propos" className="active">
						<li className="navbar_active">A<span>Propos</span></li>
					</Link>
				</ul>
			</nav>
	)
}
export default Navigation;