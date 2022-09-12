import React from "react";

import image from '../../images/office.png'
import logo from '../../images/logo.png'
import Button from '../../Components/Button'


import './Homepage.scss'

function Homepage() {
  return (
    <div className="home-page">
    <div className="home-content">
    <img src={logo} alt="logo" className="logo" />
    <h1 className="title">Optmizing Your Business Starts Here</h1>
    <p></p>
    <div className="home-btn">
    <Button content='Find Out More' />
    </div>
    </div>
      <div className="home-image" style={{ backgroundImage: `url(${image})`}} />
    </div>
  );
}

export default Homepage;
