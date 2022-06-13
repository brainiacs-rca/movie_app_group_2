import React,{useState,useEffect} from 'react'
import movies from './images/movies.jpeg'
import { FaUserCircle,FaEnvelope,FaCheckCircle,FaLock} from 'react-icons/fa'
import {Link}  from 'react-router-dom';
import Validate from './validate';


function Signup({submitForm}) {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[cPassword, setcPassword] = useState('');
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [data, setData] = useState({
    username  : "",
    password : "",
    email : ""
  })
  
   const handleNameChange = event => {
     setName(event.target.value);
   }
   const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }
  const handleConfPasswordChange = event => {
    setcPassword(event.target.value);
  }
  const handleSubmit = event =>{
    event.preventDefault();
    setData({
      username : username,
      email : email,
      password : password
    })
    setName('');
    setEmail('');
    setPassword('');
    setcPassword('');
    setErrors(Validate(username, password, email));
    setDataIsCorrect(true);
  }
     useEffect(()=>{
       if(Object.keys(errors).length == 0 && dataIsCorrect){
         submitForm(true);
       }
     },  [errors]); 

  

  return (
      <div className='h-screen'>
          
    <div className="  h-screen w-full pt-12" style={{backgroundImage:`url(${movies})`}}>
      <div className='h-[90vh] w-[35vw] bg-black opacity-[0.7]  ml-auto mr-auto block pl-28 pt-12'>
          <h1 className='text-[#BE4502] text-4xl pl-16'>WELCOME TO M<span className='text-white text-5xl'>V</span>T</h1>
         <form action="/welcomeSignUp" onSubmit={handleSubmit} >
             <label className='text-white block pt-12'>Username</label>
             <i className='text-white text-3xl absolute pt-2' ><FaUserCircle /></i>
             <input type="text" name='username' className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14'  value={name} onChange={handleNameChange}/>
             {errors.username && <p className="error">{errors.username}</p>}
             <label className='text-white block pt-8'>Email</label>
             <i className='text-white text-3xl absolute pt-2'><FaEnvelope /></i>
             <input type="email" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={email} onChange={handleEmailChange}/>
             {errors.email && <p className="error">{errors.email}</p>}
             <label className='text-white block pt-8'>Password</label>
             <i className='text-white text-3xl absolute pt-2'><FaLock /></i>
             <input type="password" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14'value={password} onChange={handlePasswordChange}/>
             {errors.password && <p className="error">{errors.password}</p>}
             <label className='text-white block pt-8'>Confirm Password</label>
             <i className='text-white text-3xl absolute pt-2'><FaCheckCircle /></i>
             <input type="password" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14'value={cPassword} onChange={handleConfPasswordChange}/>
             {errors.confpassword && <p className="error">{errors.confpassword}</p>}
             <Link to="/welcomeSignUp">
             <button  className='h-20 w-48 bg-[#BE4502] block mt-10 text-white text-xl ml-24' type='submit'>Sign Up</button>
             </Link>
             <p className='text-white pl-20 pt-8 '>Already have an account?<Link to="/login"><a className='text-[#BE4502] '>Log in</a></Link></p>
         </form>
      </div>
 
    </div>
    </div>
  )
}

export default Signup