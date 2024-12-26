import React from "react";
import CommonHero from "./components/CommonHero";
import data from "./db.json"


function Blogs() {
  return (
    <div
      className="page-title aos-init position-relative aos-animate"
      data-aos="fade"
    >
      <CommonHero
        title="Blogs"
        description="Where knowledge meets inspiration.

"
        clsnm="blog_container"
      />
      <section id="services" className="services section py-5 bg-primary">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-white">Blogs</h2>
          
          <p className="text-white">
          Words that spark ideas and fuel your journey.
          </p>
        </div>

        <div className="container">
          <div className="row py-5 gy-4">
            {data.blogData.map((blog) => (
              <div
                key={blog.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={blog.delay}
              >
                <div className="card">
                  <div className="card-img p-1">
                    <img   src={require (`${blog.img}`)} 
                   
                    alt={blog.title} className="img-fluid rounded" />
                  </div>
                  <div className="px-4">
                  <div className="d-flex justify-content-between" >
                  <span className=" fs-6" >  {blog.data}</span>
                  <h6  className="fst-italic fw-light fs-6" >{blog.time}</h6> </div>
                
                    <h3 style={{minHeight:"70px", overflowY:"auto",height:"70px"}}>
                      <a href={blog.title} className="stretched-link text-decoration-none text-primary">
                        {blog.title}
                      </a>
                    </h3>
                    <p className="m-0 limit_text"   >{blog.description}</p>
                  </div>
                  <p className="text-end px-4 fst-italic">- {blog.author} </p>
                  <button type="button" className="btn btn-primary m-4">Read More...</button>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
