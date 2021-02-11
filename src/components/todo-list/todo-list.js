import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import { connect, useSelector } from 'react-redux';

import './todo-list.css'
import reducer from '../../reducers';
import { todoDeleted } from '../../actions';

const selectTodos = (state) => state.todos;

const TodoList = ({todos, onDeleted}) => {
  console.log(todos)
  // const todos = useSelector(state => state)
  // console.log(todos)
 

  return(
    <ul className='list-group'>
      {
        todos.map((todo) => {
          return(
            <TodoListItem key={todo.id}
              todo={todo}
              onDeleted={onDeleted}
            />
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log(state.todos)
  return {
    todos: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleted: (id) => dispatch(todoDeleted(id))
//   }
// }

const mapDispatchToProps = {
  onDeleted: todoDeleted
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);