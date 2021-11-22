import React from 'react'

import MobileAppTitle from 'components/ui/MobileAppTitle'
import MobileAppDescription from 'components/ui/MobileAppDescription'

function MobileApp({ className }) {
  return (
    <div className={`${className}`}>
      <div className="container mx-auto lg:py-6  overflow-hidden">
        <div className="md:bg-mobile-pattern h-80 relative md:rounded-lg bg-primary-brand-color flex justify-between">
          <div className="flex flex-col justify-center ml-3 md:ml-12 gap-y-2">
            <MobileAppTitle>Getir'i indirin!</MobileAppTitle>
            <MobileAppDescription>
              İstediğiniz ürünleri dakikalar içinde kapınıza <br />
              getirelim.
            </MobileAppDescription>
            <div className="flex flex-col md:flex-row gap-x-2">
              <figure className="mt-2">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="App Store"
                />
              </figure>
              <figure className="mt-2">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="Google Play Store"
                />
              </figure>
              <figure className=" mt-2">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="Huawei App Gallery"
                />
              </figure>
            </div>
            {/* <MobileAppButtons>Buttons</MobileAppButtons> */}
          </div>

          <figure className="absolute bottom-0 right-0 md:right-initial md:ml-[554px] xl:ml-[650px] xl:right-0 !w-[605px]">
            <img
              className="hidden md:block pt-6"
              src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default MobileApp
