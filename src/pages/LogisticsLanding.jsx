import React from 'react';
import Hero from '../components/home/Hero';
import LogisticsServices from '../components/home/LogisticsServices';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyUs';
import StatsSection from '../components/home/stats';
const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogisticsServices />
      <About />
      <WhyChooseUs />
      <StatsSection />
    </div>
  );
};

export default Home;
