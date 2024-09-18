import React, { useRef, useState } from 'react'
import Button from './Button'

function Example(){


    const colors =["red" , "blue"]
    const [count , setColor] = useState(1);
    const value = useRef(0);

    function change(){

        setColor(
            count => count+1
            
        )

        setColor(
            count => count+1
            
        )

        setColor(
            count => count+1
            
        )
        

        if (count >=2){
            value.current.style.background="red";
        }

    }

    console.log(count)


    return(

        <button ref={value } onClick={change}> click </button>
    )
}

export default Example