import React from 'react'
import img1 from '../img/p4.jpg'
import img2 from '../img/p2.jpg'
import img3 from '../img/p3.webp'
import b1 from '../img/b1.jpg'

import Services from './Services'
import Quote from './Quote'
import { useNavigate } from 'react-router-dom'
import About from './About'
import Heading from './Heading'
import Common from './Common'
import CusomerSatisfaction from './CusomerSatisfaction'
import Review from './Review'
import Footer from './Footer'
import AboutChild from './AboutChild'
import ServicesChild from './ServicesChild'

const Home = () => {
  const navigate =useNavigate()
  return (
    <div className='container-fluid'>
    <div className='row'>
   <div className='col-12' >

     <div id="carouselExampleCaptions" className="carousel slide carousel-fade  slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner"  >
    <div className="carousel-item active" >
      <img src={img1} className="d-block w-100 img-fluid" alt={img1}  />
      <div className="carousel-caption d-md-block ">
      <h1> Your trusted printer of choice since 1970</h1>
      <p>We’re a printing company that cares. As a local, woman-owned business in Warsaw, Indiana, we’re dedicated to providing our customers with the highest quality products and services, from printing to design and everything in between.</p>
           <button className='btn btn-success' onClick={() => navigate('/Quote')}  style={{padding:".6rem 2rem",margin:'.6rem 2rem'}}>
           request a quote</button>
           <button className='btn btn-outline-primary' onClick={() => navigate('/Services')}  style={{padding:"1rem 2.5rem"}}>
           services</button>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block ">
      <h1> Your trusted printer of choice since 1970</h1>
      <p>We’re a printing company that cares. As a local, woman-owned business in Warsaw, Indiana, we’re dedicated to providing our customers with the highest quality products and services, from printing to design and everything in between.</p>
           <button className='btn btn-success' onClick={() => navigate('/Quote')}  style={{padding:".6rem 2rem",margin:'.6rem 2rem'}}>
           request a quote</button>
           <button className='btn btn-outline-primary' onClick={() => navigate('/Services')}  style={{padding:"1rem 2.5rem"}}>
           services</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block ">
      <h1> Your trusted printer of choice since 1970</h1>
      <p>We’re a printing company that cares. As a local, woman-owned business in Warsaw, Indiana, we’re dedicated to providing our customers with the highest quality products and services, from printing to design and everything in between.</p>
           <button className='btn btn-success' onClick={() => navigate('/Quote')}  style={{padding:".6rem 2rem",margin:'.6rem 2rem'}}>
           request a quote</button>
           <button className='btn btn-outline-primary' onClick={() => navigate('/Services')}  style={{padding:"1rem 2.5rem"}}>
           services</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>
    </div>
  <Heading text ={'About Us'}/>
    <AboutChild />
    <ServicesChild />
    <CusomerSatisfaction />

    <div className='container-fluid'>
      <div className='row'>
        <div className='col my-5'>
          {/* <img src={b1} alt='' className='img-fluid banner-img ' style={{height:"17rem"}}> */}
          {/* </img> */}
          <div className='banner_img'>
          <h1 className='my-auto'>the customer service, from concept to execution of multipart project was exceptiona. Every deadline was met Extraordinary services</h1>
         </div>
     </div>
      </div>
    </div>

    <Review />
   </div>
  )
}

export default Home