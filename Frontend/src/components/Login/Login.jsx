import React from 'react'
import "./login.css"
import {useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import img1 from '../images/img1.jpg'
const Login = (props) => {
  const initialCredential={
    username:"",
    password:""
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
    const [credential, setCredential] = useState(initialCredential)
    const handlechange=(e)=>{
      setCredential({...credential,[e.target.name]:e.target.value})
    }
    let history=useHistory();
    const handlesubmit=async(e)=>{
      e.preventDefault();
      const response = await fetch(`http://localhost:3006/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'authtoken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmY2I0OGNlNjI4Zjg1OGE2OGE1ZDYyIn0sImlhdCI6MTY0NDI5NTg0OX0.fX--r5OatakjeV-1qWynUIcufuJXwuhW9hWqHyAqjIs "
        },
  
        body: JSON.stringify({username:credential.username,password:credential.password})
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        // save the auth token and redirect
        localStorage.setItem("token",json.authtoken);
        props.showAlert("Login successfully","success")
        history.push("/")
      }
      else{
        props.showAlert("Invalid Details","danger")
      }
    }
  return (
    < >

        
    <div className='container myContainerlogin border border-dark rounded-start border-1' style={{"background-color": "#d1eaff"}}>
    <div >
      <img src={img1} className="img-fluid" style={{"height":"40px"}}alt="" />
    </div>
    <h4 className='text-center'>Login</h4>
       <form onSubmit={handlesubmit} className="my-4">
<div className="mb-3">
<label htmlFor="username" className="form-label">UserName</label>
<input type="text" className="form-control" id="username" name="username" value={credential.username} onChange={handlechange} required/>
{/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
</div>
<div className="mb-3">
<label htmlFor="password" className="form-label">Password</label>

  <div class="input-group" id="show_hide_password">
<input type={passwordShown ? "text" : "password"} className="form-control" id="password" name="password" value={credential.password}  onChange={handlechange} required/>
{/*   
  <div class="input-group-addon mx-1">
    <a href=""></a>
<button type='button' onClick={togglePassword}><i class={passwordShown?"fa fa-eye":"fa fa-eye-slash"} aria-hidden="true"></i></button>
  </div> */}
</div>
</div>
{/* <div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" htmlFor"exampleCheck1">Check me out</label>
</div> */}
<div className="d-flex justify-content-center my-6"><button type="submit" className="btn  btn-outline-dark ">Login</button></div>
<div className='my-3 row'><h6 className='col-md-6'>Not Registered?</h6> <Link className={`nav-link col-md-6`} aria-current="page" to="/SignUp">SignUp</Link> </div>
<button><a href='https://localhost:3006/auth'>Login With Google</a></button>
</form>



    </div>
    {/* <Check/> */}
    </>
  )
}

export default Login