import React from 'react'

const Heading = (props) => {
  return (
    <div className='main-heading my-5'>
    <div className='text-center'>
      <h1 className='dis'>{props.text} </h1>
      <hr className='w-25 mx-auto' />
    </div>
  </div>  )
}

export default Heading