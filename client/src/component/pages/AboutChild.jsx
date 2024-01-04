import React from 'react'
import img from '../img/about1.webp'
import { useNavigate } from 'react-router-dom'
import Heading from './Heading'

const AboutChild = () => {
    const navigate = useNavigate()

  return (
    <div className='container'>
    <div className='row mb-5'>
    

      <div className='col-12 col-md-6 col-xxl-6 col-lg-6 '>

       <figure>
        <img src={img} alt='about' className='img-fluid' />
       </figure>
      </div>
      <div className='col-12 col-md-6 col-xxl-6 col-lg-6'>
        <h2>No Project is Too Big or Small</h2>
        <p class='text-green'>From large-scale projects to small custom pieces, we handle every project with care and respect. If it matters to you, it matters to us!</p>
     
        <button className='btn btn-outline-primary' onClick={() => navigate('/OurWork')}  style={{padding:"1rem 2.5rem"}}>
         Our Work</button> </div>
    
    </div>
  </div>
  )
}

export default AboutChild