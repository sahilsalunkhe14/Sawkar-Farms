import heroBackground from '../assets/hero_background_1772621967153.png';
import sugarcaneImage from '../assets/sugarcane_farm_1772622347158.png';
import turmericImage from '../assets/turmeric_farm_1772622073190.png';
import soybeanImage from '../assets/soybean_farm_1772622486771.png';
import poultryImage from '../assets/poultry_farm_1772622522691.png';

const Gallery = () => {
    return (
        <section
            id="gallery"
            className="gallery section-padding"
            style={{ backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.9), rgba(27, 94, 32, 0.9)), url(${heroBackground})` }}
        >
            <div className="container">
                <div className="section-title center white-text">
                    <span className="subtitle">Visuals</span>
                    <h2>Farm Gallery</h2>
                </div>
                <div className="gallery-grid">
                    <div className="gallery-item"><img src={sugarcaneImage} alt="Sugarcane Farm" /></div>
                    <div className="gallery-item"><img src={turmericImage} alt="Turmeric Crop" /></div>
                    <div className="gallery-item"><img src={soybeanImage} alt="Soybean Field" /></div>
                    <div className="gallery-item"><img src={poultryImage} alt="Poultry Shed" /></div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
