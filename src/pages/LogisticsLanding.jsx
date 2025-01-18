import React from 'react';
import Header from '../components/home/header';
import Hero from '../components/home/hero';
import LogisticsServices from '../components/home/LogisticsServices';
import About from '../components/home/about';
import WhyChooseUs from '../components/home/whyUs';
import StatsSection from '../components/home/stats';
import Team from '../components/about/Team';
import Testimonial from '../components/about/Testimonial'
import SkillsSection from '../components/home/ourSkills/skillsSection'
import CaseStudiesSection from '../components/home/caseStudies/CaseStudiesSection'
import FaqSection from '../components/home/FAQ/FaqSection'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LogisticsServices />
      <About />
      <WhyChooseUs />
      <Team />
      <SkillsSection />
      <CaseStudiesSection />
      <Testimonial />
      <StatsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
