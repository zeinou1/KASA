import "../../styles/components/Card.scss";
import Data from "../../datas/logements.json";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <main className="card">
        {Data.map((logement) => (
          <article key={logement.id} className="card_article article">
            <Link to={`/Logement/${logement.id}`}>
              {/* Récupération et affichage des logements niveau accueil*/}
              <img src={logement.cover} alt={logement.title} className="card_cover" />
            </Link>
            <p className="card_title">{logement.title}</p>
          </article>
        ))}
      </main>
    </>
  );
}

export default Card;
