import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from './homePage.module.css';

export const HomePage: FC = () => {
  return (
    <div className={classes.homePage}>
      <h1 className={classes.title}>Put everything in order together with <br />TodoList</h1>
      <Link className={classes.start} to="/todo">Start</Link>
    </div>
  )
}
