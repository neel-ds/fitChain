import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/NavBar'
import Footer from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-68px)] pt-16 px-2 sm:px-4">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )

}
