import React from 'react'
import Header from '../components/home/Header'
import Intro from '../components/about/Intro'
import AboutSection from '../components/about/AboutSection'
import Award from '../components/about/Award'
import Team from '../components/about/Team'
import WhyChooseUs from '../components/home/whyUs'
import Testimonial from '../components/about/Testimonial'
import StatsSection from '../components/home/stats'

const AboutPage = () =>  {
  return (
    <div className="min-h-screen">
    <Header />
    <Intro title={"About Company"} />
    <AboutSection />
    <Award />
    <StatsSection />
    <Team />
    <WhyChooseUs />
    <Testimonial />
  </div>
  )
}

export default AboutPage