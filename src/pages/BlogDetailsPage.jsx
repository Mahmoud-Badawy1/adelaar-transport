import Intro from '@/components/about/Intro'
import BlogSection from '@/components/Blog/BlogSection'
import Header from '@/components/home/header'
import React from 'react'
import Footer from '@/components/footer'
function BlogDetails() {
  return (
    <>
        <Header />
        <Intro title={"Blog Details"} />
        <BlogSection />
        <Footer />
    </>
  )
}

export default BlogDetails