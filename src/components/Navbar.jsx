import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import logo from '../assets/humo-logo.png'
import { useTheme } from '../context/ThemeContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t, langs } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  const LINKS = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.matches, href: '#matches' },
    { label: t.nav.news, href: '#news' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__bar container-wide">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          <img src={logo} alt="HUMO Football Club crest" className="navbar__logo" />
          <span className="navbar__name">HUMO&nbsp;FC</span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="navbar__langs" role="group" aria-label="Choose language">
            {langs.map((l) => (
              <button
                key={l}
                className={`navbar__lang-btn ${lang === l ? 'is-active' : ''}`}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FiMoon size={19} /> : <FiSun size={19} />}
          </button>

          <a href="#contact" className="btn btn-primary navbar__cta">{t.nav.join}</a>

          <button
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      <nav className={`navbar__mobile ${open ? 'is-open' : ''}`} aria-label="Mobile">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
        ))}

        <div className="navbar__mobile-row">
          <div className="navbar__langs" role="group" aria-label="Choose language">
            {langs.map((l) => (
              <button
                key={l}
                className={`navbar__lang-btn ${lang === l ? 'is-active' : ''}`}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FiMoon size={19} /> : <FiSun size={19} />}
          </button>
        </div>

        <a href="#contact" className="btn btn-primary btn-block" onClick={handleLinkClick}>{t.nav.join}</a>
      </nav>
    </header>
  )
}
