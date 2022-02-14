import React, { FC } from "react";
import classes from './homePage.module.css';

export const HomePage: FC = () => {
  return (
    <div className={classes.homePage}>
      <h1 className={classes.title}>Put everything in order together with <br />TodoList</h1>
    </div>
  )
}
