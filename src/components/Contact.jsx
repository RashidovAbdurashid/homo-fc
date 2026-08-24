import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext.jsx'
import { CLUB_PHONE, CLUB_EMAIL } from '../i18n/contactInfo.js'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container-wide contact__grid">
        <div className="contact__info">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-sub">{c.intro}</p>

          <ul className="contact__list">
            <li>
              <FiMapPin aria-hidden="true" />
              <div>
                <span className="contact__list-label">{c.address}</span>
                <span>{c.addressValue}</span>
              </div>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <div>
                <span className="contact__list-label">{c.phone}</span>
                <span>{CLUB_PHONE}</span>
              </div>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <div>
                <span className="contact__list-label">{c.email}</span>
                <span>{CLUB_EMAIL}</span>
              </div>
            </li>
          </ul>

          <div className="contact__social">
            <span className="contact__list-label">{c.social}</span>
            <div className="contact__social-icons">
              <a href="#" aria-label="HUMO FC on Instagram"><FiInstagram /></a>
              <a href="#" aria-label="HUMO FC on Facebook"><FiFacebook /></a>
              <a href="#" aria-label="HUMO FC on YouTube"><FiYoutube /></a>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <h3>{c.form.sentTitle}</h3>
              <p>{c.form.sentBody}</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <label>
                {c.form.name}
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={c.form.namePh} />
              </label>
              <label>
                {c.form.email}
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={c.form.emailPh} />
              </label>
              <label>
                {c.form.message}
                <textarea name="message" rows="5" required value={form.message} onChange={handleChange} placeholder={c.form.messagePh} />
              </label>
              <button type="submit" className="btn btn-primary btn-block">{c.form.send}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
