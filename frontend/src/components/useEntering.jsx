import React from 'react'
import movies from './images/movies.jpeg'
import { Link } from 'react-router-dom'
function UseEntering() {
  return (
    <div>
         <div className="  h-screen w-full  " style={{backgroundImage:`url(${movies})`}}>
          
             <div className=' h-screen w-full bg-black opacity-[0.7]'> 
             <h1 className='text-white  text-4xl text-bolder pl-8 pt-8'>M<span className='text-5xl text-[#BE4502] '>V</span>T</h1>
                 <h1 className='text-4xl text-white text-center mt-72'>Watch your favourite shows,<br />
              TV series and others.</h1>
              <p className='text-2xl text-white text-center'>Get more.Spend less with MVT</p>
              <div className='flex justify-center' style={{justifyContent: "center"}}> 
                <Link to="./signup">
              <button className='h-20 w-48 bg-[#BE4502] block mt-10 text-white text-2xl ml-24'>Signup</button>
              </Link>
              <Link to="./login">
              <button className='h-20 w-48 bg-[#BE4502] block mt-10 text-white text-xl ml-24'>Login</button>
              </Link>
              </div>
             </div>
         </div>
    </div>
  )
}

export default UseEntering;