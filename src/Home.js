import React from 'react'
import HeroImage from './components/HeroImage'
import HowItWorks from './components/HowItWorks'
import PlaceYouDeserve from './components/PlaceYouDeserve'
import About from './components/AboutSection'
import FeaturesCards from './components/FeaturesCards'
import FeaturesSection from './components/Features'
import CallToAction from "./components/CallToAction"
import ContactUs from './components/ContactUs'
import TeamSection from './components/TeamSection'

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
    <TeamSection/>
    <ContactUs/>
    </div>
  )
}

export default Home