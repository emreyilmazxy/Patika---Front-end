import './App.css'
import { ProductCard } from './components/product-cards';
import billGates from './assets/images/billgates.jpg'
import bigMac from './assets/images/big-mac.jpg'
import fordImg from './assets/images/ford-f-150.jpg'
import mansion from './assets/images/mansion.jpg'
import monoLisa from './assets/images/mona-lisa.jpg'
import nbaTeam from './assets/images/nba-team.jpg'
import puppy from './assets/images/puppy.jpg'
import netflix from './assets/images/year-of-netflix.jpg'


function App() {

  return (
    <div className="container" >
      {/* header billgates and title */}
      <header className='flex-wrapper'>
        <div className="img-wrapper">
          <img src={billGates} alt="Bill Gates" />
        </div>

        <h1 className='header-title'>spend bill gates' money</h1>

      </header>

      <aside className='money-bar'>
        <p>$100,000,000,000</p>
      </aside>

      {/* header billgates and title END */}

      {/* products section */}

      <main className='product-grid'>

        <ProductCard imgSrc={bigMac} productName="Big Mac" price={5} />
        <ProductCard imgSrc={fordImg} productName="Ford F-150" price={30000} />
        <ProductCard imgSrc={monoLisa} productName="Mona Lisa Painting" price={850000000} />
        <ProductCard imgSrc={mansion} productName="Mansion in Beverly Hills" price={25000000} />
        <ProductCard imgSrc={nbaTeam} productName="NBA Team" price={2000000000} />
        <ProductCard imgSrc={puppy} productName="Cute Puppy" price={1500} />
        <ProductCard imgSrc={netflix} productName="Year of Netflix" price={180} />


      </main>


    </div>
  )
}

export default App
