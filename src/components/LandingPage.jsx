import React from 'react'
import Home from './Home'
import Hero from './Hero'
import AboutBrief from './AboutBrief'
import ServicesOverview from './OurServicesBrief'
import WhyChooseUs from './WhyChooseUs'
import TestimonialCarousel from './Testimonial'
import ArtisticGallery from './Gallery'
import SubHero from './SubHero'
import ArtisticVideoPlayer from './ArtisticVideoPlayer'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <AboutBrief/>
        <ServicesOverview/>
      <Home/>
      <SubHero/>
      <WhyChooseUs/>
      <ArtisticVideoPlayer/>
      <ArtisticGallery/>
      <TestimonialCarousel/>
    </div>
  )
}

export default LandingPage
