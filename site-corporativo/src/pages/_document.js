import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Céltica</title>
        <meta name="description" content="A Céltica é uma empresa que fornece soluções de tecnologia, transformando projetos em casos de sucesso." />
        <meta name="robots" content="index, follow" />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap" rel="stylesheet" />

      </Head>
      <body>


        <Main />
        <NextScript />


      </body>
    </Html>
  )
}
