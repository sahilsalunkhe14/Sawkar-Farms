import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuActive(!isMobileMenuActive);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuActive(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="nav-container">
                    <a href="#" className="logo" onClick={closeMobileMenu}>
                        <i className="fa-solid fa-leaf green-icon"></i> Sawkar Farms
                    </a>
                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#specialties">Our Farming</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contact" className="btn btn-primary-outline">Contact Us</a>
                    </div>
                    <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        <i className={`fa-solid ${isMobileMenuActive ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div className={`mobile-nav ${isMobileMenuActive ? 'active' : ''}`}>
                <a href="#home" className="mobile-link" onClick={closeMobileMenu}>Home</a>
                <a href="#about" className="mobile-link" onClick={closeMobileMenu}>About Us</a>
                <a href="#specialties" className="mobile-link" onClick={closeMobileMenu}>Our Farming</a>
                <a href="#gallery" className="mobile-link" onClick={closeMobileMenu}>Gallery</a>
                <a href="#contact" className="mobile-link btn btn-primary" onClick={closeMobileMenu}>Contact Us</a>
            </div>
        </>
    );
};

export default Navbar;
