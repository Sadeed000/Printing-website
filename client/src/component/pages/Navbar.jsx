import React from "react";
import { NavLink,Link } from "react-router-dom";
import img from '../img/R.png'
const Navbar = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-light navlinks ">
      <div className="container-fluid navlinks">
        <NavLink to='/' className="navbar-brand" href="#">
          <img src= {img} width='100' alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation" style={{background:"white"}}
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink to='/' className="nav-link  text-light" aria-current="page" href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link text-light"  href="#">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/ourwork' className="nav-link text-light" href="#">
                ourwork
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/quote' className="nav-link text-light" href="#">
                Request Quote
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              to='/services'
                className="nav-link  text-light"
                href="#"
                tabindex="-1"
              >
                Services
              </NavLink>
              
            </li>

            <li className="nav-item">
              <NavLink
              to='/contact'
                className="nav-link  text-light"
                href="#"
                tabindex="-1"
              >
                contact
              </NavLink>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
