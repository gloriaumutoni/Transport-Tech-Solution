import React from 'react';
// import "./login.css"
import {AiOutlineEyeInvisible} from "react-icons"
const Login = () => {
    return (
        <>
        <div className='all'>
            <div className='box'>
                <div className='blue'>
                    <h1>Welcome Back <span>!</span></h1>
                    <p>To keep connected with us please <br></br>
                    </p>
                    <p3>login with your personal info.</p3>
                    <button>SIGNUP</button>
                </div>
                <div className='right'>
                <form>
                    <h1>LOGIN</h1>
                    <div className='ico'>
                    <div className='box1'>
                        {/* <AiOutlineEyeInvisible/> */}
                    </div>
                    
                    <div className='box2'></div>
                    <div className='box3'></div>
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
                    <a href='submit'>login</a>
                    </div>
                    </form>                     
                </div>
                </div>
                <div className='left'>
                <div className='red'>
                    <h1>Welcome Back <span>!</span></h1>
                    <p>To keep connected with us please <br></br>
                    </p>
                    <p3>login with your personal info.</p3>
                    <button>LOGIN</button>
                </div>
                <form>
                    <h1>Create Account</h1>
                    <h3>or use your account</h3>
                    {/* <label>username</label><br></br>
                    <div className='user'>
                    <input type='text' id="usrename" placeholder='username'/><br></br>
                    </div> */}
                    <label>username</label><br></br>
                    <div className='user'>
                    <input type='text' id="username"/><br></br>
                    
                    </div>
                    <label>Emailorphonenumber</label><br></br>
                    <input type='email' id="email" /><br></br>
                    <label>Password</label><br></br>
                    <input type='password' id="password"/><br></br>
                    <label>confirm password </label><br></br>
                    <input type='password' id="password"/><br></br>
                    <h3>for got your password</h3>
                    <div className='sub'>
                    <a href='submit'>signup</a>
                    </div>
                    </form> 
                </div>
            

        </div>
        </>
    )

};
export default Login;