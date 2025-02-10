import React from 'react';
import logo from '../background/final.png';

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a href="/">
        <img src={logo} alt="Salon Logo" style={{height:'50px',width:'auto'}}/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link  text" href="/">Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text" href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text" href="/">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="/">Book Appointment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="/">Log In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
