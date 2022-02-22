
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faPen, fas } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import classes from './../styles/homePage.module.css'

library.add(fas, faGithub, faLinkedin, faCircleCheck, faPen)


export default function HomePage() {
  return (
    <div className={classes.homePage}>
      <Head>
        <title>Todo app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={classes.title}>Put everything in order together with <br />TodoList</h1>
        <a className={classes.start} href="/todo">Start</a>
      </main>

    </div>
  )
}
