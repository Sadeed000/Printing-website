import React from 'react'

const CImage = (props) => {
  return (
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-12 '>
      <img src={props.img} alt='' className='component_image' />
      <div className='component_text text-center'>
        <h2>{props.heading}</h2>
        <h1>{props.text}</h1>
      </div>
      </div>
    </div>
  </div>  )
}

export default CImage