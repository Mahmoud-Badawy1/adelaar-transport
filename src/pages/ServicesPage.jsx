import React from 'react';
import Header from '../components/home/Header';
import HeroService from '../components/Services/heroService';
import AllServices from '../components/Services/allServices';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroService />
      <AllServices />
    </div>
  );
};

export default Services;
