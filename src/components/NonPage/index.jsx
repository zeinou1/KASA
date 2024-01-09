import {
    Link
} from "react-router-dom";




function Error() {
    return (
        <main
            className="NotFound">
            <h1>
                <strong
                    className="NotFound__infos">404</strong>
            </h1>
            <p>
                Oups!
                La
                page
                que
                vous
                demandez
                n'existe
                pas.
            </p>
            <Link
                to='/'
                className="NotFound__retour">
                Retourner
                sur
                la
                page
                d’accueil
            </Link>
        </main>
    );
}

export default Error;