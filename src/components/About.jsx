import farmerProfile from '../assets/farmer_profile_1772621996226.png';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <div className="image-wrapper glow-effect">
                            <img src={farmerProfile} alt="Sawkar Farms Owner" />
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="section-title">
                            <span className="subtitle">About Us</span>
                            <h2>Cultivating Excellence, <br />Sustainably.</h2>
                        </div>
                        <p>At Sawkar Farms, we combine generations of agricultural wisdom with modern, sustainable farming practices. Our commitment is to deliver the highest quality produce while nurturing the land that sustains us.</p>
                        <div className="features">
                            <div className="feature-item">
                                <i className="fa-solid fa-seedling"></i>
                                <div>
                                    <h4>Organic Practices</h4>
                                    <p>Minimizing chemicals for healthier crops.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fa-solid fa-droplet"></i>
                                <div>
                                    <h4>Water Conservation</h4>
                                    <p>Efficient drip irrigation systems.</p>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" className="btn btn-text">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
