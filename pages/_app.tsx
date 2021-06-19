import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import SiteLayout from '../components/SiteLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  )
}
export default MyApp
