export default function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#">
        <svg className="logo-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="7" fill="#3b82f6" />
          <ellipse cx="14" cy="14" rx="13" ry="4.5"
            stroke="#93c5fd" strokeWidth="1.5" fill="none"
            transform="rotate(-25 14 14)" />
        </svg>
        <span className="logo-text">Planet</span>
      </a>
    </header>
  )
}
