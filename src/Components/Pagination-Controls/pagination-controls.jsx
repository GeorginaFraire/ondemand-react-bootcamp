import React from "react";
//import "./pagination-controls.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"


function PaginationControls(){
    return (
        <div style={{float:'right', marginTop:'10px', marginRight:'30px'}}>
            <button style={{margin:'2px', backgroundColor:'transparent', color:'#1e517b', border: '1px solid #1e517b', cursor:'pointer'}}>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                
            </button>
            <button style={{margin:'2px', backgroundColor:'transparent', color:'#1e517b', border: 'none'}}>x</button>
            <button style={{margin:'2px', backgroundColor:'transparent', color:'#1e517b', border: '1px solid #1e517b',cursor:'pointer'}}>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default PaginationControls