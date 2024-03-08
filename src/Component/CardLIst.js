import React from "react";
// import { robots } from "./Robots";
import Card from "./Card";


// const CardList =({robots})=>{
//     return(
//     <div>
//         <Card id={robots[0].id} name={robots[0].name} email={robots[0].enail} />
//         <Card id={robots[1].id} name={robots[0].name} email={robots[0].enail} />
//         <Card id={robots[2].id} name={robots[0].name} email={robots[0].enail} />
//     </div>
//     );
// }

const CardList=({robots})=>{
    const CardCaomonents=robots.map((user,i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    });
    return(
        <div>
            {CardCaomonents}
        </div>
    );
}

// const CardList=({robots})=>{
//     const CardCaomonents=robots.map((user)=>{
//         return <Card id={user.id} name={user.name} email={user.enail} />
//     });
//     return(
//         <div>
//             {CardCaomonents}
//         </div>
//     );
// }

export default CardList;
