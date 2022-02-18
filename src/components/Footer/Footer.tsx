import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './footer.module.css'

export const Footer = () => {
	return (
		<div className={classes.footer}>
			<h5>Contacts</h5>
			<div className={classes.contacts}>
				<a href='https://github.com/Mikisum' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
				<a href='https://www.linkedin.com/in/viktoryia-kiyanka/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
			</div>
		</div>
	)
}