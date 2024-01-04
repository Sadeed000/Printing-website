import React from 'react'
import Heading from './Heading'

const CusomerSatisfaction = () => {
  return (
    <div className='container'>
      <div className='row my-5'>
      <Heading  text={'customer satisfaction'}/>
        <div className=' d-flex flex-wrap justify-content-around '>
        <div className='col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6 mb-3'>
        We provide quality service by keeping a clean working environment, strongly focusing on attention to detail, offering delivery and shipping, and guaranteeing our customers’ satisfaction.
        </div>

        <div className='col-3 col-12 col-md-6 col-xxl-3 col-lg-6 mb-3' >
        We provide quality service by keeping a clean working environment, strongly focusing on attention to detail, offering delivery and shipping, and guaranteeing our customers’ satisfaction.
        </div>

        <div className='col-3 col-lg-6 col-12 col-xxl-3 mb-3'>
        We provide quality service by keeping a clean working environment, strongly focusing on attention to detail, offering delivery and shipping, and guaranteeing our customers’ satisfaction.
        </div>
        </div>
     

      </div>
   </div>
  )
}

export default CusomerSatisfaction