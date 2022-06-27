import React from "react"
import './ProductList.css'
import {Categories} from "../../mocks/product-categories"

function SideBarCategory({filter}){

 return(
    <div className="sideBar">
        {Categories.results.map((item)=>{
         return (  
            <div key={item.id}>
                 <input type='checkbox' onClick={filter} value={item.id} name={item.data.name}/>{item.data.name}
                </div>
         )
        })}
    </div>
 )
}

export default SideBarCategory