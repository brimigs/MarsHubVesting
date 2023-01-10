import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='https://marsprotocol.io/favicon.svg' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#dd5b65' />
        <meta name='robots' content='index,follow' />
        <meta name='description' content='Mars Protocol' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@mars_protocol' />
        <meta name='twitter:creator' content='@mars_protocol' />
        <meta property='og:url' content='https://conference.marsprotocol.io' />
        <meta property='og:title' content='Mars Protocol' />
        <meta property='og:description' content='Mars Protocol' />
        <meta property='og:image' content='https://conference.marsprotocol.io/banner.png' />
        <meta property='og:site_name' content='Mars Protocol' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
