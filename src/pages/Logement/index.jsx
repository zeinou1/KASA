import donnee from "../../datas/logements.json";
import { useParams } from "react-router-dom";
import Rating from "./Rating.jsx";
import Carrousel from "./Carrousel.jsx";
import GestionAffichage from "./GestionAffichage.jsx";

export default function PageLogement() {
  const { id } = useParams();
  // recherche des urls logments
  const DaTa = donnee?.find((logement) => logement.id === id);
  //Recuperation des Tags
  const { tags } = DaTa;

  return (
    <>
      {
        <>
          <header>
            <Carrousel images={DaTa.pictures} titre={DaTa.title} />
          </header>

          <main className="Logement__main">
            <h1>{DaTa.title}</h1>

            <p className="Logement__region">{DaTa.location}</p>
            <div className="Logement__Infos">
              <div>
                {/*Récupération des tags*/}
                {
                  <ul className="Logement__critere">
                    {tags.map((tag) => (
                      <li key={tag.toString()}>{tag}</li>
                    ))}
                  </ul>
                }
              </div>
              <>
                <div className="Logement__Proprio">
                  {/* Rating (props) avis*/}
                  <Rating scaleValue={DaTa.rating} />

                  <div className="Logement__Proprio_contact">
                    <div className="Logement__Proprio_contact_p">
                    <p>
                      {DaTa.host.name}
              
                    </p>
                    </div>
                    <div className="Logement__Proprio_contact_photo">
                    <img
                      src={DaTa.host.picture}
                      alt="image apropos"
                      className="Logement__Proprio_contact_photo_img"
                    />
                    </div>
                   
                  </div>
                </div>
              </>
            </div>
            <GestionAffichage Donnee={DaTa} />
          </main>
        </>
      }
    </>
  );
}
