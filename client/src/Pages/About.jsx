import React from "react";
import { useAuth } from "../Store/auth";
import { NavLink } from "react-router-dom";

const About = () => {
  const {user} = useAuth();
  return (

    <div>
      { <div className="hero-main mx-auto md:px-20 bg-black p-10 flex flex-col md:flex-row mt-20">
        <div className="hero-left w-[50%] text-white my-5 order-2 md:order-1">
          <p className="mt-2">Welcome {user.username}</p>
          <h1 className="text-5xl font-bold mt-5 text-blue-600">Why Choose Us?</h1>
          <p className="mt-5">
            Expertise: Our team consists of experienced IT professionals who are
            passionate about staying up-to-date with the latest industry trends.{" "}
            <br /> <br /> Customization: We understand that every business is
            unique. Thats why we create solutions that are tailored to your
            specific needs and goals. <br /> <br />
            Customer-Centric Approach: We prioritize your satisfaction and
            provide top-notch support to address your IT concerns. <br /> <br />

            Affordability: We offer competitive pricing without compromising on the quality of our services. <br /> <br />

            Reliability: Count on us to be there when you need us. We are committed to ensuring your IT environment is reliable and available 24/7. <br /> <br />
          </p>

          <div className="buttons flex gap-5 mt-10">
         
         <NavLink to={"/contact"}>
         <button className="btn text-white bg-blue-700 rounded-lg p-2 ">
              Connect Now
            </button>
         </NavLink>
          </div>
        </div>

        <div className="hero-right order-1">
          <img
            className="w-[500px] h-[400px] mt-10"
            src="/image/services.png"
            alt=""
          />
        </div>
      </div> }
    </div>
  );
};

export default About;
