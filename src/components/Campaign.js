import React, { useEffect, useState } from 'react'

import Banner from 'components/ui/Banner'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Title from 'components/ui/Title.js'

import bannersData from 'api/banners.json'

const Campaign = () => {
  const [banners, setBanners] = useState([])
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    arrows: true
  }

  useEffect(() => {
    setBanners(bannersData)
  }, [])

  return (
    <div className="container mx-auto py-4">
      <Title>Kampanyalar</Title>
      <Slider {...settings} className="-mx-2">
        {banners &&
          banners.map((banner, index) => (
            <Banner key={index} banner={banner}></Banner>
          ))}
      </Slider>
    </div>
  )
}

export default Campaign
