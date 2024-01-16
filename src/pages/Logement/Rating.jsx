import AvisNegatif from "../../assets/AvisNegatif.png";
import AvisPositif from "../../assets/AvisPositif.png";

// eslint-disable-next-line react/prop-types
function Rating({ AvisLogement }) {
  const Range = [1, 2, 3, 4, 5];

  return (
    <div className="Logement__avis_p">
      {Range.map((note) =>
        // récupération des avis de chaque logement(props)
        AvisLogement >= note ? (
          <img
            key={note.toString()}
            src={AvisPositif}
            alt="avis negatif"
            className="Logement__tags"
          />
        ) : (
          <img
            key={note.toString()}
            src={AvisNegatif}
            alt="avis positif"
            className="Logement__tags"
          />
        )
      )}
    </div>
  );
}

export default Rating;
