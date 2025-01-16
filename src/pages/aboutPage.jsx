import React from 'react'
import Header from '@/components/home/header'
import Intro from '@/components/About/Intro'
import AboutSection from '@/components/About/AboutSection'
import Award from '@/components/About/Award'
import Team from '@/components/About/Team'
import WhyChooseUs from '@/components/home/whyUs'
import Testimonial from '@/components/About/Testimonial'
import StatsSection from '@/components/home/stats'

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