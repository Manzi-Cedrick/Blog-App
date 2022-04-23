import  {React, useState}  from 'react'
import './App.css'


import pic from './images/blog.jpg'
import cover from './images/relax.jpg';

import Home from './Home'
function App() {
  
  const dummy_blogs = [{ 
    id: '1',
    category: 'Development',
    title: '7 CSS tools you should be using ',
    description: ' helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today "s reader, it "s seen as gibberish.',
    author: 'Manzi Cedrick',
    authorImage: pic,
    cover: cover,
    date: 'June 05,2022',
  },{
    id: '2',
    category: 'Travel',
    title: '7 CSS tools you should be using ',
    description: 'where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today "s reader, it "s seen as gibberish',
    author: 'Manzi Cedrick',
    authorImage: pic,
    cover: cover,
    date: 'June 05,2022',
  },{
    id: '3',
    category: 'Shooping',
    title: '7 CSS tools you should be using ',
    description: ' where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today "s reader, it "s seen as gibberish.',
    author: 'Manzi Cedrick',
    authorImage: pic,
    cover: cover,
    date: 'June 05,2022',
  },{
    id: '4',
    category: 'Learning',
    title: '7 CSS tools you should be using ',
    cover: cover,
    description: 'where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today "s reader, it "s seen as gibberish.',
    author: 'Manzi Cedrick',
    authorImage: pic,
    date: 'June 05,2022',
  },{
    id: '5',
    category: 'Construaction',
    title: '7 CSS tools you should be using ',
    cover: cover,
    description: 'where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today "s reader, it "s seen as gibberish.',
    author: 'Manzi Cedrick',
    authorImage: pic,
    date: 'June 05,2022',
  },{
    id: '6',
    category: 'Education',
    title: '7 CSS tools you should be using ',
    cover: cover,
    description: 'where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today "s reader, it "s seen as gibberish.',
    author: 'Manzi Cedrick',
    authorImage: pic,
    date: 'June 05,2022',
  }]
  const [blogs,setblogs]= useState(dummy_blogs)
  const [dark,setdark]=useState(false);
  const onToggleDarkMode = (mode) => {
    setdark(mode)
  }

  return (
    <div className={`${dark && '  bg-slate-900 text-white'}`}>
    <div className={`App`}>
      <Home blogs={blogs} onToggleDarkMode={onToggleDarkMode}/>
    </div>
    </div>
  )
}

export default App
