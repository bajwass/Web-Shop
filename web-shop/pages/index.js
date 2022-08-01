import React from 'react'

const Home = () => {
  return (
    <>
    HeroBanner

    <div>
      <h2>Best Selling Products</h2>
      <p>All types of Gaming Keyboards</p>
    </div>
    <div>
      {['Product 1', 'Product 2'].map((product) => product)}
    </div>

    Footer
    </>
  )
}

export default Home;