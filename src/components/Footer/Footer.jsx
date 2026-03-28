import './Footer.css';

const Footer = () => {
  return (
    <footer className="my-footer">
      <h4 className="my-footer-heading">About</h4>
      <p className="my-footer-names">Kosisochukwu (Team Lead), Seanam, Ifeoluwa (Assistant Team Lead), Kelvin, Chukwunonso, Jeremiah, Timilehin </p>
      <hr className="my-footer-divider" />
      <div className="my-footer-bottom">
        <div className="my-footer-copy">
          <p>©2026 Design by <a href="https://github.com/Anurella" target="_blank" rel="noreferrer">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">Ifeoma</a> A.</p>
          <p>Built by <a href="https://frontend-engineering-group-8.netlify.app" target="_blank" rel="noreferrer">Frontend-Engineering-Group-8</a>. All rights reserved</p>
        </div>
        <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer" className="my-footer-ts-link">TS Academy</a>
      </div>
    </footer>
  );
};

export default Footer;
