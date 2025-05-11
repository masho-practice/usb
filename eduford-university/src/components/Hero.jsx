import React from "react";


const Hero = () => {
  return (
    <div
      className="absolute bg-hero-img bg-cover bg-center h-[788px] text-white  w-full "
    >
      <div className="bg-slate-900/70 h-[788px] w-full  ">
     
        <div data-aos="zoom-in" className="text-center item-center justify-center pt-64">
          <h1 className=" font-bold md:text-4xl lg:text-5xl text-3xl">World's Biggest University</h1>
          <p className="text-center mx-auto item-center py-6 font-light ">
            Lorem ipsum, dolor sit amet consecteturelit. Illum id
            dolorum voluptates <br /> totam perspiciatis incidunt  ducimus harum
            dolore
          </p>
          <button className="rounded-sm border hover:scale-105 border-purple-500  hover:border-indigo-500  hover:bg-red-400 transition duration-300 px-5 py-2 my-4">Visit Us to Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
