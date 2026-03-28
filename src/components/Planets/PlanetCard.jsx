import { useEffect } from 'react'

export default function PlanetCard({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="lightbox-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button className="lightbox-close" onClick={onClose}>
        &times;
      </button>
      <img className="lightbox-img" src={src} alt={alt} />
    </div>
  )
}
