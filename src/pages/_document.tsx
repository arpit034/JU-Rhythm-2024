import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="icon" type="favicon" href="https://i.postimg.cc/J4pxPVkX/Jecrc-logo-gradient.png"/>
        </Head>
      <body className='absolute md:relative' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
