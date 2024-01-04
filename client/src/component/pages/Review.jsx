import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import review from "../img/service1.jpg";
import service2 from "../img/service2.webp";
import service3 from "../img/service3.webp";
import Heading from "./Heading";


const Review = () => {
  return (
    
   <div className="">
   <Heading text={'what customer say'} />
     <div className="container-fluid "
      id="carouselExampleIndicators"
      class="carousel car_colour slide py-5 d-flex justifiy-content-center align-item-center"
    
    >
    <Heading />
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner d-flex ">
        <div class="carousel-item active">
          <div className="container-fluid">
            <div className="row px-5 ">
            <div className="d-flex justify-content-between align-item-center ">
            <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6 " style={{marginRight:'7rem'}}>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem',}}>
                  <img class="card-img-top" src={review} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem'  }}>
                  <img class="card-img-top" src={service2} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem'  }}>
                  <img class="card-img-top" src={service3} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         </div>
        </div>

        <div class="carousel-item">
        <div className="container-fluid">
            <div className="row px-5 ">
            <div className="d-flex justify-content-between align-item-center ">
            <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6 " style={{marginRight:'7rem'}}>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem',}}>
                  <img class="card-img-top" src={review} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem'  }}>
                  <img class="card-img-top" src={service2} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem'  }}>
                  <img class="card-img-top" src={service3} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         </div>
        </div>

        <div class="carousel-item">
         <div className="container-fluid">
            <div className="row px-5 ">
            <div className="d-flex justify-content-between align-item-center ">
            <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6 " style={{marginRight:'7rem'}}>
              <div class="d-flex justify-content-center align-items-center ">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem',}}>
                  <img class="card-img-top" src={review} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem'  }}>
                  <img class="card-img-top" src={service2} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 col-md-6 col-12 col-md-6 col-xxl-3 col-lg-6">
                <div class="card" style={{ width: "17rem", height: "26rem",padding:'.6rem'  }}>
                  <img class="card-img-top" src={service3} alt="Card image cap" />
                  <div class="card-body card_review">
                    <h5 class="card-title">jamie mill </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                    <br></br>
                    <div className="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span class="visually-hidden ">Previous</span>
      </button>
      <button
        class="carousel-control-next "
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span class="visually-hidden ">Next</span>
      </button>
    </div>
   </div>
  );
};

export default Review;
