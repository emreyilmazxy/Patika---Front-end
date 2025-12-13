import './App.css'
import { ProductCard } from './components/product-cards'
import { products } from './data/products'
import billGates from './assets/images/billgates.jpg'
import { useState } from 'react';

type PurchasedItems = {
  [productId: number]: number
}

function App() {
  const [beginningMoney, setBeginningMoney] = useState<number>(100000000000);
  const [purchasedItems, setPurchasedItems] = useState<PurchasedItems>({});

  // total spent calculation
  const totalSpent = Object.entries(purchasedItems).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === Number(productId));
    return total + (product ? product.price * quantity : 0);
  }, 0);

  const handleBuy = (productId: number, price: number) => {
    if (beginningMoney >= price) {
      setBeginningMoney(prevMoney => prevMoney - price);
      setPurchasedItems(prevItems => ({
        ...prevItems,
        [productId]: (prevItems[productId] || 0) + 1
      }));
    } else {
      alert("Yetersiz bakiye!");
    }
  };

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
        <p>${beginningMoney.toLocaleString("en-US")}</p>
      </aside>

      {/* header billgates and title END */}

      {/* products section */}

      <main id='products'>
        <section className='product-grid'>
          {products.map(product => (
            <ProductCard
              key={product.id}
              imgSrc={product.image}
              productName={product.name}
              price={product.price}
              handleBuy={() => handleBuy(product.id, product.price)}

            />
          ))}
        </section>

        {/* receipt section start */}
        {Object.keys(purchasedItems).length > 0 && (
          <aside className='receipt'>

            <h2 className='receipt__title'>Your Receipt</h2>

            <ul className="receipt__list">
              {Object.entries(purchasedItems).map(([productId, quantity]) => {
                const product = products.find(p => p.id === Number(productId));
                if (!product || quantity === 0) return null;
                return (
                  <li key={productId} className="receipt__list-items">
                    {product.name}
                    <span className="receipt__item-qty">x{quantity}</span>
                    <span className="receipt__item-price">${(product.price * quantity).toLocaleString("en-US")}</span>
                  </li>
                );
              })}
            </ul>

            <div className='receipt__total'>
              <h3 className='receipt__total-name'>Total:</h3>
              <p className='receipt__total-price'>${totalSpent.toLocaleString("en-US")}</p>
            </div>

          </aside>
        )}
        {/* receipt section end */}


      </main>


    </div>
  )
}

export default App
