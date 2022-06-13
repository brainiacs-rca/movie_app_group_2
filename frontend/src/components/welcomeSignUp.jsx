import React from 'react'
import movies from './images/movies.jpeg'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
function WelcomeSignUp() {
  return (
    <div>
         <div className="  h-screen w-full" style={{backgroundImage:`url(${movies})`}}>
           <div className='h-screen w-full pt-72'>
               <div className='h-80 w-[24vw] bg-black opacity-[0.7] ml-auto mr-auto rounded-2xl '>
                 <div className='pl-56 pt-6'>
               <i className='text-[#BE4502] text-center text-4xl  '><FaCheckCircle /></i>
               </div>
                 <h1 className='text-center text-white pt-8'>OFFICIALLY A MEMBER <br />OF MVT COMMUNITY!</h1>
                 <p className='text-center pt-6 text-white'>You can now watch your favourite movies and TV <br /> Shows anywhere anytime FOR FREE</p>
                 <button className='flex h-12 w-40 bg-[#BE4502] pl-8 pt-2 ml-auto mr-auto text-white text-xl mt-6'>Explore <i className='text-white pt-1 pl-2 text-xl'><FaArrowRight /></i></button>
               </div>
              
           </div>
         </div>

    </div>
  )
}

export default WelcomeSignUp