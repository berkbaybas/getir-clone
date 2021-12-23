import React, { useState } from 'react'

import ReactFlagsSelect from 'react-flags-select'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaFacebook } from 'react-icons/fa'

const HeroSection = ({ className }) => {
  const [selected, setSelected] = useState('TR')

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    arrows: false
  }
  return (
    <div className={`${className}`}>
      <div className="h-auto sm:h-[500px] bg-brand-color relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            />
          </div>
        </Slider>
        <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div>
            <img
              src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
              alt="Logo"
              shape="NORMAL"
            />
            <h3 className="mt-8 text-4xl font-semibold text-white">
              Dakikalar içinde <br />
              kapınızda
            </h3>
          </div>
          <div className="w-[400px] bg-gray-50 p-6 rounded-lg">
            {/* TODO Show responsive mobile device */}
            <h4 className="text-primary-brand-color text-center font-semibold mb-4">
              Giriş yap veya kayıt ol
            </h4>
            <div className="grid gap-y-3">
              <div className="flex gap-x-2">
                <ReactFlagsSelect
                  countries={['US', 'GB', 'TR']}
                  customLabels={{
                    US: '+1',
                    GB: '+50',
                    TR: '+90'
                  }}
                  placeholder="Select Language"
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  className="flag-select"
                />
                <label className="flex-1 relative block">
                  <input
                    required
                    className="h-14 px-4 pt-2 border-2 border-gray-200 rounded-md w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer hover:cursor-text"
                  />
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-600 transition-all peer-focus:h-7  peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7  peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Telefon Numarası
                  </span>
                </label>
              </div>
              <button className="bg-brand-yellow text-brand-color hover:bg-brand-color hover:text-brand-yellow transition-colors h-12 w-full flex items-center justify-center text-sm font-semibold rounded-md">
                Telefon numarası ile devam et
              </button>
              <hr className="h-[1px]" />
              <button className="bg-blue-700 bg-opacity-10 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors h-12 px-2 w-full flex items-center text-sm font-semibold rounded-md">
                <FaFacebook size="24" />
                <span className="mx-auto ">Facebook ile giriş yap</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
