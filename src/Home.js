import React from 'react'
import HeroImage from './components/HeroImage'
import HowItWorks from './components/HowItWorks'
import PlaceYouDeserve from './components/PlaceYouDeserve'
import About from './components/AboutSection'
import FeaturesCards from './components/FeaturesCards'
import FeaturesSection from './components/Features'
import CallToAction from "./components/CallToAction"
import ContactUs from './components/ContactUs'

function Home() {
  return (
    <div>
    <HeroImage/>
    <About/>
    <HowItWorks/>
    <PlaceYouDeserve/>
    <FeaturesCards/>
    <FeaturesSection/>
    <CallToAction/>
    <ContactUs/>
    


      
    </div>
  )
}

export default Home