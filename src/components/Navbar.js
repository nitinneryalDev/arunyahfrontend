import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import contacts from '../Contact'

const Navbar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`px-lg-2 px-xxl-5   py-xxl-2 px-sm-2 px-0 px-md-2 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       <div className="container-fluid mx-xxl-3 mx-xl-4">
             <NavLink className="navbar-brand w-sm-10 w-15 w-md-50 w-lg-15 w-xxl-15 w-xl-15" to="/">               
                   {/* <img src={logo} alt="logo" width="50" height="30"  className="img-thumbnail   align-text-top  "/>       */}
                   <p className="h5" >Arunyah</p>
                                 </NavLink>
                 <button className="navbar-toggler ml-auto   " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                 <div className="collapse navbar-collapse mr-auto justify-content-center justify-content-lg-end" id="navbarSupportedContent">
                     <ul className="navbar-nav  mx-lg-2 mx-xl-auto  mx-lg-auto mx-md-auto mx-0 mx-xxl-auto mb-2 mb-lg-0">
                         <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <NavLink className="nav-link fw-bolder active text-capitalize" aria-current="page" to="/">Home</NavLink>
                         </li>
                         <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <NavLink className="nav-link fw-bolder text-capitalize" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <NavLink className="nav-link fw-bolder text-capitalize" to="/services">Services</NavLink>
                        </li>

                        <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <NavLink className="nav-link fw-bolder text-capitalize" to="/about">About Us</NavLink>
                         </li>
                         <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <NavLink className="nav-link fw-bolder text-capitalize" to="/contact">Contact Us</NavLink>
                         </li>
                     </ul>
                    
               
                     <button className="btn rounded-pill  btn-primary me-md-2" type="button">Contact Us</button>                    
                   
                     {/* <div className={`form-check  mx-md-0 mx-lg-2  mx-xxl-5 mx-xl-5 form-switch text-${props.mode==='light'?'dark':'light'}`}>
                     <i className="text-white fa-solid fa-lightbulb-on">
                   <input className="form-check-input" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enable the light theme"  onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>   
                   </i>       
                    </div> */}
                 </div>
             </div>
    </nav>
  );
};

export default Navbar;
