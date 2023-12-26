
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {faAngleUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Apropos.scss"
import {Fiabilite, Respect, Securite, Service} from "./Infos-Apropos.jsx";
import image from "../../assets/BannerAp.png";


function AproposIndex() {
    const [Viable, setViable] = useState(false)
    const [Respecte, setRespecte] = useState(false)
    const [ServiceA, setServiceA] = useState(false)
    const [Secure, setSecure] = useState(false)
    return (
        <>
            <header className="ImgBanner">
                <img src={image} alt="image apropos" className="ImgBanner__apropos"/>
            </header>


            <main className="main">
                <div className="apropos">
                    {/* collapse Récupération des informations page apropos (fiabilité)*/}
                    <article className="apropos__liste">
                        <h2 className="apropos__title">
                            Fiabilité
                        </h2>


                        {Viable ? (
                                (<FontAwesomeIcon onClick={() => setViable(!Viable)} icon={faChevronDown}
                                                  className="apropos__chevron"/>)
                            ) :
                            <FontAwesomeIcon onClick={() => setViable(!Viable)} icon={faAngleUp}
                                             className="apropos__chevron"/>
                        }


                        {Viable && <Fiabilite/>}
                    </article>
                    {/* collapse Récupération des informations page apropo (respect)*/}
                    <article className="apropos__liste">
                        <h2 className="apropos__title"> Respect
                        </h2>

                        {Respecte ? (
                                (<FontAwesomeIcon onClick={() => setRespecte(!Respecte)} icon={faChevronDown}
                                                  className="apropos__chevron"/>)
                            ) :
                            <FontAwesomeIcon onClick={() => setRespecte(!Respecte)} icon={faAngleUp}
                                             className="apropos__chevron"/>
                        }

                        {Respecte && <Respect/>}

                    </article>
                    {/* collapseRécupération des informations page apropos(Services)*/}
                    <article className="apropos__liste">
                        <h2 className="apropos__title"> Service
                        </h2>

                        {ServiceA ? (
                                (<FontAwesomeIcon onClick={() => setServiceA(!ServiceA)} icon={faChevronDown}
                                                  className="apropos__chevron"/>)
                            ) :
                            <FontAwesomeIcon onClick={() => setServiceA(!ServiceA)} icon={faAngleUp}
                                             className="apropos__chevron"/>
                        }

                        {ServiceA && <Service/>}
                    </article>
                    {/* collapse Récupération des informations page apropos(sécurité) */}

                    <article className="apropos__liste">
                        <h2 className="apropos__title"> Sécurité </h2>

                        {Secure ? (
                                (<FontAwesomeIcon onClick={() => setSecure(!Secure)} icon={faChevronDown}
                                                  className="apropos__chevron"/>)
                            ) :
                            <FontAwesomeIcon onClick={() => setSecure(!Secure)} icon={faAngleUp}
                                             className="apropos__chevron"/>
                        }

                        {Secure && < Securite/>}
                    </article>

                </div>
            </main>
        </>


    )
}

export default AproposIndex;