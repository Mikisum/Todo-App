import React, { FC } from "react";
import TodoList from "../TodoList/TodoList";
import './app.css';

export const App: FC = () => {
  return (
    <div className='container'>
      <h1 className='logo'>Todo List</h1>
      {/* <Note /> */}
      <TodoList />
    </div>
  )
}
