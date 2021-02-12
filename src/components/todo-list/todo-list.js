import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import { useSelector } from 'react-redux';

import './todo-list.css'

const TodoList = () => {
  let todos = useSelector(state => state)

  return(
    <ul className='list-group'>
      {
        todos.map((todo) => {
          return(
            <TodoListItem 
              key={todo.id}
              todo={todo}
            />
          )
        })
      }
    </ul>
  )
}

export default TodoList;