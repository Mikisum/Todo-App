import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import classes from './footer.module.css'

export const Footer = () => {
	return (
		<div className={classes.footer}>
			<h4>Contacts</h4>
			<div className={classes.contacts}>
				<Link href='https://github.com/Mikisum'><a ><FontAwesomeIcon icon={faGithub} /></a></Link>
				<a href='https://www.linkedin.com/in/viktoryia-kiyanka/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
			</div>
		</div>
	)
}