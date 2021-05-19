import React, { useState } from "react";

const Towns = (props) => {
    return (
        <div>
             <li id={`town${props.id}`}>
                <button>{props.town.name} </button>
            </li>
        </div>
    )
}

export default Towns;
