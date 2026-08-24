import logo from '../assets/humo-logo.png'
import { useLanguage } from '../context/LanguageContext.jsx'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero">
      <div className="hero__bg" role="img" aria-label="HUMO FC players on the pitch under stadium lights" />
      <div className="hero__overlay" />
      <div className="hero__wing" aria-hidden="true" />

      <div className="container-wide hero__content">
        <img src={logo} alt="HUMO Football Club crest" className="hero__crest" />

        <p className="hero__eyebrow">{t.hero.eyebrow}</p>

        <h1 className="hero__title">
          {t.hero.title1}
          <span className="hero__title-city">{t.hero.title2}</span>
        </h1>

        <p className="hero__subtitle">{t.hero.subtitle}</p>

        <div className="hero__actions">
          <a href="#team" className="btn btn-primary">{t.hero.viewTeam}</a>
          <a href="#matches" className="btn btn-secondary">{t.hero.upcoming}</a>
        </div>
      </div>

      <div className="kit-divider" />
    </section>
  )
}
