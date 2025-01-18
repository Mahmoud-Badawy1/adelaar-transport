import Intro from '../components/about/Intro'
import Header from '../components/home/header'
import CardPagination from '../components/Blog/OurSection'
import React from 'react'
import Footer from '../components/footer'
function OurBlogPage() {
  return (
    <>
    <Header />
    <Intro title={"Team Details"} />
    <CardPagination />
    <Footer />
    </>
  )
}

export default OurBlogPage