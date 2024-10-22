import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import { Montserrat} from 'next/font/google'
import { Inter } from 'next/font/google';
import Head from 'next/head'; // Import Head component

const montserrat = Montserrat({
  subsets:["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
<>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Correct self-closing tag */}
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      
  <NavBar /> 
  <Component {...pageProps} />

    </main>
    </>
  );
}
