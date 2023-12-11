import {BrowserRouter, Routes, Route} from "react-router-dom";
import App_Apropos from "./components/pages/Apropos/App_Apropos.jsx";
import Accueil from "./components/pages/Acceuil/Accueil.jsx";
import App_Logement from "./components/pages/Logement/App_Logement.jsx";
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
								<App_Logement/>
							</ErrorBoundaryCustom>
						}/>
						
						<Route path="*" element={<NotFound/>}/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			
			</>
	
	
	)
}