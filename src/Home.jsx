import React from 'react'
import Header from './component/Header/Header';
import BlogList from './component/BlogList'
function Home(props) {
  return (
    <div>
    <Header onToggleDarkMode={props.onToggleDarkMode}/>
    <BlogList blogs={props.blogs} />
    </div>
  )
}

export default Home