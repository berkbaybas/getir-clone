import React from 'react'

import Title from 'components/ui/Title.js'
import Product from 'components/ui/Product'

import productData from 'api/product.json'

function Favorites({ className }) {
  return (
    <div className={`${className}`}>
      <div className="container mx-auto bg-white pt-3">
        <Title>Favoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-col-12 overflow-hidden  rounded">
          {productData &&
            productData.map((product) => <Product product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default Favorites
