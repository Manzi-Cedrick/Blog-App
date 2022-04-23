import React from 'react'
import Blog from './Blog'
import './bloglist.css'
function BlogList(props) {
  return (
    <div className="BlogList">
        {props.blogs.map((blog)=>{
            return (
            <Blog key={blog.id} cover={blog.cover} category={blog.category} title={blog.title} description={blog.description} authorImage={blog.authorImage} author={blog.author} date={blog.date}/>
        )})}
    </div>
  )
}

export default BlogList