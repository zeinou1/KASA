import {BrowserRouter, Routes, Route} from "react-router-dom";
import App_propos from "./componets/pages/Apropos/App_propos.jsx";
import Accueil from "./componets/pages/Acceuil/Accueil.jsx";
import InfosLogement from "./componets/pages/Logement/InfosLogement.jsx";
import Navigation from "./componets/pages/Navigation/navigation.jsx";
import Footer from "./componets/pages/Footer/Footer.jsx";
import NotFound from "./componets/pages/NonPage/NotFound.jsx";
import ErrorBoundaryCustom from "./componets/pages/NonPage/ErrorBoundary.jsx";

export default function App (props) {
	return (
			
				<>
					
					<BrowserRouter>
						<Navigation/>
						<Routes>
							<Route path="/" element={<Accueil/>}/>
							<Route path="/Accueil" element={<Accueil/>}/>
							<Route path="/App_propos" element={<App_propos/>}/>
					
								<Route path="/logement/:id" element={
									
									<ErrorBoundaryCustom composant='InfosLogement'>
									<InfosLogement/>
									</ErrorBoundaryCustom>
								
								}/>
				   
							<Route path="*" element={<NotFound/>}/>
						</Routes>
						<Footer/>
					</BrowserRouter>
				
				</>
		
	
	)
}