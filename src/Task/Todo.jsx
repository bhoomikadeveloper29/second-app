import React from 'react'
import { useState } from 'react';
import TodoList from './TodoList';

function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, settodos] = useState([])

     const changeHandler=(event)=>{
       setTodo(event.target.value)
     }
   const submitHandler=(event)=>{
    event.preventDefault();
    const newTodos =[...todos,todo] //(destrcharing)eli newTodos ano variabale ge asingn madta edivi ...todos du previas value na edu store madute and tods ali new value is add ague 
    settodos(newTodos);
    setTodo("");
}

const Delete=(indexaValue)=>{
    const newTodos=todos.filter((todo,index)=>index !== indexaValue);
    settodos(newTodos)
}
 return (
    <div>
        <center>
        <h3>Todo Management Application</h3>
        <form onSubmit={submitHandler}>
        <label htmlFor="">Name: </label>
        <input type="text" placeholder='Enter' name value={todo} onChange={changeHandler}/>
        <button >ADD</button>
        <TodoList listtodos={todos}/>
        </form>

        </center>
    </div> 
  )
}

export default Todo