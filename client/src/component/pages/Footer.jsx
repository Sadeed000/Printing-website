import React from "react";
import Heading from "./Heading";
import logo1 from '../img/logo1.jpg'
import logo2 from '../img/logo2.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className="container-fluid footer">
      <div className="row  footer ">
        <div className=" footer d-flex justify-content-around align-item-center text-center flex-wrap flex-direction-column" style={{height:'27rem'}}>
        <div className="col-12 col-md-12 col-xxl-4 col-lg-6 mb-3">
            <h3>Contact</h3>
            <p>
              Bartel Printing Company, Inc. 310 Cedar Street Warsaw, IN 46580
              Phone: (574) 267-7421 Hours: M-F 7 a.m - 4 p.m.
            </p>
        </div>
        <div className="col-12 col-md-12 col-xxl-4  col-lg-6 mb-3">
          <h3>Sitemap</h3>
          <p  className="cursor-pointer" style={{cursor:'pointer'}} onClick={() => navigate('/about')}>About </p>
          <p className="cursor-pointer" style={{cursor:'pointer'}} onClick={() => navigate('/services')}>Services  </p>
          <p className="cursor-pointer" style={{cursor:'pointer'}} onClick={() => navigate('/ourwork')}>Our Work </p>
          <p className="cursor-pointer" style={{cursor:'pointer'}} onClick={() => navigate('/quote')}>request Quote </p>
     

        </div>
        {/* <div className="col-12 col-md-12 col-xxl-4  col-lg-6 mb-3">
        <h3>veified</h3>
       <img src={logo1} alt='' width="150" height='60' />
       <img src={logo2} alt='' width="150" height='60' />
        
      </div> */}
        </div>
        <hr></hr>
      <div className="down d-flex justify-content-between">
        <p>© 2023 shadeed Printing. All Rights Reserved</p>
        <div className="">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram p-3"></i>
        <i class="bi bi-twitter"></i>
        </div>
              </div>
      </div>
     
    
    </div>
  );
};

export default Footer;
