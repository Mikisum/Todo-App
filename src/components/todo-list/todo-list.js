import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css'

const TodoList = ({ notes }) => {
  return(
    <ul className='list-group'>
      {
        notes.map((note) => {
          return(
            <li key={note.id}>
              <TodoListItem note={note}/>
            </li>
          )
        })
      }

    </ul>
  )
}

export default TodoList;