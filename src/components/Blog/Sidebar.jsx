import React from 'react'
import SearchBox from './SearchBox'
import AboutAuthor from './AboutAuthor'
import RecentPost from './RecentPost'
import Categories from './Categories'
import TagCloud from './TagCloud'

function Sidebar() {
  return (
    <>
    <SearchBox />
    <AboutAuthor />
    <RecentPost />
    <Categories />
    <TagCloud />
    </>
  )
}

export default Sidebar