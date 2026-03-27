import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="lightbox-overlay open"
      role="dialog"
      aria-modal="true"
      aria-label="Planet image"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button
        className="lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        &times;
      </button>
      <img className="lightbox-img" src={src} alt={alt} />
    </div>
  )
}
