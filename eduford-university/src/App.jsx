import React, { useEffect } from "react";

import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []);
  return <div>
    <Navbar />   
    <Hero/>
    <CourseList />
  </div>;
};

export default App;
