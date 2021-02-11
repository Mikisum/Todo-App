// const initialState = {
//   todos: [
//     {
//       id: 1,
//       title: 'react'
//     },
//     {
//       id: 2,
//       title: 'redux'
//     },
//     {
//       id: 3,
//       title: 'typeScript'
//     }
//   ]  
// }

const initialState = []

function nextTodoId(todos) {
  console.log(todos)
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  console.log(maxId)
  return maxId + 1;
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADDED':
      return [
        ...state,
          {
            id: nextTodoId(state),
            text:action.payload
          }
      ]
    
    case 'TODO_DELETED': 
      return state.filter((todo) => todo.id !== action.payload)
    
    default:
      return state
  }
}

export default reducer;