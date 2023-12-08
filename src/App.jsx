
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App_propos from "./components/pages/Apropos/App_propos.jsx";
import Accueil from "./components/pages/Acceuil/Accueil.jsx";
import InfosLogement from "./components/pages/Logement/InfosLogement.jsx";
import Navigation from "./components/pages/Navigation/navigation.jsx";
import Footer from "./components/pages/Footer/Footer.jsx";
import NotFound from "./components/pages/NonPage/NotFound.jsx";
export default function App () {
	return (
			
			<>
				
				<BrowserRouter>
					<Navigation/>
					<Routes>
						<Route path="/" element={<Accueil/>}/>
						<Route path="/Accueil" element={<Accueil/>}/>
						<Route path="/App_propos" element={<App_propos/>}/>
						<Route path="/logement/:id" element={<InfosLogement/>}/>
						<Route path="*" element={<NotFound/>}/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			
			</>
	
	
	)
}