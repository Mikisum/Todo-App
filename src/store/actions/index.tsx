import axios from 'axios'
import { Dispatch } from 'redux'
import { Todo, TodosAction, TodosActionTypes } from '../../types/todos'

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit }
      })
      const totalCount = parseInt(response.headers['x-total-count'])
      dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
      dispatch({ type: TodosActionTypes.SET_TOTAL_TODOS_COUNT, payload: totalCount })


    } catch (e) {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: 'An error occurred while uploading users'
      })
    }
  }
}

export const addTodo = (newTitle: string) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      const newTodo = {
        userId: 1,
        title: newTitle,
        completed: false
      }
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })

      // i don't put the response into the payload, that resource will not be really updated 
      // on the server but it will be faked as if.
      dispatch({ type: TodosActionTypes.TODO_ADD, payload: newTitle })

    } catch (e) {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: 'An error occurred while uploading users'
      })
    }
  }
}

export const todoOnChange = (todo: Todo) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PUTCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ todo })
      })
      // i don't put the response into the payload, that resource will not be really updated 
      // on the server but it will be faked as if.
      dispatch({ type: TodosActionTypes.TODO_ONCHANGE, payload: todo })

    } catch (e) {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: 'An error occurred while uploading users'
      })
    }
  }
}

export const setTodoPage = (page: number): TodosAction => {
  return { type: TodosActionTypes.SET_TODO_PAGE, payload: page }
}

export const todoDelete = (todo: Todo) => {
  return {
    type: TodosActionTypes.TODO_DELETE,
    payload: todo.id
  }
}

