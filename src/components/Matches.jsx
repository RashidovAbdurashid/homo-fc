import logo from '../assets/humo-logo.png'
import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import './Matches.css'

export default function Matches() {
  const { t } = useLanguage()
  const m = t.matches

  return (
    <section id="matches" className="section matches">
      <div className="container-wide">
        <p className="eyebrow">{m.eyebrow}</p>
        <h2 className="section-title">{m.title}</h2>
        <p className="section-sub">{m.intro}</p>

        <div className="matches__grid">
          {m.items.map((item, i) => (
            <Reveal key={item.opponent} delay={i * 80}>
              <article className="match-card">
                <div className="match-card__top">
                  <span className="tag match-card__competition">{item.competition}</span>
                  <span className={`match-card__venue-flag ${item.home ? 'is-home' : 'is-away'}`}>
                    {item.home ? m.home : m.away}
                  </span>
                </div>

                <div className="match-card__teams">
                  <div className="match-card__team">
                    <img src={logo} alt="HUMO FC crest" className="match-card__crest" />
                    <span>HUMO FC</span>
                  </div>

                  <span className="match-card__vs">VS</span>

                  <div className="match-card__team">
                    <span className="match-card__crest match-card__crest--opponent">{item.initials}</span>
                    <span>{item.opponent}</span>
                  </div>
                </div>

                <div className="match-card__meta">
                  <div>
                    <span className="match-card__meta-label">{m.dateTime}</span>
                    <span className="match-card__meta-value">{item.date} — {item.time}</span>
                  </div>
                  <div>
                    <span className="match-card__meta-label">{m.stadium}</span>
                    <span className="match-card__meta-value">{item.venue}</span>
                  </div>
                </div>

                <a href="#contact" className="btn btn-outline-dark btn-block">{m.details}</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
