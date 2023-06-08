import React from 'react';
import './signup.css'
// import AiOutlineEyeInvisible from "react-icons"
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
// import { BiLogoLinkedin } from 'react-icons/bi';
const Signup = () => {
    return (
        <>
        <div className='all'>
            <div className='box'>
                <div className='blue'>
                    <h1>Welcome Back <span>!</span></h1>
                    <p>To keep connected with us please <br></br>
                    </p>
                    <p3>login with your personal info.</p3>
                    <div className='add'>
                    <a href='LOGIN'>SIGNUP</a>
                    </div>
                </div>
                <div className='right'>
                <form>
                    <h1>LOGIN</h1>
                    <div className='ico'>
                    <div className='box1'>
                        <AiOutlineEyeInvisible size={30} color="black" backgroundcolor="black"/>
                    </div>
                    
                    <div className='box2'>
                    <AiFillGooglePlusCircle size={30} color="black" />   
                    </div>
                    <div className='box3'>
                    {/* <FaLinkedinSquare size={30} color="blue" /> */}
                    </div>
                    </div>
                    <label>username</label><br></br>
                    <div className='user'>
                    <input type='text' id="username"/><br></br>
                    
                    </div>
                    <label>Emailorphonenumber</label><br></br>
                    <input type='email' id="email" /><br></br>
                    <label>Password</label><br></br>
                    <input type='password' id="password"/><br></br>
                    <div className='sub'>
                    <a href='SIGNUP'>LOGIN</a>
                    </div>
                    </form>                     
                </div>
                </div>
                
        </div>
        
        
        </>
    )

};
export default Signup;