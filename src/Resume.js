import React, { useState } from 'react';
import Education from './Resume/Education';
import Work from './Resume/Work';
import Programming from './Resume/Programming';
import Projects from './Resume/Projects';
import './Resume.css';

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [work, setWork] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [projects, setProjects] = useState(false);

  const allFalse = () => {
    setEducation(false);
    setWork(false);
    setProgramming(false);
    setProjects(false);
  };
  const handleClick = (setTrue, value) => {
    allFalse();
    setTrue(value);
  };
  return (
    <div className="Resume-section d-flex flex-column">
      <h1 className="Resume-title">Resume</h1>
      <span className="my-formal-bio">My formal Bio Details</span>
      <div
        className="resume-new-section row d-flex"
        style={{ width: '70%', marginInline: 'auto', height: '400px' }}
      >
        <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-5 shadow-lg flex-row">
          <div className="d-flex flex-column bg-new text-white ">
            <span className="icons">
              <i class="fa-solid fa-graduation-cap fa-2x"></i>
            </span>
            <span className="icons">
              <i class="fa-solid fa-briefcase fa-2x"></i>
            </span>
            <span className="icons">
              <i class="fa-solid fa-file-code fa-shake fa-2x"></i>
            </span>
            <span className="icons">
              <i class="fa-solid fa-rocket fa-bounce fa-2x"></i>
            </span>
          </div>
          <div className="d-flex flex-column">
            <span
              className={
                education === false
                  ? 'resume-options '
                  : ' selected resume-options '
              }
              onClick={() => handleClick(setEducation, true)}
            >
              Education
            </span>
            <span
              className={
                work === false ? 'resume-options ' : ' selected resume-options '
              }
              onClick={() => handleClick(setWork, true)}
            >
              Work
            </span>
            <span
              className={
                programming === false
                  ? 'resume-options '
                  : ' selected resume-options '
              }
              onClick={() => handleClick(setProgramming, true)}
            >
              Programming
            </span>
            <span
              className={
                projects === false
                  ? 'resume-options '
                  : ' selected resume-options '
              }
              onClick={() => handleClick(setProjects, true)}
            >
              Projects
            </span>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section ">
          {education === true && <Education />}
          {work === true && <Work />}
          {programming === true && <Programming />}
          {projects === true && <Projects />}
        </div>
      </div>
    </div>
  );
};

export default Resume;
