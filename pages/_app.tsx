import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Head>
      <title>NextJS Starterpack</title>
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp;
