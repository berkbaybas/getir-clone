import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
import Campaign from 'components/Campaign'
import Favorites from 'components/Favorites'
import MobileApp from 'components/MobileApp'
import Cards from 'components/Cards'
import Footer from 'components/Footer'

function App() {
  return (
    <div className="flex flex-col">
      <Header className="order-first"></Header>
      <HeroSection className="hidden md:block"></HeroSection>
      <Categories className="order-2"></Categories>
      <Campaign className="order-1 md:order-3"></Campaign>
      <Favorites className="order-3 md:order-4"></Favorites>
      <MobileApp className="order-4 md:order-5"></MobileApp>
      <Cards className="order-5 md:order-6"></Cards>
      <Footer className="order-last"></Footer>
    </div>
  )
}

export default App
