import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

function Product({ product }) {
  return (
    <div className="flex flex-col relative gap-y-1 justify-center items-center border border-gray-200 border-opacity-20 p-3">
      <button className="absolute top-3 right-3 w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center transition-colors text-brand-color shadow-md hover:bg-purple-100">
        <AiOutlinePlus />
      </button>
      <div>
        <img src={product.image} />
      </div>
      <div className="text-sm font-semibold text-brand-color">
        {product.price}
      </div>
      <div className="text-sm font-semibold text-gray-800">{product.title}</div>
      <div className="text-sm font-semibold text-gray-500">{product.alt}</div>
    </div>
  )
}

export default Product
