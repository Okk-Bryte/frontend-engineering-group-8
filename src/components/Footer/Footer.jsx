import './Footer.css';

function Footer() {
  return (
    <>
      <section className="about-section" aria-label="About section">
        <strong>About</strong>
        <p>First names of group members go here — e.g. Amaka, Ifeoma, and team.</p>
        <p className="footer-copy">
          &copy;2026 Designed by{' '}
          <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer">
            Amaka
          </a>{' '}
          &amp;{' '}
          <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">
            Ifeoma A.
          </a>{' '}
          All rights reserved.
        </p>
        <p className="footer-links">
          <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">
            TSAcademy
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://github.com/YourGroupRepo" target="_blank" rel="noopener noreferrer">
            Groupname
          </a>
        </p>
      </section>

      <footer aria-label="Footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo-name">planet</span>
            <p>Explore our solar system through data-driven insights and planetary science.</p>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <a href="#planets">Explore Data</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Team</h4>
            <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer">
              Amaka
            </a>
            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">
              Ifeoma
            </a>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">
              TSAcademy
            </a>
            <a href="https://github.com/YourGroupRepo" target="_blank" rel="noopener noreferrer">
              Group Repo
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Planet Creative World. All rights reserved.</p>
          <p>Built by Groupname</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
