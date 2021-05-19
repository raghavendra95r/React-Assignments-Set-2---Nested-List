import React, { useState } from "react";



const Towns = (props) => {
    return (
        <div>
             <li >
                <button>{props.town.name} </button>
            </li>
        </div>
    )
}

export default Towns;
