import CardContact from '@/components/Contact/CardContact';
import FormContact from '@/components/Contact/formContact';
import Header from '@/components/home/header';
import React from 'react';
import Footer from '@/components/footer';
import Intro from '@/components/about/Intro'
const Contact = () => {
  return (
    <>
    <Header />
    <Intro title={"Contact"} />
    <CardContact />
    <FormContact />
    <Footer />
    </>
  );
};

export default Contact;