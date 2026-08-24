import { FiHeart, FiTarget, FiUsers, FiAward } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext.jsx'
import './Values.css'

const ICONS = [FiHeart, FiTarget, FiUsers, FiAward]

export default function Values() {
  const { t } = useLanguage()

  return (
    <section className="section values">
      <div className="container-wide">
        <p className="eyebrow values__eyebrow">{t.values.eyebrow}</p>
        <h2 className="section-title values__title">{t.values.title}</h2>

        <div className="values__grid">
          {t.values.items.map((v, i) => {
            const Icon = ICONS[i]
            return (
              <div className="value-card" key={v.title}>
                <Icon className="value-card__icon" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
