import React, { useState } from 'react';
import '../App.css';
import Todolist from './Todolist.js'

export default function TodoTable(props) {
    
 return(
    <div> 
     <table>
     Desk:
     Date:    
        <tbody>
        {
            props.todos.map((todo, index) =>
                <tr key={index}>
                    <td>{todo.desc}</td>
                    <td>{todo.date}</td>
                    <td><button id={index} onClick={props.deleteTodos}>Delete</button></td>
                </tr>                
                )
        }    
        </tbody>
     </table>
    </div>
 );
}