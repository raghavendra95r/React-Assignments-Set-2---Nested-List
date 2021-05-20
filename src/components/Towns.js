// import React from "react";

// const Towns = (props) => {
//     return (
//         <>
//              <li id={`town${props.id}`}>
//                 <button>{props.town.name} </button>
//             </li>
//         </>
//     )
// }

// export default Towns;

  
import React from 'react';
export default function Town({town,id}) {
  return (
    <>
      <li id={`town${id}`}><button>{town.name}</button></li>
    </>
  )
}