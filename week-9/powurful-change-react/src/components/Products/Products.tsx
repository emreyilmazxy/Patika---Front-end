import "./Products.scss";

const productsData = [
    { name: "Kettlebell / 5kg", oldPrice: "$89.99", newPrice: "59,99", image: "/images/purchase1.jpg" },
    { name: "Treadmill", oldPrice: "$899.99", newPrice: "599,99", image: "/images/purchase2.jpg" },
    { name: "Adjustable Dumbell", oldPrice: "$89.99", newPrice: "59,99", image: "/images/purchase3.jpg" },
    { name: "Kettlebell / 3kg", oldPrice: "$89.99", newPrice: "59,99", image: "/images/purchase4.jpg" },
];

const Products = () => {
    return (
        <section id="products" className="products">
            <div className="container">
                <h2 className="products__title section-title">purchase from us</h2>
                <p className="products__subtitle text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat,
                    totam laboriosam ut culpa impedit quis, dolores ipsum maxime minus ea inventore
                    consectetur est amet eum quia ipsam porro fugiat?
                </p>

                <div className="products__cards-wrapper">
                    {productsData.map((product, index) => (
                        <div className="products__card" key={index}>
                            <div className="products__img-wrapper">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="products__info">
                                <h3 className="products__name">{product.name}</h3>
                                <p className="products__price">
                                    <span className="old-price">{product.oldPrice}</span> /
                                    <span className="new-price">{product.newPrice}</span>
                                </p>
                                <button className="products__btn">
                                    <span className="material-symbols-outlined">shopping_cart</span>
                                    <span className="btn-text">Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
