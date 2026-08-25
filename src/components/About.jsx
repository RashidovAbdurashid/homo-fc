import { useLanguage } from '../context/LanguageContext.jsx'
import './About.css'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="section about">
      <div className="container-wide about__grid">
        <div className="about__media">
          <img
            src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1000&q=80"
            alt="HUMO FC players training on the pitch"
            loading="lazy"
          />
          <div className="about__media-tag">
            <span className="about__media-tag-num">{a.mediaNum}</span>
            <span>{a.mediaTag}</span>
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 className="section-title">{a.title}</h2>
          <p className="about__lead">{a.lead}</p>
          <p className="about__body">{a.body1}</p>
          <p className="about__body">{a.body2}</p>

          <ul className="about__facts">
            {a.facts.map((f) => (
              <li key={f.label}>
                <span className="about__fact-label">{f.label}</span>
                <span className="about__fact-value">{f.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
