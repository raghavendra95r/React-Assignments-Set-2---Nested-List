import React, { useState } from "react";
import Towns from './Towns';


const Cities = (props) => {
    const [click ,setClick] = useState(false);
    return (
        <>
               <li onClick={()=> setClick(!click)}  id={`city${props.id}`}>
                <button>{props.city.name} </button>
            </li>
            <ul>
                {click ? props.city.towns.map((town ,i) => {
                    return (
                        <Towns town={town} key={i+1} id={i+1} />
                    )
                }) : ""}
            </ul>
            
        </>
    )
}

export default Cities;
