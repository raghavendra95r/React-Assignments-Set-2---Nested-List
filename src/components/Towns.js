import React, { useState } from "react";



const Towns = (props) => {
    return (
        <div>
             <li id={`towns${props.id}`}>
                <button>{props.town.name} </button>
            </li>
        </div>
    )
}

export default Towns;
