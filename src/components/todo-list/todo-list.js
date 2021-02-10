import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import { connect, useSelector } from 'react-redux';

import './todo-list.css'
import reducer from '../../reducers';

const selectTodos = (state) => state.todos;

const TodoList = () => {
  const todos = useSelector(state => state)
  console.log(todos)
 

  return(
    <ul className='list-group'>
      {
        todos.map((todo) => {
          return(
            <TodoListItem key={todo.id}
              todo={todo}
            />
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    todos: reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
export default connect(mapStateToProps)(TodoList);