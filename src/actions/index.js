const todosLoaded = (newTodos) => {
  return {
    type: 'TODOS_LOADED',
    payload: newTodos
  }
}

export {
  todosLoaded
}