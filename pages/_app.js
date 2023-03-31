import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Footer from '/src/components/Footer';
import Navbar from '/src/components/Navbar';
import '/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/prDbCz4/m-p-logo-black.png" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
