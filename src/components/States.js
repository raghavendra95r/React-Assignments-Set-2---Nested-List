import React, { useState } from "react";
import Cities from "./Cities";

const States = (props) => {
    let [click ,setClick] = useState(false)
    return (
        <div>
            <li onClick={()=> setClick(!click)} id={`state${props.id}`}>
                <button>{props.state.name} </button>
            </li>
            <ul>
                {click ? props.state.cities.map((city ,i) => {
                    return (
                        <Cities city={city} key={i+1} id={i+1} />
                    )
                }) : ""}
            </ul>
        </div>
    )
}

export default States;
