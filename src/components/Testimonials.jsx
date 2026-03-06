const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section-padding bg-light">
            <div className="container">
                <div className="section-title center">
                    <span className="subtitle">Partners</span>
                    <h2>What People Say</h2>
                </div>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                        <p>"Sawkar Farms consistently delivers the highest quality sugarcane. Their commitment to reliable delivery makes them our preferred supplier."</p>
                        <div className="client-info">
                            <h4>Rajesh Patil</h4>
                            <span>Local Sugar Mill</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                        <p>"The hygiene standards in their broiler facilities are outstanding. It's clear they prioritize animal health and farm cleanliness."</p>
                        <div className="client-info">
                            <h4>Dr. Amit Sharma</h4>
                            <span>Veterinary Consultant</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
