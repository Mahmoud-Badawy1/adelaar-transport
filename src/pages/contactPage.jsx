import CardContact from '@/components/Contact/CardContact';
import FormContact from '@/components/Contact/formContact';
import Header from '@/components/home/header';
import React from 'react';
import Footer from '@/components/footer';
const Contact = () => {
  return (
    <>
    <Header />
    <CardContact />
    <FormContact />
    <Footer />
    </>
  );
};

export default Contact;