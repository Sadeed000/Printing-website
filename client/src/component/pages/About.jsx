import React from 'react'
import img from '../img/about1.webp'
import { useNavigate } from 'react-router-dom'
import OurWork from './OurWork'
import Heading from './Heading'
import c3 from '../img/c3.webp'
import CImage from './CImage'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className='container-fluid'>
      <div className='row mb-5'>
      <CImage  heading={"about us"}
    img={c3}
    text ={'About Bartel Printing Company, Inc.Our story'}
   /> 
   </div>
   <div className='container'>
  <div className='row'>
  <div className='col'>
  <p >Since 1970, Bartel Printing Company, Inc. has been caring for its customers in Warsaw, Indiana. With the promise of a job in the printing industry, Founder Wilmer Bartel set out on a journey from Canada with only his family and a few dollars. Upon his arrival to the US, he discovered that his job had been given to someone else—leaving him to fend for himself. Not getting discouraged, Wilmer found work at Truman Printing in Warsaw. After a few years, he bought out the company, determined to rebrand the business with an emphasis on quality and customer service. This company, which first opened its doors in the back of a pizza shop, became known as <small>Bartel Printing Company</small>, Inc.</p>
  <p className='my-5'>Second-generation and current owners, Murray and Penny Bartel, took over the operation more th 20 years ago and have grown it into a thriving enterprise. In a little over 50 years, a lot has changed at Bartel. The company now operates out of a newly-renovated building on Cedar Street, with an extremely clean working environment and state-of-the-art equipment. But in all that time, one thing has stayed the same: Bartel still prioritizes quality work and top-notch customer service.</p>
  <p>The Bartels have found their niche in the printing business, catering not only to the orthopedic industry by printing and shipping their products all over the world, but also to the general public and local businesses. If you have any questions or would like to visit our facility in Warsaw, give us a call. We look forward to working with you and making your project a reality!
</p>
 </div>
   </div>

   <div className='container'>
    <div className='row'>
    <Heading text={'About US'} />

      <div className='col-12 col-md-5 col-xxl-6 col-lg-6 '>

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
  

       
      </div>
    </div>
  )
}

export default About