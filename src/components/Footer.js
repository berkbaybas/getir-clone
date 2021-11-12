import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiGlobe } from 'react-icons/fi'

function Footer() {
  return (
    <div className="bg-white pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <h6 className="text-lg text-primary-brand-color mb-4">
              Getir'i indirin!
            </h6>
            <div className="grid gap-y-4">
              <figure>
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="App Store"
                />
              </figure>
              <figure>
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="Google Play Store"
                />
              </figure>
              <figure>
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="Huawei App Gallery"
                />
              </figure>
            </div>
          </section>
          <section>
            <h6 className="text-lg text-primary-brand-color mb-4">
              Getir'i keşfedin
            </h6>
            <nav>
              <ul className="grid gap-y-3 text-sm">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Kariyer</a>
                </li>
                <li>
                  <a href="#">Teknoloji Kariyerleri</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">COVID-19 Duyuru Sosyal</a>
                </li>
                <li>
                  <a href="#">Sorumluluk Projeleri</a>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <h6 className="text-lg text-primary-brand-color mb-4">
              Yardıma mı ihtiyacınız var?
            </h6>
            <nav>
              <ul className="grid gap-y-3 text-sm">
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">Kişisel Verilerin Korunması</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Kullanım Koşulları</a>
                </li>
                <li>
                  <a href="#">Çerez Politikası</a>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <h6 className="text-lg text-primary-brand-color mb-4">
              İş Ortağımız Olun
            </h6>
            <nav>
              <ul className="grid gap-y-3 text-sm">
                <li>
                  <a href="#">Bayimiz Olun</a>
                </li>
                <li>
                  <a href="#">Deponuzu Kiralayın</a>
                </li>
                <li>
                  <a href="#">GetirYemek Restoranı Olun</a>
                </li>
                <li>
                  <a href="#">GetirÇarşı İşletmesi Olun</a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="h-[1px] w-full border border-gray-100 my-8"></div>
        <div className="flex justify-between">
          <div>
            &copy; 2021 Getir -
            <a href="#" className="text-primary-brand-color ml-1">
              Bilgi Topmlumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-2 items-center">
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
