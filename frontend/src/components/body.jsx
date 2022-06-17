import React from 'react'
import './body.css'
import {FiPlay} from 'react-icons/fi'
function Body() {
  return (
    <div className='container'>
      <div className="content">
        
      <h1 className='name'>MOON KNIGHT</h1>
        <div className="short">
          <div className="shrt1">
           <p> Duration:</p>
           <p>95 min</p>  
          
          </div>
          <div className="shrt2">
            <p>Adventure</p>
            <p>Active</p>
          </div>
        </div>
        <button>
        <i><FiPlay/></i>

        <p>Watch now</p>
        </button>
        </div>
      {/* <img src="./movie.avif" alt="" /> */}
      {/* <div className='content'>
        <h1>MOON KNIGHT</h1>
        <div className="short">
          <div className="shrt1">
           <p> Duration:</p>
           <p>95 min</p>  
          
          </div>
          <div className="shrt2">
            <p>Adventure</p>
            <p>Active</p>
          </div>
        </div>
        <button></button>
      </div> */}
      
    </div>
  )
}

export default Body