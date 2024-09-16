import React from 'react'

function Condition({person}) {
  return (
    <ul>
      {person
         .filter(person => person.age >18)
         .map((person , index) =>(
          <li key={index} >

            Name: {person.name},Age:{person.age},Place:{person.place}

          </li>
         )
        )

      }
    </ul>
  );
}

export default Condition
