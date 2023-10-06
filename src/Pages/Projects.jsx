import React from "react";
import * as Images from "../images";
import { Container, Row, Col } from "react-bootstrap";
export default function Projects() {
  return (
    <Container fluid className="project-page">
      <Row className="project-header mb-5">My Work</Row>
      {/* project section-1 */}
      <Row className="project-container">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Weather App</h3>
          <p className="project-description">
            A weather app to help you update with weather conditions
          </p>
          <ul className="project-stacks">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>API</li>
          </ul>
          <div className="work-links">
            <a
              href="https://clinquant-marshmallow-2752bd.netlify.app/"
              className="link-text"
            >
              Visit site <span>&rarr;</span>
            </a>
            <a href="https://github.com/tin0312/weather-app">
              <img
                src={Images.githubIcon}
                alt="github-icon"
                className="work-code"
              />
            </a>
          </div>
        </Col>

        <Col xs={12} lg={8} className="image-container pr-0 pl-0">
          <img
            src={Images.weatherThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>
      {/* Project Section-2 */}
      <Row className="project-container">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Quizzical</h3>
          <p className="project-description">
            A quiz app to help you leverage your knowledge in various areas
          </p>
          <ul className="project-stacks">
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>API</li>
          </ul>
          <div className="work-links">
            <a
              href="https://unrivaled-sorbet-b6c280.netlify.app/"
              className="link-text"
            >
              Visit site <span>&rarr;</span>
            </a>
            <a href="https://github.com/tin0312/quizApp">
              <img
                src={Images.githubIcon}
                alt="github-icon"
                className="work-code"
              />
            </a>
          </div>
        </Col>
        <Col xs={12} lg={8} className="image-container pr-0 pl-0">
          <img
            src={Images.quizThumbNail}
            alt="quiz-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>

      {/* Project Section-3 */}
      <Row className="project-container">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Room Booking System</h3>
          <p className="project-description">
            An online room booking system to help you reserve your study room with various options 
          </p>
          <ul className="project-stacks">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Flask</li>
            <li>mySQL</li>
            <li>Python</li>
          </ul>
          <div className="work-links">
            <a
              href="http://roomreservation.pythonanywhere.com/"
              className="link-text"
            >
              Visit site <span>&rarr;</span>
            </a>
            <a href="https://github.com/tin0312/roomBookingSystem">
              <img
                 src={Images.githubIcon}
                alt="github-icon"
                className="work-code"
              />
            </a>
          </div>
        </Col>
        <Col xs={12} lg={8} className="image-container pr-0 pl-0">
          <img
            src={Images.roomsystemThumbNail}
            alt="room-system-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>

      {/* Project Section-4 */}
      <Row className="project-container">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Walk-As-You-Scroll</h3>
          <p className="project-description">
           A chrome extension to help you track screen time and improve overal health
          </p>
          <ul className="project-stacks">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
          </ul>
          <div className="work-links">
            <a
              href="https://github.com/tin0312/walk-more-than-you-scroll"
              className="link-text"
            >
              View source <span>&rarr;</span>
            </a>
          </div>
        </Col>
        <Col xs={12} lg={8} className="image-container pr-0 pl-0">
          <img
            src={Images.chromeExtThumbNail}
            alt="chrome-extension-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>

      {/* Project Section-5 */}
      <Row className="project-container">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Password Generator</h3>
          <p className="project-description">
            A password generator app to help you pick a secure password of choice
          </p>
          <ul className="project-stacks">
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <div className="work-links">
            <a
              href="https://dynamic-platypus-74b5b2.netlify.app/"
              className="link-text"
            >
              Visit site <span>&rarr;</span>
            </a>
            <a href="https://github.com/tin0312/password-generator">
              <img
                src={Images.githubIcon}
                alt="github-icon"
                className="work-code"
              />
            </a>
          </div>
        </Col>
        <Col xs={12} lg={8} className="image-container pr-0 pl-0">
          <img
            src={Images.pwAppThumbnail}
            alt="password-app-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>
    </Container>
  );
}
