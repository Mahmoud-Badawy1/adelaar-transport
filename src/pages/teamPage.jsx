import Intro from '@/components/About/Intro'
import Header from '@/components/home/header'
import CV from '@/components/Team/CV'
import React from 'react'

function TeamPage() {
  return (
    <>
    <Header />
    <Intro title={"Team Details"} />
    <CV />
    
    </>
  )
}

export default TeamPage