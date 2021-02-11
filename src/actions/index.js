const todoDeleted = (todoId) => {
  return {
    type: 'TODO_DELETED',
    payload: todoId
  }
}

const toAdded = (text) => {
  return {
    type: 'TODO_ADDED',
    payload: text.trim()
  }
}

const updateTodo = (todo) => {
  return {
    type: 'UPDATE_TODO',
    payload: todo
  }
}

export {
  todoDeleted,
  toAdded
}