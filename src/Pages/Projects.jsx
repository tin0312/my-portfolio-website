import React from "react";
import * as Images from "../images";
import { Container, Row, Col } from "react-bootstrap";
export default function Projects() {
  const backToTop = document.querySelector(".back-to-top");
  const [isBackToTop, setIsBackToTop] = React.useState(false);

  // Conditionally render the button
  function renderToTopButton(isBackToTop) {
    if (backToTop) {
      backToTop.style.visibility = isBackToTop ? "visible" : "hidden";
      backToTop.style.opacity = isBackToTop ? "1" : "0";
      backToTop.style.transform = isBackToTop ? "scale(1)" : "scale(0)";
    }
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      setIsBackToTop(true);
      renderToTopButton(isBackToTop);
    } else {
      setIsBackToTop(false);
      renderToTopButton(isBackToTop);
    }
  });
  return (
    <Container fluid className="project-page p-4">
      <Row className="project-header mb-5">My Work</Row>
      {/* project section-1 */}
      <Row className="project-container d-flex flex-column flex-lg-row flex-column-reverse h-auto">
        <Col
          lg={4}
          sm={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Weather App</h3>
          <p className="project-description">
            A weather app to help you update with weather conditions
          </p>
          <ul className="project-stacks d-flex justify-center align-center">
            <li>
              <img
                src={Images.tailwind}
                alt="react-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img
                src={Images.react}
                alt="react-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img
                src={Images.firebase}
                alt="firebase-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img src={Images.api} alt="api-icon" style={{ width: "2em" }} />
            </li>
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

        <Col sm={12} lg={8} className="image-container pr-0 pl-0 mb-4 mb-lg-0">
          <img
            src={Images.weatherThumbNail}
            alt="weather-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>

      {/* Project Section-2 */}
      <Row className="project-container d-flex flex-column flex-lg-row flex-column-reverse h-auto">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Quizzical</h3>
          <p className="project-description">
            A quiz app to help you leverage your knowledge in various areas
          </p>
          <ul className="project-stacks d-flex">
            <li>
              <img
                src={Images.bootstrap}
                alt="bootstrap-icon"
                style={{ width: "3em" }}
              />
            </li>
            <li>
              <img
                src={Images.react}
                alt="react-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img src={Images.api} alt="api-icon" style={{ width: "2em" }} />
            </li>
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
        <Col xs={12} lg={8} className="image-container pr-0 pl-0 mb-4 mb-lg-0">
          <img
            src={Images.quizThumbNail}
            alt="quiz-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>

      {/* Project Section-3 */}
      <Row className="project-container d-flex flex-column flex-lg-row flex-column-reverse h-auto">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Room Booking System</h3>
          <p className="project-description">
            An online room booking system to help you reserve your study room
            with various options
          </p>
          <ul className="project-stacks d-flex">
            <li>
              <img
                src={Images.bootstrap}
                alt="bootstrap-icon"
                style={{ width: "3em" }}
              />
            </li>
            <li>
              <img
                src={Images.flask}
                alt="flask-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img
                src={Images.mySQL}
                alt="mySQL-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li><img src={Images.python} alt="python-icon" style={{width: "2em"}}/></li>
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
        <Col xs={12} lg={8} className="image-container pr-0 pl-0 mb-4 mb-lg-0">
          <img
            src={Images.roomsystemThumbNail}
            alt="room-system-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>

      {/* Project Section-4 */}
      <Row className="project-container d-flex flex-column flex-lg-row flex-column-reverse h-auto">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Walk-As-You-Scroll</h3>
          <p className="project-description">
            A chrome extension to help you track screen time and improve overal
            health
          </p>
          <ul className="project-stacks d-flex">
            <li>
              <img
                src={Images.typescript}
                alt="typescript-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img
                src={Images.js}
                alt="javascript-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img
                src={Images.jQuery}
                alt="jQuery-icon"
                style={{ width: "2em" }}
              />
            </li>
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
        <Col xs={12} lg={8} className="image-container pr-0 pl-0 mb-4 mb-lg-0">
          <img
            src={Images.chromeExtThumbNail}
            alt="chrome-extension-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>

      {/* Project Section-5 */}
      <Row className="project-container d-flex flex-column flex-lg-row flex-column-reverse h-auto">
        <Col
          lg={4}
          xs={12}
          className="project-section pr-0 pl-0 d-flex flex-column h-100 justify-content-center"
        >
          <h3 className="project-title">Nails Salon Web Page</h3>
          <p className="project-description">
            The nail salon web page allows customers to effortlessly exlore
            business offers with booking integration.
          </p>
          <ul className="project-stacks d-flex">
            <li>
              <img src={Images.sass} alt="sass-icon" style={{ width: "2em" }} />
            </li>
            <li>
              <img
                src={Images.react}
                alt="react-icon"
                style={{ width: "2em" }}
              />
            </li>
            <li>
              <img
                src={Images.tailwind}
                alt="tailwind-icon"
                style={{ width: "2em" }}
              />
            </li>
          </ul>
          <div className="work-links">
            <a href="https://ptnailsbarmilton.com//" className="link-text">
              Visit site <span>&rarr;</span>
            </a>
            <a href="https://github.com/tin0312/PT-Nails-and-Bar-Milton">
              <img
                src={Images.githubIcon}
                alt="github-icon"
                className="work-code"
              />
            </a>
          </div>
        </Col>
        <Col xs={12} lg={8} className="image-container pr-0 pl-0 mb-4 mb-lg-0">
          <img
            src={Images.salonThumbNail}
            alt="password-app-thumb-nail"
            className="project-thumb-nail"
          />
        </Col>
      </Row>
      <a href="#top" className="back-to-top" title="Back to Top">
        <img
          src={Images.arrowUp}
          alt="Back to Top"
          className="back-to-top__image"
        />
      </a>
    </Container>
  );
}
