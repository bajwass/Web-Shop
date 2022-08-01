import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Sumeet's Keyboard Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}

      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Layout