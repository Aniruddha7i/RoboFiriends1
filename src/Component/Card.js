import React from "react";
// This code syntax is jsx, so with out react we can not write jsx 
// If we remove react then it shows error 
// react helps to write jsx
import "tachyons";
// const Card =(props)=>{
//     return(
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img src={`https://robohash.org/t${props.id}?200x200`} alt="robo" />
//             <div>
//                 <h3>{props.name}</h3>
//                 {/* thies props.name is js so we need to {} */}
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

// or 

const Card =({id,name,email})=>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robo" />
            <div>
                <h3>{name}</h3>
                {/* thies props.name is js so we need to {} */}
                <p>{email}</p>
            </div>
        </div>
    );
}

// or 

// const Card =(props)=>{
//     return(
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img src={`https://robohash.org/t${props.id}?200x200`} alt="robo" />
//             <div>
//                 <h3>{props.name}</h3>
//                 {/* thies props.name is js so we need to {} */}
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

export default Card;