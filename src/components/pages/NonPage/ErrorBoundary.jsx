import NotFound from "./NotFound.jsx";
import React from "react";

class ErrorBoundaryCustom extends React.Component {
	constructor (props) {
		super(props);
		this.state = {hasError: false};
	}
	
	static getDerivedStateFromError (error) {
		console.log('getDerived')
		return {hasError: true};
	}
	
	componentDidCatch (error, errorInfo) {
		console.log("---ERROR BOUNDARY---");
		console.log("error : " + error);
	}
	
	render () {
		if(this.state.hasError) {
			
			return (
					// retourne page 404 en cas d'erreur
					<NotFound/>
			);
		}
		
		return this.props.children;
	}
}

export default ErrorBoundaryCustom;