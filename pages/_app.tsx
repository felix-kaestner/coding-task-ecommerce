import 'assets/main.css'
import {CartProvider} from 'context/Cart'
import type {AppProps} from 'next/app'
import type {FunctionComponent} from 'react'

const App: FunctionComponent<AppProps> = ({Component, pageProps}) => (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
)

export default App
