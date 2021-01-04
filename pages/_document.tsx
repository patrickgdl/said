/* eslint-disable react/no-danger */
import NextDocument, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from 'next/document';
import React from 'react';

import { css } from '../stitches.config';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    let extractedStyles: string[] = [];
    ctx.renderPage = () => {
      const { styles, result } = css.getStyles(originalRenderPage);
      extractedStyles = styles;
      return result;
    };

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}

          {extractedStyles.map((content, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <style key={index} dangerouslySetInnerHTML={{ __html: content }} />
          ))}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
