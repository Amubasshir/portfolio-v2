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

const GTAG_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

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
            backgroundColor: '#F49A4D !important',
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          animateState: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            backgroundColor: '#F49A4D !important',
          },
          exitState: {
            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          },
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
            {/* google tag */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </Head>
          <main
            className={`${montserrat.variable} font-mont bg-light dark:bg-[#23272F] w-full min-h-screen`}
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
