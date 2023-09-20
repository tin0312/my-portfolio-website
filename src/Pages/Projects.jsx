import React from "react";
import * as Images from "../images";
export default function Projects() {
  return (
    <div className="project-page">
      <h1 className="project-header">Project</h1>
      <div className="project-container">
        <div className="project-section">
          <img
            src={Images.weatherThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="project-content">
            <h3 className="project-title">WEATHER APP</h3>
            <h4 className="project-stacks">HTML • CSS • React • API </h4>
          </div>
        </div>
        {/* project section-2 */}
        <div className="project-section">
          <img
            src={Images.quizThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="project-content">
            <h3 className="project-title"> QUIZZICAL</h3>
            <h4 className="project-stacks">HTML • CSS • React • API </h4>
          </div>
        </div>

        {/* Project section-3 */}
        <div className="project-section">
          <img
            src={Images.roomsystemThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="project-content">
            <h3 className="project-title">ROOM BOOKING SYSTEM</h3>
            <h4 className="project-stacks">
              HTML • CSS • Bootstrap • Flask • mySQL • Python{" "}
            </h4>
          </div>
        </div>

        {/* Project section-4 */}
        <div className="project-section">
          <img
            src={Images.chromeExtThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="project-content">
            <h3 className="project-title">Walk-As-You-Scroll</h3>
            <h4 className="project-stacks">
              HTML • CSS • Javascript • jQuery{" "}
            </h4>
          </div>
        </div>

        {/* <div className="project-section">
          <img
            src={Images.weatherThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
          <div className="project-content">
            <h3 className="project-title">WEATHER APP</h3>
            <h4 className="project-stacks">HTML • CSS • React • API </h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}
