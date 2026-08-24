import { useLanguage } from '../context/LanguageContext.jsx'
import './Gallery.css'

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80', key: 'training', tall: true },
  { src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=700&q=80', key: 'stadium' },
  { src: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=700&q=80', key: 'team' },
  { src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=80', key: 'matchday', tall: true },
  { src: 'https://images.unsplash.com/photo-1550881111-7cfde14b8073?auto=format&fit=crop&w=700&q=80', key: 'pitch' },
  { src: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=700&q=80', key: 'fans' },
  { src: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=700&q=80', key: 'celebration', tall: true },
  { src: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=700&q=80', key: 'players' },
]

export default function Gallery() {
  const { t } = useLanguage()
  const g = t.gallery

  return (
    <section id="gallery" className="section gallery">
      <div className="container-wide">
        <p className="eyebrow">{g.eyebrow}</p>
        <h2 className="section-title">{g.title}</h2>
        <p className="section-sub">{g.intro}</p>

        <div className="gallery__grid">
          {PHOTOS.map((p) => (
            <figure className={`gallery__item ${p.tall ? 'gallery__item--tall' : ''}`} key={p.key}>
              <img src={p.src} alt={g.labels[p.key]} loading="lazy" />
              <figcaption>{g.labels[p.key]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
