import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar />

      <Row className="justify-content-md-center">
      <Component {...pageProps} />
      </Row>

    </>
  )
}
