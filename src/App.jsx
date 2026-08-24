import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Matches from './components/Matches.jsx'
import Statistics from './components/Statistics.jsx'
import News from './components/News.jsx'
import Gallery from './components/Gallery.jsx'
import Values from './components/Values.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Matches />
        <Statistics />
        <News />
        <Gallery />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
