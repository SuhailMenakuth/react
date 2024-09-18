import React , {useReducer} from 'react'
 
let initialState = 0; 

 function reducer(current , action){

  switch(action){
    
    case 'increment' :
      return current+1;
    case 'decrement' :
      return current -1;
    case 'reset' :
      return initialState;
    default :
        return current;  
  
  }


}


function UseReducerExample(){

 const [count , dispatch ]=useReducer(reducer , initialState);


  return(
    <div>

      <h1>count : {count}</h1>
    <button onClick={()=>dispatch('increment')}>increment</button>
    <button onClick={()=>dispatch('decrement')}>Decrement</button>
    <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}



export default UseReducerExample
