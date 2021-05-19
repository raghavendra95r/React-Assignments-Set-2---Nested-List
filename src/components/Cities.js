import React, { useState } from "react";
import Towns from './Towns';


const Cities = (props) => {
    let [click ,setClick] = useState(false)
    return (
        <div>
               <li onClick={()=> setClick(!click)} >
                <button>{props.city.name} </button>
            </li>
            <ul>
                {click ? props.city.towns.map((town ,i) => {
                    return (
                        <Towns town={town} id={i+1} />
                    )
                }) : " "}
            </ul>
            
        </div>
    )
}

export default Cities;
