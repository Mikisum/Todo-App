import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { HomePage } from "../HomePage/HomePage";
import TodoList from "../TodoList/TodoList";
import classes from './app.module.css';

export const App: FC = () => {
  return (

    <div className={classes.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='todo' element={<TodoList />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  )
}
