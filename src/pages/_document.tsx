import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('../assets/images/bg.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
