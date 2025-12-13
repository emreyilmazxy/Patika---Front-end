import './product-card.css'

type ProductCardProps = {
    imgSrc: string;
    productName: string;
    price: number;
    handleBuy: () => void;
}

const ProductCard = ({ imgSrc, productName, price, handleBuy }: ProductCardProps) => {
    return (
        <div className='product-card'>

            <div className="product-img-wrapper">
                <img src={imgSrc} alt={productName} />
            </div>

            <h2 className='product-title'>{productName}</h2>
            <p className='product-price'>${price.toLocaleString('en-US')}</p>
            <div className='btn-input-group'>
                <button className='sell-btn'>sell</button>
                <input className='product-amount' type="number" />
                <button className='buy-btn' onClick={handleBuy}>buy</button>
            </div>

        </div>
    )
}

export default ProductCard