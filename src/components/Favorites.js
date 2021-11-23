import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import Title from 'components/ui/Title.js'
import Product from 'components/ui/Product'

import productData from 'api/product.json'

function Favorites({ className }) {
  const onlyWidth = useWindowWidth()
  return (
    <div className={`${className} container mx-auto`}>
      {onlyWidth > 768 && <Title>Favoriler</Title>}
      <div className="container mx-auto bg-white pt-3">
        {onlyWidth <= 768 && <Title>Favoriler</Title>}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 overflow-hidden  rounded">
          {productData &&
            productData.map((product) => <Product product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default Favorites
