import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import Darkmode from './Darkmode'
function Header(props) {
  return (
    <div className='text-center flex justify-center items-center pt-5 px-20 relative'>
        <span><FaQuoteLeft  className="text-2xl text-blue-800" /></span>
        <h1 className="text-5xl font-extrabold">Blog</h1>
        <span><FaQuoteRight  className="text-2xl text-blue-800" /></span>
        <Darkmode onToggleDarkMode={props.onToggleDarkMode}  />    
    </div>
  )
}

export default Header