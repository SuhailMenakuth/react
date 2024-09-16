import React from 'react'

// function PropsExample(props) {

//     const {name , age, place} = props.person;
//   return (
//     <div>

        

//         <ul>
//             <li>
//                 Name : {name}
//             </li>
//             <ul>
//             <li>Age :{age}</li>
//             <li>Place : {place}</li>
//             </ul>
            
//         </ul>
        

      
//     </div>
//   )
// }



function PropsExample(props){
    return (
       <div>
        <h2>Person Details</h2>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Place: {props.place}</p>
      </div>
       
        
    )
}

export default PropsExample
