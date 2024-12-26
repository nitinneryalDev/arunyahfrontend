import React from 'react'

function SubsectionHero({title , description , Classdata}) {
  return (   
       <div className={`${Classdata} container-fluid  text-center p-5`} >
    <div className="row p-5 align-items-start">
      <div className="col text-white">
        <h2>{title}</h2>
        <p>
         {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default SubsectionHero