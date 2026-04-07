import { useState, useEffect } from 'react'
import './Planets.css'
import PlanetCard from './PlanetCard.jsx'

const PLANET_IMAGES = {
  Mercury: 'https://images.pexels.com/photos/12498795/pexels-photo-12498795.jpeg',
  Venus:   'https://images.pexels.com/photos/12498801/pexels-photo-12498801.jpeg',
  Earth:   'https://images.pexels.com/photos/12498815/pexels-photo-12498815.jpeg',
  Mars:    'https://images.pexels.com/photos/20376403/pexels-photo-20376403.jpeg',
  Jupiter: 'https://images.pexels.com/photos/20337602/pexels-photo-20337602.jpeg',
  Saturn:  'https://images.pexels.com/photos/12498805/pexels-photo-12498805.jpeg',
  Uranus:  'https://images.pexels.com/photos/20337595/pexels-photo-20337595.jpeg',
  Neptune: 'https://images.pexels.com/photos/12498810/pexels-photo-12498810.jpeg',
  Pluto:   'https://images.pexels.com/photos/12498776/pexels-photo-12498776.jpeg'
}

function formatDistance(km) {
  if (km >= 1000) return `${(km / 1000).toFixed(1)}B km from Sun`
  return `${km.toFixed(1)}M km from Sun`
}

function Planets() {
  const [planets, setPlanets] = useState([])
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    fetch('https://anurella.github.io/json/planets.json')
      .then(res => res.json())
      .then(data => setPlanets(data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (lightbox) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section className="planet-gallery s-gap" id="planet-gallery">
      <div className="planet-header">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet has unique physical characteristics. Visual comparisons
          help highlight how vastly different terrestrial planets are from gas
          giants and ice giants.
        </p>
      </div>

      <div className="various-planets">
        {planets.map((p) => {
          const imgSrc = PLANET_IMAGES[p.planet]

          return (
            <button
              key={p.planet}
              className="planet-card"
              onClick={() => setLightbox({ src: imgSrc, alt: p.planet })}
            >
              <img
                className="planet-card-img"
                src={imgSrc}
                alt={p.planet}
              />
              <div className="planet-card-info">
                <span className="planet-card-name">{p.planet}</span>
                <span className="planet-card-dist">
                  {formatDistance(p.distanceFromSun)}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {lightbox && (
        <PlanetCard
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}

export default Planets
