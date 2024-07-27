import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import { useAuth } from '../Store/auth';


const loginForm = () => {
  const [login , setLogin] = useState ({
    email : "" ,
    password : "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();


  const handleInput = (e) => {
    // console.log(e)
    let name = e.target.name ;
    let value = e.target.value;
  

  setLogin ( {
    ...login ,
    [name] : value,
  } );
};




  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(login);
    try {
        const response = await fetch(`http://localhost:2000/api/auth/login` , {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(login),
        });

        console.log("login form", response)

        const res_data = await response.json();
      

        if(response.ok) {
          storeTokenInLS(res_data.token);
          toast.success("login successfully")
            setLogin ({ email : "", password : ""});
            navigate("/")
            // localStorage.setItem("token" , res_data.token)
          

        } else {
          toast.error(
            "Email and password Invalid"
          ); 
          console.log("invalid credentials")
        };
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
        <div className="hero-main mx-auto md:px-20 bg-black p-10 flex flex-col md:flex-row">
        <div className="hero-left order-1 ">
          <img
            className="w-[500px] h-[400px] mt-12"
            src="/image/login.png"
            alt=""
          />
        </div>

        <div className="hero-right order-2 w-[50%] text-white">
            <div className="farm w-[350px] md:w-[500px] md:ml-20 ">
            <div className="bg-black min-h-screen flex items-center justify-center">
            <form className="bg-black p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                <h2 className="text-6xl font-bold mb-6 text-white underline underline-offset-8 ">Login</h2>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input placeholder='Enter your email' type="email" id="email" name="email" 
                    autoComplete='off'
                    required
                    value={login.email}
                    onChange={handleInput}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input  placeholder='Enter your password' type="password" id="password" name="password" 
                     autoComplete='off'
                     required
                     value={login.password}
                     onChange={handleInput}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
                </div>
            </form>
        </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default loginForm
