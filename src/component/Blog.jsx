import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import './blog.css'
function Blog(props) {
  return (
    <div className="Blog bg-white rounded-xl text-white w-96 mt-5">
    <div className="blog_data pt-2">
        <div className="blog_image">
            <img src={props.cover}  alt="the cover image" />
        </div>
        <div className="blog_category bg-blue-700 text-center font-semibold text-white h-10 w-24 pt-2 rounded-xl  ml-5 mt-2 text-sm">
            <span>{props.category}</span>
        </div>
        <div>
        <p className="blog_title text-black text-left pl-5 text-xl font-bold font-sans">{props.title}</p>
        <p className="blog_description text-slate-900 text-sm px-5 pt-2">{props.description}</p>
        </div>
        <div className="flex text-black pt-2 px-10 justify-between">
            <img src={props.authorImage} className="h-12 w-12 rounded-full" alt="author image" />
                <div>
                    <ul className=" list-none  ">
                        <li>{props.author}</li>
                        <li>{props.date}</li>
                    </ul>
                </div>
            <div className="pt-3 cursor-pointer"><FaArrowRight/></div>
        </div>
        </div>
    </div>
  )
}

export default Blog