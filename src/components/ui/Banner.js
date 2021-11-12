import React from 'react'

function Banner({ banner, key }) {
  return (
    <div>
      <picture className="block px-2">
        <img src={banner.image} className="rounded"/>
      </picture>
    </div>
  )
}

export default Banner
