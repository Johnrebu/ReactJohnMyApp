import React from "react";
import { useState } from "react";
const TodoList = () => {
    const [todos, setTodos] = useState(['Learn React' , 'Build React']);

    const addTodo = () => {
        const newTodo = prompt('Enter a new Todo');
        setTodos((prevTodos) => [...prevTodos, "Build Product"]);
    } 
    return(
        <>
         <h1>Todo List</h1>
         <ul>
         { todos.map((item, index)=> (
                 <li key={index}>{item}</li>
             ))}
         </ul>
         <button onClick={addTodo}>Add Todo</button>
             
        </>
    )
}

export default TodoList;