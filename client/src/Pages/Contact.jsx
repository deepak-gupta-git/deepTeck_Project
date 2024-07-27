import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [contact, setContact] = useState({
    name : "",
    email : "",
    message:"",
  })


  const handleInput  = (e) => {
    console.log(e)
    let name = e.target.name;
    let value = e.target.value;

    setContact ({
      ...contact ,
      [name] : value ,
    });
  }

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);


    try {
      const response = await fetch(`http://localhost:2000/api/form/contact`, {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },

        body:JSON.stringify(contact),
      })

      if(response.ok) {
        toast.success("msg send succesfully")
       setContact ({name: "" , email: "", message : ""});
      }
      console.log(response)

    } catch (error) {
     console.log( error) 
    
   }
  } 
  return (
    <div className="hero-main mx-auto md:px-20 bg-black p-10 flex flex-col md:flex-row">
        <div className="hero-left order-1 ">
          <img
            className="w-[500px] h-[400px] mt-12"
            src="/image/support.png"
            alt=""
          />
        </div>

        <div className="hero-right order-2 w-[50%] text-white">
            <div className="farm w-[350px] md:w-[500px] md:ml-20 ">
            <div className="bg-black min-h-screen flex items-center justify-center">
            <form className="bg-black p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                <h2 className="text-5xl font-bold mb-6 text-whit underline underline-offset-8">Contact Us</h2>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="name" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder='Enter Name'
                    required
                    autoComplete='off'
                    value={contact.name}
                    onChange={handleInput}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder='Enter Email'
                      required
                      autoComplete='off'
                      value={contact.email}
                      onChange={handleInput}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder='Enter Your Message here'
                      required
                      autoComplete='off'
                      value={contact.message}
                      onChange={handleInput}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
                </div>
            </form>
        </div>
            </div>
        </div>
      </div>
  )
}

export default Contact
