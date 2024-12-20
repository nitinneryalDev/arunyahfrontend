import React from 'react'
import AboutSection from './components/AboutSection'

function About() {
  return (
    <div>
 <div className=" about_container text-center h-50 text-white py-5">
        <h1>About Us</h1>
        <p>
          Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.
        </p>
        <nav className="breadcrumbs d-inline-block">
          <ol className="breadcrumb bg-transparent p-0 m-0">
            <li className="breadcrumb-item">
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              About Us
            </li>
          </ol>
        </nav>
      </div>

<AboutSection/>
    </div>
  )
}

export default About