import React, { useState } from 'react';
import "./log-in.css";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate =useNavigate();
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const Submit =()=>{
        navigate('/signup')
    }
    const Redirect=(e)=>{
        e.preventDefault()
        if (email==='admin@gmail.com' && password==='admin1'){
            navigate('/admin')
        }
         if(email==='driver@gmail.com' && password==='driver1'){
            navigate('/destination')
        }
        else{
            toast.error('invalid credentials')
        }
    }
    return (
        <div className='login-center'>
            <div className="container-Login" id='Login-fix-fab'>
                <div className="forms-container">
                    <div className="form-control signin-form">
                        <form action="#">
                            <h2>Login</h2>
                            <input 
                             type="email"
                              placeholder="Email"
                               value= {email} 
                              onChange={(e)=>{
                                setEmail(e.target.value)
                              }}
                               required />
                            <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                           onChange={(e)=>{
                            setPassword(e.target.value)
                           }}
                            required />
                            <button onClick={Redirect}>Login</button>
                        </form>
                        <span>or signin with</span>
                        <div className="socials">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className="intros-container">
                    <div className="intro-control signin-intro">
                        <div className="intro-control__inner">
                            <h2>Welcome Back!</h2>
                            <p>
                                We are so excited to have you here. If you haven't already, created an account to get access to exclusive offers, rewards, and discounts.
                            </p>
                            <button id="signin-btn" onClick={Submit}>Sign Up.</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )

};
export default Login;