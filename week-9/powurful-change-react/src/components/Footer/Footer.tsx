import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <img src="/images/logo.png" className="footer__logo" alt="Logo" />
                    <p className="footer__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum...
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis sit? Id, est assumenda amet, doloremque
                        excepturi nam necessitatibus expedita quibusdam temporibus.
                    </p>
                </div>

                <div className="footer__bottom">
                    <div className="footer__links-group">
                        <h3 className="footer__group-title">Information</h3>
                        <ul className="footer__list">
                            <li><a className="footer__link" href="#hero">About Us</a></li>
                            <li><a className="footer__link" href="#classes">Classes</a></li>
                            <li><a className="footer__link" href="#reviews">Blog</a></li>
                            <li><a className="footer__link" href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h3 className="footer__group-title">Helpful Links</h3>
                        <ul className="footer__list">
                            <li><a className="footer__link" href="#">Services</a></li>
                            <li><a className="footer__link" href="#">Supports</a></li>
                            <li><a className="footer__link" href="#">Terms & Condition</a></li>
                            <li><a className="footer__link" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
