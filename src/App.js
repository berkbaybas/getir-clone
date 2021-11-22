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
      <HeroSection className="hidden"></HeroSection>
      <Categories className="order-2"></Categories>
      <Campaign className="order-1"></Campaign>
      <Favorites className="order-3"></Favorites>
      <MobileApp className="order-4"></MobileApp>
      <Cards className="order-5"></Cards>
      <Footer className="order-last"></Footer>
    </div>
  )
}

export default App
