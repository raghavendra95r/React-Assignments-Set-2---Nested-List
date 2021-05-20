import React, { useState } from "react";
import Towns from './Towns';


const Cities = (props) => {
    const [click1,setClick1] = useState(false);
    return (
        <>
               <li onClick={()=> setClick1(!click1)}  id={`city${props.id}`}>
                <button>{props.city.name} </button>
            </li>
            <ul>
                {click1 ? props.cities.towns.map((town ,i) => {
                    return (
                        <Towns town={town} key={i+1} id={i+1} />
                    )
                }) : ""}
            </ul>
            
        </>
    )
}

export default Cities;
