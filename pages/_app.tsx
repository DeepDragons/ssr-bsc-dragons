import '../styles/globals.scss';

import type { AppProps } from 'next/app';

import NextNprogress from "nextjs-progressbar";
import { Navbar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="var(--primary-color)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
