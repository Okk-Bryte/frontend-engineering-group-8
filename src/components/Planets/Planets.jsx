import { useState, useEffect } from 'react'
import './Planets.css'
import PlanetCard from './PlanetCard.jsx'

const PLANET_IMAGES = {
  Mercury: '/images/mercury.jpg',
  Venus: '/images/venus.webp',
  Earth: '/images/earth.jpg',
  Mars: '/images/mars.webp',
  Jupiter: '/images/jupiter.webp',
  Saturn: '/images/saturn.webp',
  Uranus: '/images/uranus.webp',
  Neptune: '/images/neptune.webp',
  Pluto: '/images/pluto.webp',
}

function formatDistance(km) {
  if (km >= 1000) return `${(km / 1000).toFixed(1)}B km from Sun`
  return `${km.toFixed(1)}M km from Sun`
}

export default function PlanetGallery() {
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
