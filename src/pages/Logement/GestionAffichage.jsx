import Desc from "./Description.jsx";
import {useState} from "react";
import {faAngleUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import EquipeMent from "./Equipement.jsx";


export default function GestionAffichage() {
    const [Show, setShow] = useState(false)
    const [ShowEquiment, setShowEquiment] = useState(false)

    return (
        <div className="Logement">
            {/*GestionAffichage description*/}
            <div className="Logement__descrption">
                <h2 className='Logement__descrption_h2'>Description</h2>

                {Show ? (
                        (<FontAwesomeIcon onClick={() => setShow(!Show)} icon={faChevronDown}
                                          className="Logement__equipemen_chevron-Down"/>)
                    ) :
                    <FontAwesomeIcon onClick={() => setShow(!Show)} icon={faAngleUp}
                                     className="Logement__equipemen_chevron-Up"/>
                }
                {Show && <Desc/>}

            </div>
            {/*Gestion Affichage Equipement */}
            <div className='Logement__equipement'>
                <h2 className='Logement__equipemen_h2'> Equipement</h2>

                {ShowEquiment ? (
                        (<FontAwesomeIcon onClick={() => setShowEquiment(!ShowEquiment)} icon={faChevronDown}
                                          className="Logement__equipemen_chevron-Down"/>)
                    ) :
                    <FontAwesomeIcon onClick={() => setShowEquiment(!ShowEquiment)} icon={faAngleUp}
                                     className="Logement__equipemen_chevron-Up"/>
                }

                {ShowEquiment && <EquipeMent/>}

            </div>
        </div>
    )

}