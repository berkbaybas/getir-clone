import React from 'react'

import Title from 'components/ui/Title.js'
import Product from 'components/ui/Product'

import productData from 'api/product.json'

function Favorites() {
  return (
    <div className="container mx-auto ">
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-1 overflow-hidden bg-white rounded">
        {productData &&
          productData.map((product) => <Product product={product} />)}
      </div>
    </div>
  )
}

export default Favorites
