import React, { useState } from 'react';
import '../App.css';
import TodoTable from './TodoTable.js'

export default function Todolist(props) {
 const [todo, setTodo] = useState({desc: '', date: ''});
 const [todos, setTodos] = useState([]);

const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
}

const inputChanged = (event) => {
    event.preventDefault();
    setTodo({...todo, [event.target.name]: event.target.value});
}

const deleteTodos = (event) => {
    event.preventDefault();
    setTodos(todos.filter((todo, index) => parseInt(event.target.id) !== index))
    }

 return(
    <div>
     <form onSubmit={addTodo}>
        Desc: 
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        Date:
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        <input type="submit" value="add" />
     </form>
     <TodoTable todos={todos} deleteTodos={deleteTodos}/>
    </div>
 );
}