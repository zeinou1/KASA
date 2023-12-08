import {BrowserRouter, Routes, Route} from "react-router-dom";
import App_Apropos from "./components/pages/Apropos/App_Apropos.jsx";
import Accueil from "./components/pages/Acceuil/Accueil.jsx";
import InfosLogement from "./components/pages/Logement/InfosLogement.jsx";
import Navigation from "./components/pages/Navigation/navigation.jsx";
import Footer from "./components/pages/Footer/Footer.jsx";
import NotFound from "./components/pages/NonPage/NotFound.jsx";
import ErrorBoundaryCustom from "./components/pages/NonPage/ErrorBoundary.jsx";

export default function App () {
	return (
			
			<>
				
				<BrowserRouter>
					<Navigation/>
					<Routes>
						<Route path="/" element={<Accueil/>}/>
						<Route path="/Accueil" element={
							/**
							 * 		//Gestion erreur avec ErrorBoundary
							 **/
							<ErrorBoundaryCustom>
								<Accueil/>
							</ErrorBoundaryCustom>
						}/>
						<Route path="/App_Apropos" element={
							<ErrorBoundaryCustom>
								<App_Apropos/>
							</ErrorBoundaryCustom>
						}/>
						<Route path="/logement/:id" element={
							
							<ErrorBoundaryCustom>
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