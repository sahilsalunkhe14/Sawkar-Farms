import sugarcaneImage from '../assets/sugarcane_farm_1772622347158.png';
import turmericImage from '../assets/turmeric_farm_1772622073190.png';
import soybeanImage from '../assets/soybean_farm_1772622486771.png';
import poultryImage from '../assets/poultry_farm_1772622522691.png';

const Specialties = () => {
    return (
        <section id="specialties" className="specialties section-padding bg-light">
            <div className="container">
                <div className="section-title center">
                    <span className="subtitle">What We Do</span>
                    <h2>Our Agricultural Focus</h2>
                    <p>Specialized farming ensuring top-tier yield and quality.</p>
                </div>

                <div className="cards-grid">
                    {/* Card 1: Sugarcane */}
                    <div className="crop-card">
                        <div className="card-img-container">
                            <img src={sugarcaneImage} alt="Sugarcane Farming" />
                        </div>
                        <div className="card-content">
                            <h3><i className="fa-brands fa-envira icon-sugarcane"></i> Sugarcane</h3>
                            <p>High-yield, premium quality sugarcane cultivated using scientifically advanced agronomy practices, ideal for sugar production and jaggery.</p>
                        </div>
                    </div>

                    {/* Card 2: Turmeric */}
                    <div className="crop-card">
                        <div className="card-img-container">
                            <img src={turmericImage} alt="Turmeric Farming" />
                        </div>
                        <div className="card-content">
                            <h3><i className="fa-solid fa-mortar-pestle icon-turmeric"></i> Turmeric</h3>
                            <p>Rich in curcumin, our organically nurtured turmeric delivers vibrant color and potent health benefits straight from our soil.</p>
                        </div>
                    </div>

                    {/* Card 3: Soybean */}
                    <div className="crop-card">
                        <div className="card-img-container">
                            <img src={soybeanImage} alt="Soybean Farming" />
                        </div>
                        <div className="card-content">
                            <h3><i className="fa-solid fa-seedling icon-soybean"></i> Soybean</h3>
                            <p>Protein-rich soybeans grown with precision agriculture, ensuring perfect pod development and high nutritional value.</p>
                        </div>
                    </div>

                    {/* Card 4: Poultry */}
                    <div className="crop-card">
                        <div className="card-img-container">
                            <img src={poultryImage} alt="Broiler Poultry" />
                        </div>
                        <div className="card-content">
                            <h3><i className="fa-solid fa-kiwi-bird icon-poultry"></i> Broiler Poultry</h3>
                            <p>State-of-the-art climate-controlled sheds providing a hygienic, stress-free environment for healthy, high-quality broiler chickens.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specialties;
