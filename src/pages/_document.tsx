import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
} from 'next/document'
import React, { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { ComponentsEnhancer } from 'next/dist/shared/lib/utils'

type ContextType = DocumentContext
type InitalPropsType = DocumentInitialProps

export default class MyDocument extends Document {
    static async getInitialProps(ctx: ContextType): Promise<InitalPropsType> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => {
                const config: ComponentsEnhancer = {
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                }

                return originalRenderPage(config)
            }

            const initialProps = await Document.getInitialProps(ctx)

            const styles = (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ) as ReactElement | any

            return { ...initialProps, styles }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="preload"
                        as="font"
                        crossOrigin=""
                        type="font/woff"
                        href="/fonts/Montserrat-ExtraBold.woff"
                    />
                    <link rel="shortcut icon" href="/ico.png" />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
                            height="0" width="0" style="display:none;visibility:hidden" />`
                        }}
                    />
                </body>
            </Html>
        )
    }
}
