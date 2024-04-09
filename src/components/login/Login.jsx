import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";

const initialValue = {
  "email": "xyz@gmail.com",
  "password": "xyz",
}
const Login = () => {
  const password = localStorage.getItem("signinPasswordValue")
  const email = localStorage.getItem("signinEmailValue")
  const [values, setValues] = useState(initialValue);
  const handleOnChange = (e) => {
    console.log([e.target.name], e.target.value)
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
      e.preventDefault()
      try {
        if (values.email === email && values.password === password){

          navigate("/setting")
        }else{
          alert("Please enter valid cradential")
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='login'>
      <div className="loginHeading">
        <h2 className='loginTitle'>Signin to your PopX account</h2>
        <p className="loginSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
      </div>
      <form action="" onSubmit={handleSubmit} className='loginForm'>
      <label htmlFor="email">Email Address</label>
        <input type="email" name="email" onChange={handleOnChange} id="email" placeholder='Enter email address'/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleOnChange} id="pass" placeholder='Enter password'/>
        <button type='submit'>Login</button>
      </form>

      
    </div>
  )
}

export default Login
