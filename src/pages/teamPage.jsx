import Intro from '@/components/About/Intro'
import Header from '@/components/home/header'
import CV from '@/components/Team/CV'
import React from 'react'
import Footer from '@/components/footer'
function TeamPage() {
  return (
    <>
    <Header />
    <Intro title={"Team Details"} />
    <CV />
    <Footer />
    </>
  )
}

export default TeamPage