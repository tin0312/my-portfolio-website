import React from "react";
import * as Images from "../images";
import { ProgressBar } from "react-bootstrap";

export default function About() {
  const JavaScript = 90;
  const html = 95;
  const css = 90;
  const react = 85;
  const bootstrap = 85;
  const mySQL = 80;
  const Python = 80;
  const Flask = 70;
  const jQuery = 70;
  const Firebase = 70;
  const Git = 80;
  const Figma = 90
  return (
    <div className="about-container">
      <div className="skill-introduction-container">
        <h1 className="skill-header">My skills</h1>
        <p className="skill-introduction">
          I possess a versatile skill set in web development, encompassing
          React, JavaScript, HTML, and CSS to create compelling user interfaces.
          My expertise extends to database management using MySQL and Firebase,
          enabling robust data-driven applications. Furthermore, I have
          proficiency in server-side programming with Python and Flask, as well
          as a knack for enhancing user experiences with jQuery.
        </p>
      </div>

      <div className="skill-set-container">
        <div className="skill-set-container-one">
          <div className="progress-container">
            <img className="technology-icon" src={Images.js} alt="js-icon" />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={JavaScript}
              label={`${JavaScript}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container">
            <img
              className="technology-icon"
              src={Images.html}
              alt="html-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={html}
              label={`${html}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container">
            <img className="technology-icon" src={Images.css} alt="css-icon" />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={css}
              label={`${css}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container">
            <img
              className="technology-icon"
              src={Images.bootstrap}
              alt="bootstrap-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={bootstrap}
              label={`${bootstrap}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container">
            <img
              className="technology-icon"
              src={Images.react}
              alt="react-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={react}
              label={`${react}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container">
            <img
              className="technology-icon"
              src={Images.mySQL}
              alt="mySQL-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={mySQL}
              label={`${mySQL}%`}
              visuallyHidden
            />
          </div>
        </div>
        {/* skill-set-container-two section */}
        <div className="skill-set-container-two">
        <div className="progress-container two">
            <img
              className="technology-icon"
              src={Images.git}
              alt="git-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={Git}
              label={`${Git}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container two">
            <img
              className="technology-icon"
              src={Images.firebase}
              alt="firebase-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={Firebase}
              label={`${Firebase}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container two">
            <img
              className="technology-icon"
              src={Images.jQuery}
              alt="jQuery-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={jQuery}
              label={`${jQuery}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container two">
            <img
              className="technology-icon"
              src={Images.python}
              alt="python-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={Python}
              label={`${Python}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container two">
            <img
              className="technology-icon"
              src={Images.flask}
              alt="flask-icon"
            />
            <ProgressBar
              className="progress-bar"
              id = "flask"
              variant="success"
              animated
              now={Flask}
              label={`${Flask}%`}
              visuallyHidden
            />
          </div>
          <div className="progress-container two">
            <img
              className="technology-icon"
              src={Images.figma}
              alt="figma-icon"
            />
            <ProgressBar
              className="progress-bar"
              variant="success"
              animated
              now={Figma}
              label={`${Figma}%`}
              visuallyHidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
