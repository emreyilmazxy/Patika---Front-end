import { useState, useEffect, useRef } from "react";
import "./navbar.scss";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement | null>(null);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);

    // Scroll event handler
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 576) {
                setIsScrolled(false);
                return;
            }
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Click outside to close menu
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (!isMenuOpen) return;

            if (!menuRef.current?.contains(target) && !hamburgerRef.current?.contains(target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
            <div className="container">
                <div className="navbar__img-wrapper">
                    <a href="#hero" className="logo">
                        <img src="/images/logo.png" alt="logo" />
                    </a>
                </div>

                <ul
                    ref={menuRef}
                    className={`navbar__links ${isMenuOpen ? "navbar__links--active" : ""}`}
                >
                    <span className="material-symbols-outlined close-icon" onClick={closeMenu}>
                        close
                    </span>
                    <li className="navbar__links-item"><a href="#hero">Home</a></li>
                    <li className="navbar__links-item"><a href="#classes">Classes</a></li>
                    <li className="navbar__links-item"><a href="#trainers">Trainers</a></li>
                    <li className="navbar__links-item"><a href="#products">Products</a></li>
                    <li className="navbar__links-item"><a href="#contact">Contact</a></li>
                    <li className="navbar__links-item"><a href="#reviews">Reviews</a></li>
                    <li><a href="#" className="btn btn-primary">Join Us</a></li>
                </ul>

                <button
                    ref={hamburgerRef}
                    className="navbar__hamburger"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;