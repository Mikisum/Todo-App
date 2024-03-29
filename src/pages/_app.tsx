
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/Layout/Layout'
import { store } from '../store/index'
import '../styles/styles.css'
config.autoAddCss = false



export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}