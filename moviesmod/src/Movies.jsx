import React, { useState } from 'react'
import "./App.css";
import data from './data'
import { Link } from 'react-router-dom';
const Movies = () => {

    console.log(data);

    const [movie , setmovie]=useState(data);

  return (
    <div className='movies ' >
      {movie.map((item,index)=>{
        return <div className='movie' >
           <div className='h-70' >
          <Link to={item.link}>  <img className='w-full h-full movieimage' src={item.image} /></Link>
           </div>
            <div className='moviename' >
                <Link to={item.link}>
               <p> {item.title}</p>
                </Link>
            </div>
            </div>
      })}
    </div>
  )
}

export default Movies
