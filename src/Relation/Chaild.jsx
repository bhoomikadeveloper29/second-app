import React, { useState } from 'react'

function Chaild({getData}) {

    const [first] = useState("bhoomika")

  return (
    <div>
        <button onClick={()=>{getData(first)}}>click</button>
    </div>
  )
}

export default Chaild