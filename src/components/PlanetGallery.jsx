import { useState, useEffect } from 'react'
import planetsData from '../data/planets.json'
import Lightbox from './Lightbox'

const PLANET_IMAGES = {
  Mercury: 'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg',
  Venus:   'https://images.pexels.com/photos/12498801/pexels-photo-12498801.jpeg',
  Earth:   'https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg',
  Mars:    'https://images.pexels.com/photos/20376404/pexels-photo-20376404.jpeg',
  Jupiter: 'https://images.pexels.com/photos/20337599/pexels-photo-20337599.jpeg',
  Saturn:  'https://images.pexels.com/photos/32961168/pexels-photo-32961168.png',
  Uranus:  'https://images.pexels.com/photos/12498810/pexels-photo-12498810.jpeg',
  Neptune: 'https://images.pexels.com/photos/12498776/pexels-photo-12498776.jpeg',
  Pluto:   'https://images.pexels.com/photos/39514/hubble-space-telescope-galaxy-universe-39514.jpeg',
}

function formatDistance(km) {
  if (km >= 1000) return `${(km / 1000).toFixed(1)}B km from Sun`
  return `${km.toFixed(1)}M km from Sun`
}

export default function PlanetGallery() {
  const [lightbox, setLightbox] = useState(null) // { src, alt }

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
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
        {planetsData.map((p) => {
          const imgSrc = PLANET_IMAGES[p.planet] || p.image
          return (
            <div
              key={p.planet}
              className="planet-card"
              onClick={() => setLightbox({ src: imgSrc, alt: p.planet })}
            >
              <img
                className="planet-card-img"
                src={imgSrc}
                alt={p.planet}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg'
                }}
              />
              <div className="planet-card-info">
                <span className="planet-card-name">{p.planet}</span>
                <span className="planet-card-dist">
                  {formatDistance(p.distanceFromSun)}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
