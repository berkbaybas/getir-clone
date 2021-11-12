import React from 'react'

import MobileAppTitle from 'components/ui/MobileAppTitle'
import MobileAppDescription from 'components/ui/MobileAppDescription'

function MobileApp() {
  return (
    <div className="container mx-auto  py-6">
      <div className="bg-mobile-pattern h-80 rounded-lg bg-brand-color flex justify-between">
        <div className="flex flex-col justify-center ml-12 gap-y-2">
          <MobileAppTitle>Getir'i indirin!</MobileAppTitle>
          <MobileAppDescription>
            İstediğiniz ürünleri dakikalar içinde kapınıza <br />getirelim.
          </MobileAppDescription>
          <div className="flex gap-x-2 mt-4">
            <figure>
             <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="App Store"/>
            </figure>
            <figure>
             <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="Google Play Store"/>
            </figure>
            <figure>
             <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="Huawei App Gallery"/>
            </figure>
          </div>
          {/* <MobileAppButtons>Buttons</MobileAppButtons> */}
        </div>

        <img className="pt-6" height="605px" src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
      </div>
    </div>
  )
}

export default MobileApp
