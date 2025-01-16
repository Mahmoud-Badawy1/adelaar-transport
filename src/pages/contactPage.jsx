import CardContact from '@/components/Contact/CardContact';
import FormContact from '@/components/Contact/formContact';
import Header from '@/components/home/header';
import React from 'react';

const ContactPage = () => {
  return (
    <>
    <Header />
    <CardContact />
    <FormContact />
    </>
  );
};

export default ContactPage;