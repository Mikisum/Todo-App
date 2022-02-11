import axios from 'axios'
import { Dispatch } from 'redux'
import { TodosAction, TodosActionTypes } from '../../../types/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}

// const todoDeleted = (todoId) => {
//   return {
//     type: 'TODO_DELETED',
//     payload: todoId
//   }
// }

// const toAdded = (text) => {
//   return {
//     type: 'TODO_ADDED',
//     completed: false,
//     payload: text
//   }
// }

// const updateTodo = (id, text, completed) => {
//   return {
//     type: 'TODO_UPDATE',
//     id: id,
//     completed: completed,
//     payload: text
//   }
// }

// const todoCompleted = (id, completed) => {
//   return {
//     type: 'TODO_COMPLETED',
//     completed: completed,
//     payload: id
//   }
// }

// export {
//   todoDeleted,
//   toAdded,
//   updateTodo,
//   todoCompleted
// }

