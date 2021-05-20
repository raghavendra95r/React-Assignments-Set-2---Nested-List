import React from "react";

const Towns = (props) => {
    return (
        <>
             <li id={`town${props.id}`}>
                <button>{props.town.name} </button>
            </li>
        </>
    )
}

export default Towns;
