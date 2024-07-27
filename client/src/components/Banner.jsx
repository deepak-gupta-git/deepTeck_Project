import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return ( 
    <div>
        <div className="hero-main mx-auto md:px-20 bg-black p-10 flex flex-col md:flex-row mt-20">
        <div className="hero-left w-[60%] text-white my-5 order-2 md:order-1">
            <p className='mt-2'>
            We are the World Best IT Company
            </p>
            <h1 className='text-5xl font-bold mt-5 text-blue-600'>Welcome to deepTeck</h1>
            <p className='mt-5'>
            Are you ready to take your business to the next level <br /> with cutting-edge IT solutions? Look no further! At Thapa Technical, <br /> we specialize in providing innovative IT services and solutions tailored to meet <br /> your unique needs.
            </p>

            <div className="buttons flex gap-5 mt-10">
           <NavLink to={"/contact"}> <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 '>Connect Now</button></NavLink>
            <NavLink to={"/service"}><button className='btn text-blue-700 hover:text-white border rounded-md py-2 px-2'>Learn More</button></NavLink>
            </div>
        </div>

        <div className="hero-right order-1">
            <img className='w-[400px] h-[400px] flex justify-center ' src="/image/home.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Banner
