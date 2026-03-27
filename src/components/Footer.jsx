const TEAM = [
  { name: 'Amaka',    link: 'https://github.com/Anurella',                          icon: 'fa-github',   label: 'GitHub'   },
  { name: 'Ifeoma',   link: 'https://www.linkedin.com/in/ifeomaokocha',              icon: 'fa-linkedin', label: 'LinkedIn' },
  { name: '[ ]',      link: null,                                                    icon: null,          label: null       },
  { name: '[ ]',      link: null,                                                    icon: null,          label: null       },
  { name: '[ ]',      link: null,                                                    icon: null,          label: null       },
]

const PlanetLogo = () => (
  <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="14" r="7" fill="#3b82f6" />
    <ellipse cx="14" cy="14" rx="13" ry="4.5"
      stroke="#93c5fd" strokeWidth="1.5" fill="none"
      transform="rotate(-25 14 14)" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Logo */}
        <div className="footer-logo">
          <PlanetLogo />
          <span className="footer-logo-text">Planet</span>
        </div>

        {/* About */}
        <p className="footer-heading">About</p>
        <p className="footer-about">
          A capstone project by{' '}
          <a
            href="https://github.com/Okk-Bryte/frontend-engineering-group-8"
            target="_blank"
            rel="noreferrer"
            className="footer-group-link"
          >
            Frontend Engineering Group&nbsp;8
          </a>{' '}
          at{' '}
          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-group-link"
          >
            TS Academy
          </a>
          . This page bridges scientific rigour and accessibility — making
          complex planetary data feel trustworthy, modern, and intellectually
          engaging.
        </p>

        {/* Team */}
        <p className="footer-heading">Meet the Team</p>
        <ul className="footer-team">
          {TEAM.map((member, i) => (
            <li key={i} className="footer-team-member">
              {member.link ? (
                <a href={member.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${member.icon}`} aria-hidden="true" />
                  {member.name}
                </a>
              ) : (
                <span className="footer-team-placeholder">{member.name}</span>
              )}
            </li>
          ))}
        </ul>

        <hr className="footer-rule" />

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2025 Frontend Engineering Group 8 &mdash; TS Academy. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Privacy &amp; Policy</a>
            <span aria-hidden="true">|</span>
            <a href="#">Terms &amp; Condition</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
