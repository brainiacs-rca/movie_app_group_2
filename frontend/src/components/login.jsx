import React,{useState} from 'react'
import movies from './images/movies.jpeg'
import { FaUserCircle,FaEnvelope, FaLock} from 'react-icons/fa'

import { Link } from 'react-router-dom'


function Login() {
  const[fullname, setFullname] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [data, setData] = useState({
    // fullname : '',
    email: '',
    password: ''
})
  // const[cPassword, setcPassword] = useState('');
  
   const handlefullChange = event => {
     setFullname(event.target.value);
   }
   const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }
 
  // const handleSubmit = event =>{
  //   event.preventDefault();

  //   setName('');
  //   setEmail('');
  //   setPassword('');
  
  // }
  const token = localStorage.getItem("token");
  const [response, setResponse] = useState("")
  const handleSubmit = async(e)=>{
      e.preventDefault();
             await fetch(
          "http://localhost:4000/api/auth/login",
          {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(data),
            // authorization: "Bearer " + token
          }
        ).then((response) => {
          return response.json();
        }).then((data)=>{
           if(data.token.accessToken){
              localStorage.setItem("token", data.token.accessToken);
              setResponse("Login successfull");
              Navigate("/welcomeLogin");
          }else{
              setResponse("Invalid credentials");
              Navigate("/login");
          }
        });
   
      };
  return (
      <div className='h-screen'>
          
    <div className="  h-screen w-full pt-36" style={{backgroundImage:`url(${movies})`}}>
      <div className='h-auto pb-8 w-1/3 bg-black opacity-75  ml-auto mr-auto block pl-28 pt-12 '>
          <h1 className='text-yellow-70                                                                                                                                                                                                                                                                                                        0 text-4xl pl-16'>WELCOME TO M<span className='text-white text-5xl'>V</span>T</h1>
         <form action="" onSubmit={handleSubmit} >
             {/* <label className='text-white block pt-12'>Username</label>
             <i className='text-white text-3xl absolute pt-2'><FaUserCircle /></i>
             <input type="text" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={name} onChange={handleNameChange}/> */}
             <label className='text-white block pt-8'>Email</label>
             <i className='text-white text-3xl absolute pt-2 pl-4'><FaEnvelope /></i>
             <input type="text" className='border-b-2 border-b-white bg-inherit w-96 h-12 text-white text-lg pl-14' value={email} onChange={handleEmailChange}/>
             <label className='text-white block pt-8'>Password</label>
             <i className='text-white text-3xl absolute pt-2 pl-4'><FaLock /></i>
             <input type="password" className='border-b-2 border-b-white bg-inherit w-96 h-12 text-white text-lg pl-14' value={password} onChange={handlePasswordChange}/>
             <p className='text-white text-center pl-24 pt-8  hover:underline'><Link to="/changePassword"><a className='text-white '>Change password</a></Link></p>
              {/* <Link to="/welcomeLogin"> */}
             <button  className='h-20 w-48 bg-yellow-700 block mt-10 text-white text-xl ml-24' type='submit'>Log in</button>
             {/* </Link> */}
             <p className='text-white pl-20 pt-8 '>Don't have an account?<Link to="/signup"><a className='text-yellow-700 hover:underline '>Sign Up</a></Link></p>
         </form>
      </div>
 
    </div>
    </div>
  )
}

export default Login