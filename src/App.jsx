import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact.js";
import About from "./About";
import Home from "./Home";
import Layout from "./components/Layout";
import Services from "./Services.js";
import Blogs from "./Blogs.js";



const App = () => {
return (
    <>
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
