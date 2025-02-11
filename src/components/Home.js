import React from "react";
import logo from "../background/final.png";
import cra1 from "../background/slide-1.jpg";
import cra2 from "../background/slide-2.jpg";
import cra3 from "../background/slide-3.jpg";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a href="/">
            <img
              src={logo}
              alt="Salon Logo"
              style={{ height: "50px", width: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link  text" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text" href="/">
                  Book Appointment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text" href="/">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={cra1}
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            {/* <div class="carousel-caption d-none d-md-block text-start start-0 ps-5" stlye={{}}> */}
            <div class="carousel-caption d-none d-md-block text-start" style={{ top: '50px', left: '20%' }}>
              <div class="slider_content">
                <h3>Its Not Just a Haircut, Its an Experience.</h3>
                <h1>Being a barber is about <br/>taking care of the people.</h1>
                <p>Our barbershop is the territory created purely for males who appreciate<br/> premium quality,
                    time and flawless look.</p>
                <a href="/" className="btn btn-md btn-map" role="button" aria-pressed="true">Make Appointment</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cra2}
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            {/* <div class="carousel-caption d-none d-md-block text-start start-0 ps-5 "> */}
            <div class="carousel-caption d-none d-md-block text-start" style={{ top: '50px', left: '20%' }}>
              <div class="slider_content">
                <h3>Classic Hair Style & Shaves.</h3>
                <h1>Our hair styles<br/>enhances your smile.</h1>
                <p>Our barbershop is the territory created purely for males who appreciate<br/> premium quality,
                    time and flawless look.</p>
                {/* <button type="button" class="btn btn-map" href="logo.com"></button> */}
                <a href="/" className="btn btn-md btn-map" role="button" aria-pressed="true">Make Appointment</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cra3}
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            {/* <div class="carousel-caption d-none d-md-block text-start start-0 ps-5"> */}
            <div class="carousel-caption d-none d-md-block text-start" style={{ top: '50px', left: '20%' }}>
              <div class="slider_content">
                <h3>Its Not Just a Haircut, Its an Experience.</h3>
                <h1>Where mens want <br/>to look there very best.</h1>
                <p>Our barbershop is the territory created purely for males who appreciate<br/> premium quality,
                    time and flawless look.</p>
                <a href="/" className="btn btn-md btn-map" role="button" aria-pressed="true">Make Appointment</a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{ left: '5%' }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{ right: '5%' }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
