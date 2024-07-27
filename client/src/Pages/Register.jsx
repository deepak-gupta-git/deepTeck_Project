import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import { useAuth } from '../Store/auth';




const Register = () => {
    const [user, setUser] = useState({
        username : "",
        email : "",
        password : "",
        phone : ""
    });


    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser ({
            ...user ,
            [name] : value,
        });  
    };

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
   
        e.preventDefault();
        console.log(user);

        try {
        const response = await fetch(`http://localhost:2000/api/auth/register` , {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(user),
        });

        const res_data = await response.json();
        
        if(response.ok) {
            navigate("/")
            toast.success("Register succesfully")
            setUser ({ username : "",email : "",password : "",phone : ""});
            // const res_data = await response.json()
            // localStorage.setItem("token" , res_data.token)
            storeTokenInLS(res_data.token);
        } else {
            toast.error(
                res_data.extraDetails ? res_data.extraDetails :res_data.message 
            )
        }
        console.log(response);
       } catch (error) {
        console.log("Register Error" , error)
       }
       

    }

  return (
   <div>
    <div className="hero-main mx-auto md:px-20 bg-black p-10 flex flex-col md:flex-row">
        <div className="hero-left order-1 ">
          <img
            className="w-[500px] h-[400px] mt-12"
            src="/image/register.png"
            alt=""
          />
        </div>

        <div className="hero-right order-2 w-[50%] text-white">
            <div className="farm w-[350px] md:w-[500px] md:ml-20 ">
            <div className="bg-black min-h-screen flex items-center justify-center">
            <form className="bg-black p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                <h2 className="text-5xl font-bold mb-6 text-white underline underline-offset-8">Register Farm</h2>
                
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input type="text"
                     id="username" 
                     name="username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder='Enter username'
                      required
                      autoComplete='off'
                      value={user.username}
                      onChange={handleInput}
                      />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                     required
                     placeholder='Enter Email'
                     autoComplete='off'
                     value={user.email}
                     onChange={handleInput}
                    />
                </div>

           
                
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                     required
                     placeholder='Enter your password'
                     autoComplete='off'
                     value={user.password}
                     onChange={handleInput}
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input type="number" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    required
                    placeholder='Enter your phone number'
                    autoComplete='off'
                    value={user.phone}
                    onChange={handleInput}/>
                </div>


                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
                </div>
            </form>
        </div>
            </div>
        </div>
      </div>
   </div>
  )
}

export default Register
