const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="section-title center">
                    <span className="subtitle">Get In Touch</span>
                    <h2>Contact Sawkar Farms</h2>
                </div>

                <div className="contact-info center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'max-content', margin: '0 auto' }}>
                        <div className="info-item" style={{ marginBottom: '20px' }}>
                            <div className="icon-box"><i className="fa-solid fa-location-dot"></i></div>
                            <div style={{ textAlign: 'left' }}>
                                <h4>Location</h4>
                                <p>Sawkar Farm Estate, Maharashtra, India</p>
                            </div>
                        </div>
                        <div className="info-item" style={{ marginBottom: '20px' }}>
                            <div className="icon-box"><i className="fa-solid fa-phone"></i></div>
                            <div style={{ textAlign: 'left' }}>
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="info-item" style={{ marginBottom: '20px' }}>
                            <div className="icon-box"><i className="fa-solid fa-envelope"></i></div>
                            <div style={{ textAlign: 'left' }}>
                                <h4>Email Us</h4>
                                <p>contact@sawkarfarms.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
