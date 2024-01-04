import React from "react";
import s1 from "../img/s1.webp";
import Services from "./Services";
import { Link } from "react-router-dom";
const Common = (props) => {
  return (
     <div className="col-4 col-12 col-md-6 col-xxl-4 col-lg-6 mr-auto">
     <Link to= "/Services">
      <div class="card text-bg-dark service_image" style={{ border: "none" }}>
      <figure>
      <img src={props.img} class= "service_img card-img " alt="..." style={{ opacity: ".4" }} />

      </figure>
        <div class="card-img-overlay text-center text-light">
          <h5 class="card-title text-primary">{props.Services} </h5>
          <p class="card-text">{props.text}</p>
          <p class="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Common;
