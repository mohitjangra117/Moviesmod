import React from 'react'
import "./App.css";
import { Link } from 'react-router-dom';
const Nav2 = () => {
  return (
    <div className='w-full navnav2 bg-[#18181B] '  >
     <div className='newnav2'>
     <Link className="navlink22 bg-blue-400" > JOIN TELEGRAM  </Link>
     <Link className="navlink2" > English Movies </Link>
     <Link className="navlink2" > Dual Audio  </Link>
     <Link className="navlink2" > On Going Series </Link>
     <Link className="navlink2" > Anime </Link>
     <Link className="navlink2" > K-Drama Series </Link>
     <Link className="navlink2" > Web Series </Link>
     <Link className="navlink2" > Hindi Series </Link>
     <Link className="navlink23 bg-[#FFAA2C]" > 4K Movies </Link>
     </div>
    </div>
  )
  
}

export default Nav2
