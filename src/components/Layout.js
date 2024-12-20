// src/components/Layout.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import '../App.css';


const Layout = ({ children }) => {

    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        // showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtils - Dark Mode';
        // setInterval(() => {
        //   document.title = 'TextUtils is Amazing Mode';
        // }, 2000);
        // setInterval(() => {
        //   document.title = 'Install TextUtils Now';
        // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        // showAlert("Light mode has been enabled", "success");
        document.title = 'TextUtils - Light Mode';
      }
    }



  return (
    <>
      <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode}  />
      <main  className="layout" >{children}</main> {/* Render page-specific content */}
      <Footer />
    </>
  );
};

export default Layout;
