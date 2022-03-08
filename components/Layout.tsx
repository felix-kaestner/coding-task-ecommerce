import Cart, {CartRef} from './Cart'
import Footer from './Footer'
import Navigation from './Navigation'
import Head from 'next/head'
import {FunctionComponent, useRef} from 'react'

interface LayoutProps {
  title: string
}

const Layout: FunctionComponent<LayoutProps> = ({children, title}) => {
  const cartRef = useRef<CartRef>(null)

  return (
    <div className="min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>

      <Navigation onToggleCart={() => cartRef.current?.open()} />

      <Cart ref={cartRef} />

      <main className="mx-auto mt-8 w-full max-w-7xl">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
