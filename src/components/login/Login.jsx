import React from 'react'
import { useState } from 'react'
import "./login.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';;



async function loginUser(credentials) {
    console.log(credentials);
    return fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({
            email,
            password
        });


        if ('token' in response) {
            
            localStorage.setItem('accessToken', response['token']);
            
            toast.success("Login successful", {position: toast.POSITION.TOP_RIGHT,autoClose:5000});
            

            navigate('/home');
          
        }
        else {

            toast.error("Login failed")

        }
    }




    return (
        <div className='login'>
            <div className="login-left">
                <div className="login-left-wrapper">
                    <h3>Designed for Individuals</h3>
                    <h5>See the analytics and grow your data remotely, from anywhere</h5>
                </div>

            </div>
            <div className="login-right">
                <div className="login-right-wrapper">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} >
                    
                        <div className='email'>
                            <label>Email Address</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='  name@mail.com' />


                        </div>

                        <div className='password'>
                            <label>Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="pswd" placeholder='  *********' />
                        </div>
                        <button type="submit" className='login-btn'>Login</button>
                        
                    </form>
                    <p className='signup-desc'>Dont have an Account? <a href="#">Sign Up</a></p>





                </div>


            </div>
          
        </div>
        
    )
}

