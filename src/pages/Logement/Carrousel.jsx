import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Carrousel({ images, titre }) {
  const [State, setState] = useState(0);
  const [animate, setAnimate] = useState("left");
  const handleNext = () => {
    // eslint-disable-next-line react/prop-types
    setState(State === images.length - 1 ? 0 : State + 1);
    setAnimate("Right");
  };

  const handlePrevious = () => {
    // eslint-disable-next-line react/prop-types
    setState(State === 0 ? images.length - 1 : State - 1);
    setAnimate("Left");
  };

  return (
    <div className="Logement__Banner">
      {
        // eslint-disable-next-line react/prop-types
        images.map((image, index) => {
          return (
            <div key={index}>
              {index === State && (
                <img
                  src={image}
                  className="Logement__pictures"
                  alt={titre}
                  style={{
                    //Animation carrousel
                    animation: `Animate${
                      animate === "Left" ? "Left" : "Right"
                    } .s ease-in backwards`,
                  }}
                />
              )}
              {
                // eslint-disable-next-line react/prop-types
                images.length > 1 && (
                  <span className="Logement__Number">
                    {/* Nb Img Carrousel */}
                    {/* eslint-disable-next-line react/prop-types */}
                    {State + 1}/{images.length}
                  </span>
                )
              }

              {/* arrow left */}
              {/* eslint-disable-next-line react/prop-types */}
              {images.length > 1 && (
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="Logement__Angle-left"
                  onClick={handlePrevious}
                />
              )}
              {/* arrow right */}
              {/* eslint-disable-next-line react/prop-types */}
              {images.length > 1 && (
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="Logement__Angle-right"
                  onClick={handleNext}
                />
              )}
            </div>
          );
        })
      }
    </div>
  );
}

export default Carrousel;
