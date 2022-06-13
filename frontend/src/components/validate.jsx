const Validate = (username, password, email, confpassword) =>{
    username = username === "" ? null : username;
    password = password === "" ? null  : password;
    confpassword = confpassword ==="" ? null : confpassword;
    email = email === "" ? null : email;

    console.log(username)
    let errors = {};
    if(!username){
        errors.username="Name is required."
    }
    if(!password){
        errors.password="The password is required."
    }
    if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Invalid email."
    }
     if(email){
        errors.email="email is required"
    }
    if(password?.length < 6){
        errors.password="The password must have more than 6 characters"; 
    }
    if(password !== confpassword){
        errors.confpassword = "The password entered is incorrect";
    }

    
    return errors ;
} 

export default Validate;