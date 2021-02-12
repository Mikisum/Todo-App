
function nextTodoId(todos) {
  console.log(todos)
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
const reducer = (state = [], action) => {
  switch (action.type) {
    
    case 'TODO_ADDED':
      return [
        ...state,
          {
            id: nextTodoId(state),
            completed: false,
            text:action.payload
        }
      ]
    
    // case 'TODO_COMPLETED': 
    //   return [
    //     ...state,
    //     completed: action.completed
    //   ]

    case 'TODO_UPDATE': 
    const todoId = action.id;
    let newItem = {
        id: action.id,
        completed: action.completed,
        text: action.payload
      }
      
      return [
        ...state.slice(0, todoId),
        newItem,
        ...state.slice(todoId + 1)
      ]
      
    case 'TODO_DELETED': 
      return state.filter((todo) => todo.id !== action.payload)
    
    default:
      return state
  }
}

export default reducer;