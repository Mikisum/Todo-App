import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import logo from './../assets/logo.png';
import classes from './header.module.css';

export const Header: FC = () => {
  return (
    <div className={classes.header}>

      <Image src={logo}></Image>

      <nav className={classes.navbar}>
        <Link href="/"><a>Home</a></Link>
        <Link href="todo"><a>Todo</a></Link>
      </nav>

    </div>
  )
}
