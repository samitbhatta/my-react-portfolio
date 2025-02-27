import React from 'react';
import './AboutMe.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutMe = () => {
  return (
    <div className="about-me-section aboutme-inside" id="AboutMe">
      <div className="d-flex flex-column">
        <h1 className="about-me-text">About me</h1>
        <span className="why-text">Why choose me?</span>
        <div className="row justify-content-center shadow-lg my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <DotLottieReact
              src="https://lottie.host/25481570-2f76-4390-b12a-70aabf03001e/hVLLakoHBp.lottie"
              loop
              autoplay
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
            <span className="some-text-abot-me">
              Frontend Developer with expertise in HTML, CSS, and JavaScript.
              Basic knowledge of SEO principles and a focus on creating
              responsive, user-friendly interfaces. Eager to contribute and grow
              within a dynamic organization.
            </span>
            <div className="highlights">
              <span className="few-text">Here are a few highlights:</span>
              <ul className="list">
                <li>
                  Proficient in HTML, CSS, and JavaScript for dynamic web
                  development
                </li>
                <li>
                  Skilled in responsive web design for cross-device
                  compatibility
                </li>
                <li>
                  Focused on creating user-friendly, accessible interfaces
                </li>
                <li>
                  Basic SEO knowledge for improved search engine optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
