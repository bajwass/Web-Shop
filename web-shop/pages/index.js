import React from 'react'

import { client } from '../lib/client'

import {Product, FooterBanner, HeroBanner} from '../components'

const Home = () => {
  return (
    <>
    <HeroBanner />

    <div className='products-heading'>
      <h2>Best Selling Keyboards</h2>
      <p>The Best Gaming Keyboards Avaliable</p>
    </div>
    <div className='products-container'>
      {['Product 1', 'Product 2'].map((product) => product)}
    </div>

    <FooterBanner />
    </>
  )
}

export default Home;