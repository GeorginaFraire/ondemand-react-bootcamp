import React from "react";
import "./PaginationControls.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"


function PaginationControls(){
    return (
        <div className="container-pg-controls">
            <button className="btn-pg-controls moves-pg-controls">
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                
            </button>
            <button className="btn-pg-controls">x</button>
            <button className="btn-pg-controls moves-pg-controls">
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default PaginationControls