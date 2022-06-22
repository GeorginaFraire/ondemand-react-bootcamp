import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BtnSlider({ direction, movement }) {
    return (
      <div className="btn-slide">
        <button
          onClick={movement}
          className={direction === "left" ? "slide-prev" : "slide-next"}
        >
          <FontAwesomeIcon
            icon={direction === "left" ? faArrowLeft : faArrowRight}
            size="2x"
          />
        </button>
      </div>
    );
  }

  export default BtnSlider;
