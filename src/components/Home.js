import React from "react";
import logo from "../background/final.png";
import cra1 from "../background/slide-1.jpg";
import cra2 from "../background/slide-2.jpg";
import cra3 from "../background/slide-3.jpg";
import ab1 from "../background/about-1.jpg";
import ab2 from "../background/about-2.jpg";
import ab3 from "../background/about-3.jpg";
import ab4 from "../background/about-logo.png";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a href="/">
            <img
              src={logo}
              alt="Salon Logo" ClassName="navbar-logo"
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
            {/* <div className="carousel-caption d-none d-md-block text-start start-0 ps-5" stlye={{}}> */}
            <div
              className="carousel-caption d-none d-md-block text-start"
              style={{ top: "50px", left: "20%" }}
            >
              <div className="slider_content">
                <h3>Its Not Just a Haircut, Its an Experience.</h3>
                <h1>
                  Being a barber is about <br />
                  taking care of the people.
                </h1>
                <p>
                  Our barbershop is the territory created purely for males who
                  appreciate
                  <br /> premium quality, time and flawless look.
                </p>
                <a
                  href="/"
                  className="btn btn-md btn-map"
                  role="button"
                  aria-pressed="true"
                >
                  Make Appointment
                </a>
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
            {/* <div className="carousel-caption d-none d-md-block text-start start-0 ps-5 "> */}
            <div
              className="carousel-caption d-none d-md-block text-start"
              style={{ top: "50px", left: "20%" }}
            >
              <div className="slider_content">
                <h3>Classic Hair Style & Shaves.</h3>
                <h1>
                  Our hair styles
                  <br />
                  enhances your smile.
                </h1>
                <p>
                  Our barbershop is the territory created purely for males who
                  appreciate
                  <br /> premium quality, time and flawless look.
                </p>
                {/* <button type="button" className="btn btn-map" href="logo.com"></button> */}
                <a
                  href="/"
                  className="btn btn-md btn-map"
                  role="button"
                  aria-pressed="true"
                >
                  Make Appointment
                </a>
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
            {/* <div className="carousel-caption d-none d-md-block text-start start-0 ps-5"> */}
            <div
              className="carousel-caption d-none d-md-block text-start"
              style={{ top: "50px", left: "20%" }}
            >
              <div className="slider_content">
                <h3>Its Not Just a Haircut, Its an Experience.</h3>
                <h1>
                  Where mens want <br />
                  to look there very best.
                </h1>
                <p>
                  Our barbershop is the territory created purely for males who
                  appreciate
                  <br /> premium quality, time and flawless look.
                </p>
                <a
                  href="/"
                  className="btn btn-md btn-map"
                  role="button"
                  aria-pressed="true"
                >
                  Make Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{ left: "5%" }}
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
          style={{ right: "5%" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section id="about" className="about_section bd-bottom padding my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_content">
                <h3 className="Introducing">
                  Introducing
                </h3>
                <h2 className="Astar">
                  Astar Unisex Salon
                  <br />
                  Since 2022
                </h2>
                <img
                  className="bl"
                  src={ab4}
                  alt="logo"
                  style={{
                    height: "200px",
                    width: "auto",
                    display: "block",
                    margin: "0 auto 20px ",
                  }}
                />
                <p className="wow fadeInUp" >
                  Barber is a person whose occupation is mainly to cut dress
                  groom style and shave men's and boys' hair. A barber's place
                  of work is known as a "barbershop" or a "barber's".
                  Barbershops are also places of social interaction and public
                  discourse. In some instances, barbershops are also public
                  forums.
                </p>
                <a
                  href="/"
                  className="btn btn-md btn-map betn-about"
                  role="button"
                  aria-pressed="true"
                  style={{
                    display: "block",
                    textAlign: "center",
                    margin: "0 auto 10px",
                    width: "fit-content",
                  }}
                >
                  More About Us
                </a>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="about_img">
                <img src={ab1} alt="idea-images" className="about_img_1 " />
                <img src={ab2} alt="idea-images" className="about_img_2 " />
                <img src={ab3} alt="idea-images" className="about_img_3 " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
