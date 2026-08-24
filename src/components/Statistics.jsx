import { useLanguage } from '../context/LanguageContext.jsx'
import './Statistics.css'

export default function Statistics() {
  const { t } = useLanguage()

  return (
    <section className="stats">
      <div className="container-wide stats__grid">
        {t.stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat__value">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
