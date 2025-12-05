import "./Hero.scss";

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <span className="hero__span">POWERFULL</span>

                <h1 className="hero__title">
                    <span>Group</span>
                    <span>Practice</span>
                    <span>With trainer</span>
                </h1>

                <p className="hero__description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, id! Quis nobis deserunt officiis ipsum illo enim
                    distinctio ducimus, veritatis voluptate iste, esse unde quam mollitia magni, consequatur rem non?Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Fuga, nesciunt consectetur. Incidunt dicta ipsam totam quos in
                    quisquam beatae?
                </p>

                <div className="hero__buttons-wrapper">
                    <a href="#" className="btn btn-secondary">Sign Up</a>
                    <a href="#" className="btn btn-outline">Details</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
