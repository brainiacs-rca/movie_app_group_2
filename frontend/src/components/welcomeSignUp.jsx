import React from 'react'
import movies from './images/movies.jpeg'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function WelcomeSignUp() {
  return (
    <div>
         <div className="  h-screen w-full" style={{backgroundImage:`url(${movies})`}}>
           <div className='h-screen w-full pt-72'>
               <div className='h-80 w-1/4 bg-black opacity-75 ml-auto mr-auto rounded-2xl '>
                 <div className='pl-56 pt-6'>
               <i className='text-yellow-700 text-center text-4xl  '><FaCheckCircle /></i>
               </div>
                 <h1 className='text-center text-white pt-8'>OFFICIALLY A MEMBER <br />OF MVT COMMUNITY!</h1>
                 <p className='text-center pt-6 text-white'>You can now watch your favourite movies and TV <br /> Shows anywhere anytime FOR FREE</p>
                 <Link to="./watchmovie">
                 <button className='flex h-12 w-40 bg-yellow-700 pl-8 pt-2 ml-auto mr-auto text-white text-xl mt-6'>Explore <i className='text-white pt-3 pl-3 text-xl'><FaArrowRight /></i></button>
                 </Link>
               </div>
              
           </div>
         </div>

    </div>
  )
}

export default WelcomeSignUp