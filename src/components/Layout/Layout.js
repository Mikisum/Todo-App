import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import classes from './layout.module.css'

export default function Layout({ children }) {
	return (
		<div className={classes.container}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}	