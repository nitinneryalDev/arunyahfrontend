import React from "react";
import AboutSection from "./components/AboutSection";
import CommonHero from "./components/CommonHero";
function About() {
  return (
    <div className="mb-3" >
      <CommonHero
        title="About Us"
        description="Our story. Our passion. Our mission." 
        clsnm="about_container" 
        />
      <AboutSection  />
    </div>
  );
}

export default About;
