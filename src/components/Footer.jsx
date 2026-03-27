import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4 className="footer-heading">About</h4>
          <p className="footer-team-names">Kosisochukwu, Seanam, Ifeoluwa, Kelvin</p>
        </div>
        <div className="footer-copy">
          <p>©2026 Design by <a href="https://github.com/Anurella" target="_blank" rel="noreferrer">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">Ifeoma</a> A.</p>
          <p>Built by <a href="https://github.com/Okk-Bryte/frontend-engineering-group-8" target="_blank" rel="noreferrer">Frontend Engineering Group 8</a>. All rights reserved</p>
        </div>
        <div className="footer-right">
          <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer" className="footer-ts-link">
            TSAcademy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;