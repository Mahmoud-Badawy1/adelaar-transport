import Intro from '@/components/About/Intro'
import Header from '@/components/home/header'
import CardPagination from '@/components/Blog/OurSection'
import React from 'react'

function OurBlogPage() {
  return (
    <>
    <Header />
    <Intro title={"Team Details"} />
    <CardPagination />

    </>
  )
}

export default OurBlogPage