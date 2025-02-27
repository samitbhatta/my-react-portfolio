import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar d-flex align-items-center">
        <span className="brand-name">Samit</span>
        <ul className="nav-links d-flex ms-auto">
          <li>
            <a href="/" className=" mx-4 nav-item ">
              Home
            </a>
          </li>
          <li>
            <a href="#AboutMe" className=" mx-4 nav-item">
              About me
            </a>
          </li>
          <li>
            <a href="/" className=" mx-4 nav-item">
              Resume
            </a>
          </li>
          <li>
            <a href="/" className=" mx-4 nav-item">
              Testimonial
            </a>
          </li>
          <li>
            <a href="/" className="mx-4 nav-item">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
