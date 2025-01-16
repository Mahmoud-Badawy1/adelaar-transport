import Intro from '@/components/About/Intro'
import BlogSection from '@/components/Blog/BlogSection'
import Header from '@/components/home/header'
import React from 'react'

function BlogDetailsPage() {
  return (
    <>
        <Header />
        <Intro title={"Blog Details"} />
        <BlogSection />
    </>
  )
}

export default BlogDetailsPage