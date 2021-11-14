import React from 'react'

function Category({ key, category }) {
  return (
    <button className="bg-color-white hover:bg-purple-50 transition-colors py-2">
      <img
        src={category.image}
        className="w-12 h-12 rounded mx-auto border border-gray-100"
        alt={category.title}
      />
      <p className="text-sm font-semibold text-gray-700 my-3 hover:text-brand-color tracking-tight whitespace-nowrap">
        {category.title}
      </p>
    </button>
  )
}

export default Category
