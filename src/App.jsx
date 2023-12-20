import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./components/Home/index.jsx";
import ErrorBoundaryCustom from "./components/NonPage/ErrorBoundary.jsx";
import PageLogement from "./pages/Logement/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Navigation from "./components/Navigation/index.jsx";
import AproposIndex from "./pages/Apropos/index.jsx";
import Error from "./components/NonPage/index.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <ErrorBoundaryCustom>
                <Routes>
                    <Route path="/" element={
                        <Index/>
                    }/>
                    <Route path="/AproposIndex" element={
                        <AproposIndex/>
                    }/>
                    <Route path="/logement/:id" element={
                        <ErrorBoundaryCustom>
                            <PageLogement/>
                        </ErrorBoundaryCustom>
                    }/>
                    <Route path="*" element={
                        <Error/>
                    }/>
                </Routes>
            </ErrorBoundaryCustom>
            <Footer/>
        </BrowserRouter>
    )
}