// import React, { useState } from "react";
// import Towns from './Towns';


// const Cities = (props) => {
//     const [click1,setClick1] = useState(false);
//     return (
//         <>
//                <li onClick={()=> setClick1(!click1)}  id={`city${props.id}`}>
//                 <button>{props.city.name} </button>
//             </li>
//             <ul>
//                 {click1 ? props.city.towns.map((town ,i) => {
//                     return (
//                         <Towns town={town} key={i+1} id={i+1} />
//                     )
//                 }) : ""}
//             </ul>
            
//         </>
//     )
// }

// export default Cities;

import React, { useState } from 'react';
import Town from './Towns';
export default function Cities(props) {
  const [click, setclick] = useState(false)
  const changeClick = () => {
    setclick(!click);
  }
  return (
    <>
      <li onClick={changeClick} id={`city${props.id}`}><button>{props.cities.name}</button></li>
      <ul>
        {click ? props.cities.towns.map((town, index) => {
          return <Town town={town} key={index + 1} id={index + 1}/>
        }):""}
      </ul>
    </>
  )
}
