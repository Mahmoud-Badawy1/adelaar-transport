import React from 'react'
import HeaderBlog from './HeaderBlog'
import DescripitionBlog from './DescripitionBlog'
import Share from './Share'
import Comments from './Comments'
import CommentForm from './CommentForm'

function BlogDetails() {
  return (
    <>
    <HeaderBlog />
    <DescripitionBlog />
    <Share />
    <Comments />
    <CommentForm />
    </>
  )
}

export default BlogDetails