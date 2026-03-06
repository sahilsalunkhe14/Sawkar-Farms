import { useEffect, useRef } from 'react';
import heroBackground from '../assets/hero_background_1772621967153.png';

const Hero = () => {
    return (
        <section
            id="home"
            className="hero"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBackground})` }}
        >
            <div className="hero-content">
                <h1 className="fade-up">Rooted in Tradition, <br /><span className="highlight">Growing with Technology</span></h1>
                <p className="fade-up delay-1">Premium Sugarcane, Turmeric, Soybean & Poultry Farming</p>
                <div className="hero-buttons fade-up delay-2">
                    <a href="#specialties" className="btn btn-primary">Our Specialties</a>
                    <a href="#contact" className="btn btn-secondary">Inquire Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
