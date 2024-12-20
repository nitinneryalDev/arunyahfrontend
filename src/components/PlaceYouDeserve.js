import React from 'react'
import howItWorks from "../assets/images/corporate/howItWorkstwo.jpg" 


function PlaceYouDeserve() {
  return (
    <div className="container-fluid mx-auto  mb-5">
    <div className="row justify-content-center explore-row   px-xxl-5 px-sm-0 mx-sm-0 mx-lg-5 mx-xl-5 mx-xxl-5">
      <div className="  col-lg-12  col-md-12 col-12">

      <div className="position-relative  m-lg-5">
        <img src={howItWorks} className="d-block image_place  w-100 rounded-4"  alt="..." />
        <div className="section_third w-100   position-absolute top-50 start-50 translate-middle">
            <div className="black-overlay position-relative h-sm-50 h-md-50  h-xl-100 h-xxl-100 h-lg-75">
              <div className="txt-block w-lg-75 w-xl-75 w-xxl-75 w-md-75 w-sm-100 w-100 p-2 p-sm-2 p-md-5 p-lg-5 mx-xl-5 text-white position-absolute content-text top-50 start-50    translate-middle ">
                <p className='fs-5 text bold'>EXPLORE</p>
                <p className='h1  display-6  text'>Hire a Top Games Development Company
                . </p>
                <p className='fs-5'> At Eligo Creative Solutions, we have expertise in developing fast, engaging and highly-responsive gaming apps for Android, iOS and Windows.. </p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default PlaceYouDeserve