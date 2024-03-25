import './App.css'
import Hero from './components/Hero/Hero.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import WhoWeAre from './components/WhoWeAre/WhoWeAre.tsx'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs.tsx'
import Interrested from './components/Interrested/Interrested.tsx'
import Contact from './components/Contact/Contact.tsx'
import Footer from './components/Footer/Footer.tsx'
import InputRefContextProvider from './contexts/InputRefProvider/InputRefProvider.tsx'

function App() {
  return (
    <InputRefContextProvider>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <Interrested />
      <Contact />
      <Footer />
    </InputRefContextProvider>
  )
}

export default App
