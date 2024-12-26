import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact.js";
import About from "./About";
import Home from "./Home";
import Layout from "./components/Layout";
import Services from "./Services.js";
import Blogs from "./Blogs.js";
import NotFound from "./components/NotFound.js";
import ServiceType from "./ServiceType.js";

const App = () => {
  return (
    <>
      <Router>
        <Routes>

        <Route
                path="/services/:serviceType"
                element={
                  <Layout>
                    <ServiceType />
                  </Layout>
                }
              />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/services"
            title={`Services`}
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          
              <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
