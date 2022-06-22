import React from "react";
import {Categories} from '../mocks/product-categories'
import '../styles/css/GridCategory.css'
import '../App.css'

function GridCategory() {

    return (
        <>
        <div className="App-container-title">
            <h1> CATEGORIES </h1>
        </div>
        <div className="grid-container">
            {Categories.results.map((item, itemIndex) => { 
                return (    
                    <div key={item.id} className="grid-card">
                        <img className="grid-img" src={item.data.main_image.url} alt={item.data.main_image.alt} />
                        <div className="grid-title">
                            <h1>{item.data.name}</h1>    
                        </div>
                    </div>
                )
            })
            }
        </div>
        </>
    )
}

export default GridCategory;