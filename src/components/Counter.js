import React, { useState , useEffect } from 'react'

// function Counter(props) {
//   return (
//     <div>
//     <h1>Counter :{props.count} </h1>
    
      
//     </div>
//   )
// }

// mounting and unmounting


// function Counter(){
//   const [count,setCount] = useState(0);
//   return(
//     <div>

//       <button onClick={()=> setCount(count+1)}  >Incriment</button>

//       <h1>hello this is a componen : {count} </h1>

//     </div>
//   )
// }








function Counter() {
  useEffect(() =>{

    console.log("mounting .....");

    return ()=>{
      console.log("unmounting ....");
    }


  },[])
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <h1>Hello iam a component : {count}</h1>
    </div>
  )
}




export default Counter
