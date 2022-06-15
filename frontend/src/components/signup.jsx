import React,{useState,useEffect} from 'react'
import movies from './images/movies.jpeg'
import { FaUserCircle,FaEnvelope,FaCheckCircle,FaLock} from 'react-icons/fa'
import {  Link,useNavigate}  from 'react-router-dom';
// import Validate from './validate';
import WelcomeSignUp from './welcomeSignUp'



function Signup() {

  const [email, setemail] = useState();
  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setcpassword] = useState();
  const navigate = useNavigate("")
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const [data, setData] = useState({

    username: "",
    cpassword: "",
    password: "",
    email: ""
  })
  const handleEmailChange = e => {
    setemail(e.target.value);
  }
  const handleNameChange = e => {
    setusername(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
  const handleConfPasswordChange = e => {
    setcpassword(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setData({
      username: username,
      cpassword: cpassword,
      password: password,
      email: email
    })
    // setDataIsCorrect(true);
    const register = async()=>{
      await fetch("http://localhost:4000/api/auth/register",{
         method:"POST",
         // mode: "no-cors",
         headers: {
           "Content-Type":"application/json"
         },
         body:JSON.stringify(data)
       }).then((response)=>{
             return response.json()
       }).then((data)=>{
         console.log(data)
       }).catch((error)=>{
         console.log(error)
       })
     
     }
    register();   
    setErrors(Validation(username, password, email, cpassword));
    setemail('');
    setusername('');
    setPassword('');
    setcpassword('');
    
   
  

  }
  const Validation = ( username, password, email, cpassword) => {
    console.log( username, password, email, cpassword)
    email = email === "" ? null : email;
    username = username === "" ? null : username;
    password = password === "" ? null : password;
    cpassword = cpassword === "" ? null : cpassword;

 
    if (!username) {
      errors.username = "username is required."
    }
    if (!password) {
      errors.password = "The password is required."
    }
    if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Invalid email."
    }
    if (!email) {
      errors.email = "email is required";
    }
    if(password?.length < 6){
        errors.password="The password must have more than 6 characters"; 
    }
    if(password !== cpassword){
        errors.cpassword = "The password entered is incorrect";
    }
   

    // password.length < 6 ? errors.password = "The password must have more than 6 characteres" : errors.password = "Password okay";
    // password === cpassword ? errors.cpassword = "The password entereed is correct" : errors.cpassword = "The password is incorrecterly entered and doesnt match the cpassword";
    if(Object.keys(errors).length === 0){
      setDataIsCorrect(true)
      console.log(dataIsCorrect)
    }else{
      console.log(dataIsCorrect)
    }
    return errors;

  }

    
  

  return (
      <div className='h-screen'>
          
    <div className="  h-screen w-full pt-12" style={{backgroundImage:`url(${movies})`}}>
      <div className='h-[90vh] w-[35vw] bg-black opacity-[0.7]  ml-auto mr-auto block pl-28 pt-12'>
          <h1 className='text-[#BE4502] text-4xl pl-16'>WELCOME TO M<span className='text-white text-5xl'>V</span>T</h1>
         <form action="/validate" onSubmit={handleSubmit} >
             <label className='text-white block pt-12'>Username</label>
             <i className='text-white text-3xl absolute pt-2' ><FaUserCircle /></i>
             <input type="text" name='username' className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14'   value={username} onChange={handleNameChange}/>
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
             <input type="password" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14'value={cpassword} onChange={handleConfPasswordChange}/>
             {errors.confpassword && <p className="error">{errors.confpassword}</p>}
             {/* <Link to="/welcomeSignUp"> */}
             <button  className='h-20 w-48 bg-[#BE4502] block mt-10 text-white text-xl ml-24' type='submit'>Sign Up</button>
             {/* </Link> */}
             <p className='text-white pl-20 pt-8 '>Already have an account?<Link to="/login"><a className='text-[#BE4502] '>Log in</a></Link></p>
         </form>
      </div>
 
    </div>
    </div>
  )
}

export default Signup