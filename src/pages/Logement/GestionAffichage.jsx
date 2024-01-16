import Desc from "./Description.jsx";
import { useState } from "react";
import { faAngleUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EquipeMent from "./Equipement.jsx";

// eslint-disable-next-line react/prop-types
export default function GestionAffichage({ Donnee }) {
  const [ShowDescription, setShowDescription] = useState(false);
  const [ShowEquipment, setShowEquipment] = useState(false);


  return (
    <div className="Logement">
      {/*GestionAffichage description*/}
      <div className="Logement__descrption">
        <h2 className="Logement__descrption_h2">Description</h2>

        {ShowDescription ? (
          <FontAwesomeIcon
            onClick={() => setShowDescription(!ShowDescription)}
            icon={faChevronDown}
            className="Logement__equipemen_chevron-Down"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setShowDescription(!ShowDescription)}
            icon={faAngleUp}
            className="Logement__equipemen_chevron-Up"
          />
        )}
        {ShowDescription && <Desc DATA={Donnee} />}
      </div>

      {/*Gestion Affichage Equipement */}
      <div className="Logement__equipement">
        <h2 className={"Logement__equipemen_h2"}> Equipement</h2>

        {ShowEquipment ? (
          <FontAwesomeIcon
            onClick={() => setShowEquipment(!ShowEquipment)}
            icon={faChevronDown}
            className="Logement__equipemen_chevron-Down"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setShowEquipment(!ShowEquipment)}
            icon={faAngleUp}
            className="Logement__equipemen_chevron-Up"
          />
        )}

        {ShowEquipment && <EquipeMent DATA={Donnee} />}
      </div>
    </div>
  );
}
