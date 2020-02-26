import React, { useState } from 'react';
import '../App.css';

export default function Todolist() {
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

 return(
    <div>
     <form onSubmit={addTodo}>
        Desc: 
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        Date:
        <input type="text" name="date" value={todo.date} onChange={inputChanged} />
        <input type="submit" value="add" />
     </form>
     Desc
     Date  
     <table>
        <tbody>
        {
            todos.map((todo, index) =>
                <tr key={index}>
                    <td>{todo.desc}</td>
                    <td>{todo.date}</td>
                </tr>                
                )
        }    
        </tbody>
     </table>
    </div>
 );
}
