import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full navbar ' >
   <div className="nav1">
    <div className="logo">
        <img src='moviesmodnew-Custom.png' ></img>
    </div>
    <div className="search">
        <input className=' rounded p-1 searchinput' placeholder='What are you looking for?' ></input>
        <button><img className='searchimg' src="./search.png" ></img></button>
    </div>
    <div className="lang">
        <button className='btn1'>Bollywood</button>
        <button className='btn2'>AnimeFlix</button>
    </div>
   </div>
   <div className="nav2">
  <div className='link' ><Link  > HOME </Link></div>
  <div className='link' ><Link  > MOVIES </Link></div>
  <div className='link' ><Link  > LANGUAGE </Link></div>
  <div className='link' ><Link  > GENRE </Link></div>
  <div className='link' ><Link  > YEAR </Link></div>
  <div className='link' ><Link  > OTT </Link></div>
  <div className='link' ><Link  > WEB SERIES </Link></div>
  <div className='link' ><Link  > TV SERIES </Link></div>
  <div className='link' ><Link  > PC GAMES </Link></div>

   </div>
    </div>
  )
}

export default Navbar
