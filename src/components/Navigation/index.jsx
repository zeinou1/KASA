import logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import '../../styles/Nav.scss';

const Navigation = () => {
	return (
			<nav className="navbar">
				<img src={logo} alt="logo Kasa" className="navbar_logo"/>
				<ul className="navbar_navigation">
					
					<li className="navbar_active ">
						<Link to="/" className="navbar_active">
							Accueil
						</Link>
					</li>
					<li className="navbar_active">
						<Link to="/AproposIndex" className="navbar_active">
							A Propos
						</Link>
					</li>
				
				</ul>
			</nav>
	)
}
export default Navigation;