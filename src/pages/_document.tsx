import NextDocument, { Html, Head, NextScript, Main } from 'next/document';

export default class Document extends NextDocument {
    // eslint-disable-next-line no-undef
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
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
