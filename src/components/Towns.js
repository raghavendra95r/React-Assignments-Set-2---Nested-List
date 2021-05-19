import React, { useState } from "react";



const Towns = (props) => {
    return (
        <div>
             <li >
                <button>{props.towns.name} </button>
            </li>
        </div>
    )
}

export default Towns;
