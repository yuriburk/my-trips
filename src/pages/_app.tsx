import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import NextNProgress from 'nextjs-progressbar'

import GlobalStyle from 'styles/global'
import { theme } from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#05092B" />
        <meta name="description" content="A project with Next JS" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextNProgress color="#f231a5" startPosition={0.2} stopDelayMs={200} height={5} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
