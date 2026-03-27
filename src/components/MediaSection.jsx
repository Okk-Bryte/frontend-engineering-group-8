import { useRef, useState } from 'react'

export default function MediaSection() {
  const videoRef  = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="media-section">
      <div className="media-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing{' '}
          <strong>mass</strong>, <strong>diameter</strong>,{' '}
          <strong>gravity</strong>, and <strong>density</strong>, we gain
          insight into how planets form, behave, and interact within the
          solar system.
        </p>
      </div>

      <div className="media-visual" id="media-visual">
        <video ref={videoRef} loop playsInline preload="metadata">
          <source src="/earth-planet.mp4" type="video/mp4" />
        </video>
        <button
          className="play-btn"
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  )
}
