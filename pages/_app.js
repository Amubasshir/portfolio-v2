import Footer from 'componemt/src/components/Footer';
import Navbar from 'componemt/src/components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.45,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            backgroundColor: '#F49A4D',
          },
          animateState: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            backgroundColor: '#F49A4D',
          },
          exitState: {
            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          },
        }}
        style={{
          backgroundColor: '#F49A4D',
        }}
        className="base-page-size"
      >
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="icon"
              href="https://i.ibb.co/prDbCz4/m-p-logo-black.png"
            />
          </Head>
          <main
            className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
          >
            <Navbar />
            <Component {...pageProps} />

            <Footer />
          </main>
        </>
      </motion.div>
    </AnimatePresence>
  );
}
export default App;
