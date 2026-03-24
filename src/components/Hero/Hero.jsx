import "./Hero.css";
import image from "../../media/planet1.png";

function Hero({ onExploreClick, onContactClick }) {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-content">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts. From
          size and mass to gravity and density, this page breaks down the solar
          system in a clear, data-driven way.
        </p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={onExploreClick}
            aria-label="Explore the Data"
          >
            Explore the Data
          </button>
          <button
            className="btn-outline"
            onClick={onContactClick}
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="hero-image" aria-hidden="true">
        <img className="hero-planet" src={image} alt="Earth from space" />
      </div>
    </section>
  );
}

export default Hero;
