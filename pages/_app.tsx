import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MovieProvider } from '../components/MovieContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default MyApp
