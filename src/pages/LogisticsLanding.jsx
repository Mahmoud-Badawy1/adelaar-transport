import React from 'react';
import Hero from '../components/home/Hero';
import LogisticsServices from '../components/home/LogisticsServices';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyUs';
const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogisticsServices />
      <About />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
