import { useLanguage } from '../context/LanguageContext.jsx'
import './Team.css'

const PLAYERS = [
  { name: 'Aziz Yusupov', positionKey: 'Goalkeeper', number: 1, photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Bekzod Rashidov', positionKey: 'Defender', number: 4, photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Davron Islomov', positionKey: 'Defender', number: 5, photo: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Farrukh Nazarov', positionKey: 'Midfielder', number: 8, photo: 'https://randomuser.me/api/portraits/men/56.jpg' },
  { name: 'Jasur Karimov', positionKey: 'Midfielder', number: 10, photo: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { name: 'Otabek Tursunov', positionKey: 'Forward', number: 9, photo: 'https://randomuser.me/api/portraits/men/78.jpg' },
  { name: 'Sardor Alimov', positionKey: 'Forward', number: 11, photo: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { name: 'Ulugbek Fayzullaev', positionKey: 'Defender', number: 3, photo: 'https://randomuser.me/api/portraits/men/89.jpg' },
]

const COACH_PHOTO = 'https://randomuser.me/api/portraits/men/52.jpg'

export default function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" className="section team">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.team.eyebrow}</p>
            <h2 className="section-title">{t.team.title}</h2>
          </div>
          <p className="section-sub team__intro">{t.team.intro}</p>
        </div>

        <div className="coach-card">
          <div className="coach-card__photo">
            <img src={COACH_PHOTO} alt={`Portrait of ${t.team.coachName}`} loading="lazy" />
          </div>
          <div className="coach-card__body">
            <span className="tag coach-card__eyebrow">{t.team.coachEyebrow}</span>
            <h3 className="coach-card__name">{t.team.coachName}</h3>
            <span className="coach-card__role">{t.team.coachTitle}</span>
          </div>
        </div>

        <div className="team__grid">
          {PLAYERS.map((p) => (
            <article className="player-card" key={p.number}>
              <div className="player-card__photo">
                <img src={p.photo} alt={`Portrait of ${p.name}`} loading="lazy" />
                <span className="player-card__number">{p.number}</span>
              </div>
              <div className="player-card__body">
                <h3 className="player-card__name">{p.name}</h3>
                <span className="player-card__position">{t.team.positions[p.positionKey]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
