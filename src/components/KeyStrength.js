import React from 'react'

function KeyStrength({ title, text, date }) {
  return (
    <div className="col-12 col-sm-4 col-md-6 d-flex">
    <div className="card text-start w-100 d-flex flex-column">
      <div className="card-header bg-primary fs-4 text text-light text-start"><i className="bi bi-check2-circle"></i> {title}</div>
      <div className="card-body flex-grow-1 d-flex flex-column">
        <p className="card-text">{text}</p>
      </div>
    </div>
  </div>
  )
}

export default KeyStrength