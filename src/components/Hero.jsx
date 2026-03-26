export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts.
          From size and mass to gravity and density, this page breaks down
          the solar system in a clear, data-driven way.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('planet-data')}>
            Explore the Data
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact-section')}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero-image-wrap">
        <img
          id="hero-earth"
          src="https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg"
          alt="Planet Earth"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg'
          }}
        />
      </div>
    </section>
  )
}
