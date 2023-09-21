import React from "react";
import * as Images from "../images";
export default function Projects() {
  return (
    <div className="project-page">
      <h1 className="project-header">Project</h1>
      <div className="project-container">
        <div className="project-section">
          <div className="image-container">
          <img
            src={Images.weatherThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="middle">
            <div className="text">
             <a href = "https://clinquant-marshmallow-2752bd.netlify.app/" target="_blank" rel="noopener noreferrer">View live</a>
             <a href="https://github.com/tin0312/weather-app">View source</a>
            </div>
          </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">WEATHER APP</h3>
            <h4 className="project-stacks">HTML • CSS • React • API </h4>
          </div>
        </div>
        {/* project section-2 */}
        <div className="project-section">
          <div className="image-container">
          <img
            src={Images.quizThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="middle">
            <div className="text">
             <a href = "https://unrivaled-sorbet-b6c280.netlify.app/" target="_blank" rel="noopener noreferrer">View live</a>
             <a href="https://github.com/tin0312/quizApp">View source</a>
            </div>
          </div>
          </div>
          <div className="project-content">
            <h3 className="project-title"> QUIZZICAL</h3>
            <h4 className="project-stacks">HTML • CSS • React • API </h4>
          </div>
        </div>

        {/* Project section-3 */}
        <div className="project-section">
          <div className="image-container">
          <img
            src={Images.roomsystemThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="middle">
            <div className="text">
             <a href = "http://roomreservation.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">View live</a>
             <a href="https://github.com/tin0312/roomBookingSystem">View source</a>
            </div>
          </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">ROOM BOOKING SYSTEM</h3>
            <h4 className="project-stacks">
              HTML • CSS • Bootstrap • Flask • mySQL • Python{" "}
            </h4>
          </div>
        </div>

        {/* Project section-4 */}
        <div className="project-section">
          <div className="image-container">
          <img
            src={Images.chromeExtThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="middle">
            <div className="text">
             <a href = "https://github.com/tin0312/walk-more-than-you-scroll" target="_blank" rel="noopener noreferrer">View source</a>
            </div>
          </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Walk-As-You-Scroll</h3>
            <h4 className="project-stacks">
              HTML • CSS • Javascript • jQuery{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
