import React,{useState} from 'react'
import movies from './images/movies.jpeg'
import { FaLock} from 'react-icons/fa'

import { Link } from 'react-router-dom'


function Login() {
  const[cupassword, setcuPassword] = useState('');
  const[newpassword, setnewPassword] = useState('');
  const[confPassword, setconfpassword] = useState('');
  // const[cPassword, setcPassword] = useState('');
  
   const handlecupasswordChange = event => {
     setcuPassword(event.target.value);
   }
   const handlenewpasswordChange = event => {
    setnewPassword(event.target.value);
  }
  const handleconfpasswordChange = event => {
    setconfpassword(event.target.value);
  }
 
  const handleSubmit = event =>{
    event.preventDefault();

    setcuPassword('');
    setnewPassword('');
    setconfpassword('');
  
  }
  return (
      <div className='h-screen'>
          
    <div className="  h-screen w-full pt-12" style={{backgroundImage:`url(${movies})`}}>
      <div className='h-[90vh] w-[35vw] bg-black opacity-[0.7]  ml-auto mr-auto block pl-28 pt-12 '>
          <h1 className='text-[#BE4502] text-4xl pl-16'>WELCOME TO M<span className='text-white text-5xl'>V</span>T</h1>
         <form action="" onSubmit={handleSubmit} >
             <label className='text-white block pt-12'>Current password</label>
             <i className='text-white text-3xl absolute pt-2'><FaLock /></i>
             <input type="password" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={cupassword} onChange={handlecupasswordChange}/>
             <label className='text-white block pt-8'>New password</label>
             <i className='text-white text-3xl absolute pt-2'><FaLock /></i>
             <input type="password" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={newpassword} onChange={handlenewpasswordChange}/>
             <label className='text-white block pt-8'>Confirm new password</label>
             <i className='text-white text-3xl absolute pt-2'><FaLock /></i>
             <input type="password" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={confPassword} onChange={handleconfpasswordChange}/>
             {/* <p className='text-white text-center pl-36 pt-8  hover:underline'><Link to="/changePassword"><a className='text-white '>Change password</a></Link></p> */}
              <Link to="/login">
             <button  className='h-20 w-60 bg-[#BE4502] block mt-10 text-white text-xl ml-24'>Change password</button>
             </Link>
             <p className='text-white pl-20 pt-8 '>Don't have an account?<Link to="/signup"><a className='text-[#BE4502] '>Sign Up</a></Link></p>
         </form>
      </div>
 
    </div>
    </div>
  )
}

export default Login