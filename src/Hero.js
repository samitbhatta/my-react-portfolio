import React from 'react';
import './Hero.css';
import Heroimg from './assets/hero.png';

function Hero() {
  return (
    <div className="heroSection">
      <div className="hero-items">
        <div className="intro">
          <p className="Im-text">
            Hello,I'm <span className="name">Samit Bhatta</span>
          </p>
          <h2 className="job-title">Frontend Developer 🎯 </h2>
          <p className="description">
            Knack of building resposive website with front end operations
          </p>
          <button className="hire-me">Hire me</button>
          <button className="resume">Get Resume</button>
        </div>
        <div className="profile ">
          <img
            className="img-fluid custom-img"
            src={Heroimg}
            alt="a man standing"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
