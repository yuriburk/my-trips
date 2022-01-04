import Analytics from 'components/Analytics'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}

export default MyDocument
