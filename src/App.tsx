import { useLenis } from './hooks/useLenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Mission } from './components/Mission'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Mission />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
