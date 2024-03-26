import React from 'react'
import Todo from './Todo'

const TodoList=({listtodos,Delete})=> {
  return (
    <div>
        {listtodos.map((todos,index)=>
        <div key={index}>
            <h4>{todos}</h4>  <button onClick={()=>Delete(index)}>delete</button>
        </div>)}
    </div>
  )
}

export default TodoList