import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'css-doodle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
export default MyApp