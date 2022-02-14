import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from './../assets/logo.png';
import classes from './header.module.css';

export const Header: FC = () => {
  return (
    <div className={classes.header}>

      <img src={logo}></img>

      <nav className={classes.navbar}>
        <Link to="/">Home</Link>
        <Link to="todo">Todo</Link>
      </nav>

    </div>
  )
}
