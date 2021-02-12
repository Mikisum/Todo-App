const todoDeleted = (todoId) => {
  return {
    type: 'TODO_DELETED',
    payload: todoId
  }
}

const toAdded = (text) => {
  return {
    type: 'TODO_ADDED',
    completed: false,
    payload: text
  }
}

const updateTodo = (id, text, completed) => {
  return {
    type: 'TODO_UPDATE',
    id: id,
    completed: completed,
    payload: text
  }
}

const todoCompleted= (id, completed) => {
  return {
    type: 'TODO_COMPLETED',
    completed: completed,
    payload: id
  }
}

export {
  todoDeleted,
  toAdded,
  updateTodo,
  todoCompleted
}