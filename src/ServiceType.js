import React from "react";
import DairySection from "./components/DairySection";
import { useParams } from "react-router-dom";
import TourishmSection from "./components/TourishmSection";
import SubsectionHero from "./components/SubsectionHero"



function ServiceType() {
  const { serviceType } = useParams();
 

  if(serviceType == "dairy" ) {
   return (  <> <SubsectionHero  title="Dairy" Classdata='dairy_container'  description="Best Dairy Product Manufacturer"   />  <DairySection/> </>  ) 

  }
  

  if(serviceType == "tourism" ) {
    return (  <> <SubsectionHero  title="Tour & Travel "  Classdata='tour_container'  description="Helping people make memories."   />  <TourishmSection  /> </>  ) 

 
   }

   if(serviceType == "construction" ) {
    return ( <> <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}} > 
      <div className="d-flex flex-column justify-content-center align-items-center"  ><h1 className="align-items-center text-uppercase" > {serviceType} </h1>
       <p className="fs-5" > This Page Is under construction </p>  </div>
   </div> </>)    }

   if(serviceType == "agriculture" ) {
    return ( <> <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}} > 
      <div className="d-flex flex-column justify-content-center align-items-center"  ><h1 className="align-items-center text-uppercase" > {serviceType} </h1>
       <p className="fs-5" > This Page Is under construction </p>  </div>
   </div> </>)     }

   if(serviceType == "itservices" ) {
    return ( <> <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}} > 
      <div className="d-flex flex-column justify-content-center align-items-center"  ><h1 className="align-items-center text-uppercase" > {serviceType} </h1>
       <p className="fs-5" > This Page Is under construction </p>  </div>
   </div> </>)    }

   if(serviceType == "logistics" ) {
    return ( <> <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}} > 
      <div className="d-flex flex-column justify-content-center align-items-center"  ><h1 className="align-items-center text-uppercase" > {serviceType} </h1>
       <p className="fs-5" > This Page Is under construction </p>  </div>
   </div> </>)    }

   if(serviceType == "realestate" ) {
    return ( <> <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}} > 
      <div className="d-flex flex-column justify-content-center align-items-center"  ><h1 className="align-items-center text-uppercase" > {serviceType} </h1>
       <p className="fs-5" > This Page Is under construction </p>  </div>
   </div> </>)    }

   if(serviceType == "importexport" ) {
    return ( <> <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}} > 
      <div className="d-flex flex-column justify-content-center align-items-center"  ><h1 className="align-items-center text-uppercase" > {serviceType} </h1>
       <p className="fs-5" > This Page Is under construction </p>  </div>
   </div> </>)    }

   if(serviceType == "education" ) {
    return ( <> <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}} > 
   <div className="d-flex flex-column justify-content-center align-items-center"  ><h1 className="align-items-center text-uppercase" > {serviceType} </h1>
    <p className="fs-5" > This Page Is under construction </p>  </div>
</div> </>) 
     }
}

export default ServiceType;
