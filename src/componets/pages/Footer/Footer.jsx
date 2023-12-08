import "../../../styles/footer.css";
import logo from '../../../assets/footer.png'
export default function Footer () {
	return (
			
			<footer className='footer'>
				<div className="footer__div">
				<img src={logo} alt="logo footer" className="logo-png"/>
				<p className="footer__copyright"> © 2020 Kasa. All rights reserved</p>
				</div>
			</footer>
			
	);
}
