import React from 'react'
import { NavLink } from 'react-router-dom'

const Service = () => {
  return (
    <div>
         <div className="hero-main mx-auto md:px-20 bg-black p-10 flex flex-col md:flex-row mt-20">
        <div className="hero-left w-[50%] text-white my-5 order-2 md:order-1">
          <p className="mt-2 text-2xl text-blue-600">Welcome, to deepTeck</p>
        
          <p className="mt-5">
          At <span className="text-2xl">deepTeck</span>, we specialize in delivering top-notch web development solutions tailored to meet your business needs. Our expertise spans across a wide range of services designed to help your business thrive in the digital world..{" "}
            <br /> <br /> <h2 className="text-2xl  text-blue-600">Web Development</h2>Our team of experienced developers creates dynamic, responsive, and user-friendly websites that engage your audience and drive conversions. Whether you need a simple landing page or a complex web application, we ensure your site is fast, secure, and scalable. <br /> <br />
           <h2 className="text-2xl  text-blue-600">E-Commerce Solutions</h2> Transform your online store with our custom e-commerce solutions. We provide robust platforms that are easy to manage, integrate seamlessly with payment gateways, and offer an intuitive shopping experience for your customers. Our solutions help you increase sales and streamline operations. <br /> <br />
            <h2 className="text-2xl text-blue-600">Custom Software Development</h2>We provide custom software solutions tailored to your specific business requirements. Our team is skilled in a variety of technologies and can develop software that improves efficiency, automates processes, and solves complex challenges. <br /> <br />
          </p>

          <div className="buttons flex gap-5 mt-10">
         <NavLink to={"/contact"}>   <button className="btn text-white bg-blue-700 rounded-lg p-2 ">
              Connect Now
            </button></NavLink>
            
          </div>
        </div>

        <div className="hero-right order-1">
          <img
            className="w-[500px] h-[400px] mt-10"
            src="/image/about.png"
            alt=""
          />
        </div>
      </div>
     
    </div>
  )
}

export default Service
