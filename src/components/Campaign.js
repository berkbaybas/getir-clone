import React, { useEffect, useState } from 'react'

import Banner from 'components/ui/Banner'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Title from 'components/ui/Title.js'

import bannersData from 'api/banners.json'

const Campaign = ({ className }) => {
  const [banners, setBanners] = useState([])
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        }
      }
    ]
  }

  useEffect(() => {
    setBanners(bannersData)
  }, [])

  return (
    <div className={`container mx-auto lg:py-4 ${className}`}>
      <Title className="hidden lg:block">Kampanyalar</Title>
      <Slider {...settings} className="-mx-2 -px-2">
        {banners &&
          banners.map((banner, index) => (
            <Banner key={index} banner={banner}></Banner> //TODO Padding problem
          ))}
      </Slider>
    </div>
  )
}

export default Campaign
