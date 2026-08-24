import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import logo from '../assets/humo-logo.png'
import { useLanguage } from '../context/LanguageContext.jsx'
import './Footer.css'

const PHONE = '+998 90 123 45 67'

export default function Footer() {
  const { t } = useLanguage()

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
    <footer className="footer">
      <div className="kit-divider" />
      <div className="container-wide footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="HUMO Football Club crest" />
          <div>
            <span className="footer__name">HUMO FC</span>
            <p className="footer__desc">{t.footer.desc}</p>
          </div>
        </div>

        <div className="footer__col">
          <h4>{t.footer.navTitle}</h4>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.contactTitle}</h4>
          <ul className="footer__contact">
            <li>{t.contact.addressValue}</li>
            <li>{PHONE}</li>
            <li>info@humofc.uz</li>
          </ul>
          <div className="footer__social">
            <a href="#" aria-label="HUMO FC on Instagram"><FiInstagram /></a>
            <a href="#" aria-label="HUMO FC on Facebook"><FiFacebook /></a>
            <a href="#" aria-label="HUMO FC on YouTube"><FiYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom container-wide">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
