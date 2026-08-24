import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import './News.css'

const IMAGES = [
  'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=800&q=80',
]

export default function News() {
  const { t } = useLanguage()
  const n = t.news

  return (
    <section id="news" className="section news">
      <div className="container-wide">
        <p className="eyebrow">{n.eyebrow}</p>
        <h2 className="section-title">{n.title}</h2>
        <p className="section-sub">{n.intro}</p>

        <div className="news__grid">
          {n.items.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="news-card">
                <div className="news-card__image">
                  <img src={IMAGES[i]} alt="" loading="lazy" />
                  <span className="tag news-card__category">{a.category}</span>
                </div>
                <div className="news-card__body">
                  <span className="news-card__date">{a.date}</span>
                  <h3 className="news-card__title">{a.title}</h3>
                  <p className="news-card__excerpt">{a.excerpt}</p>
                  <a href="#" className="news-card__link">{n.readMore}</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
