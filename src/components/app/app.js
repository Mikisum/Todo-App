import React from "react";
import Note from "../note";
import TodoList from "../todo-list";

const notes = [
  {
    id: 1,
    title: 'react'
  },
  {
    id: 2,
    title: 'redux'
  },
  {
    id: 3,
    title: 'typeScript'
  }
]  

const App = () => {
  return(
    <div className='container'>
      <h1 className='logo'>Todo List</h1>
      <Note />
      <TodoList notes={notes}/>
    </div>
  )
}

export default App;