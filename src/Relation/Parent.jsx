import React, { useState } from 'react'
import Chaild from './Chaild'

function Parent() {
   const[first,setFirst]=useState('')

    function getData(data){
         setFirst(data);
    }
  return (
    <div>
      <h1>{first}</h1>
        <Chaild getData={getData}/>
    </div>
  )
}

export default Parent