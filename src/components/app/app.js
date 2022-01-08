import React from "react";
import Note from "../todo";
import TodoList from "../todo-list";
import './app.css'

const App = () => {
  return(
    <div className='container'>
      <h1 className='logo'>Todo List</h1>
      <Note />
      <TodoList/>
    </div>
  )
}

export default App;