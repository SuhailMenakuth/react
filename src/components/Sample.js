import React, { useEffect, useState } from 'react'

function Sample() {

    const [variable, setvariable]=useState(0)

    function Increment(){


      console.log(variable)
       setvariable(variable+1);
       console.log(variable)

    }


    console.log(variable);



   //console.log(variable);
  return (
    <div>
        <button 
        onClick={Increment}
        >dfghjk</button>
      
    </div>
  )
}

export default Sample








