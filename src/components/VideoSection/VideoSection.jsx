import './VideoSection.css';

function VideoSection() {
  return (
    <section className="video-section" aria-label="Video section">
      <div className="video-wrapper" aria-label="Space visualization video">
        <div className="video-placeholder">
          <div className="video-grid" aria-hidden="true"></div>
          <div
            className="video-circle"
            style={{ width: 260, height: 260, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            aria-hidden="true"
          ></div>
          <div
            className="video-circle"
            style={{ width: 180, height: 180, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            aria-hidden="true"
          ></div>
          <div className="play-btn" aria-label="Play video">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5L19 12L8 19V5Z" fill="#1e40af" />
            </svg>
          </div>
          {/*
            Replace the placeholder above with a real video tag like:
            <video autoPlay muted loop playsInline src="your-video.mp4" />
          */}
        </div>
      </div>

      <div className="video-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing <strong>mass</strong>,{' '}
          <strong>diameter</strong>, <strong>gravity</strong>, and <strong>density</strong>, we gain
          insight into how planets form, behave, and interact within the solar system.
        </p>
      </div>
    </section>
  );
}

export default VideoSection;
