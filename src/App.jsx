import React from 'react'
import Navbar from './Compoents/Navbar/Navbar'
import Hero from './Compoents/HeroSection/Hero'
import Services from './Compoents/OurServices/Services'
import OurPrices from './Compoents/OuerPrices/OurPrices'
import TextMain from './Compoents/MainText/TextMain'
import ContactBarbe from './Compoents/ContactBarber/ContactBarbe'
import Consultation from './Compoents/Consultation/Consultation'
import MensHaircut from './Compoents/Men\'s Haircut/MensHaircut'
import Fullservice from './Compoents/Fullservice/Fullservice'
import ContactUs from './Compoents/Contact_us/ContactUs'
import Footer from './Compoents/Footer/Footer'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <OurPrices/>
      <TextMain/>
      <ContactBarbe/>
      <Consultation/>
      <MensHaircut/>
      <Fullservice/>
      <ContactUs/>
      <Footer/>

    </div>
  )
}
