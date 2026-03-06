import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    // Scroll Animations (Intersection Observer)
    const fadeUpElements = document.querySelectorAll('.fade-up, .crop-card, .about-text, .about-image');

    // Add initial classes for non-hero items
    document.querySelectorAll('.crop-card, .about-text, .about-image, .testimonial-card, .gallery-item, .contact-info').forEach(el => {
      if (!el.classList.contains('fade-up')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('fade-up')) {
            entry.target.classList.add('visible');
          } else {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeUpElements.forEach(el => {
      observer.observe(el);
    });

    document.querySelectorAll('.testimonial-card').forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.2}s`;
      observer.observe(el);
    });

    document.querySelectorAll('.gallery-item, .contact-info, .footer-content').forEach(el => observer.observe(el));

    // Trigger hero animations on load
    setTimeout(() => {
      document.querySelectorAll('.hero .fade-up').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919876543210" className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  )
}

export default App;
