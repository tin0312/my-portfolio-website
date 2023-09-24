import React from "react";
import * as Images from "../images";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Brand() {
  return (
    <Container fluid className="home-container mb-5 w-75">
      {/* Name && Introduction */}
      <Row className="home-row w-100 flex-lg-row flex-column w-75">
        <Col xs={12} lg={6} className="introduction-container mb-5 mb-lg-0">
          <h1 className="greeting">
            Nice to meet you!
            <br /> I’m <span id="name">Justin</span>
          </h1>
          <p className="introduction-message">
            Based in Toronto, I’m a front-end developer
            passionate about building accessible web apps
            that users love.
          </p>
        </Col>
        {/* image */}
        <Col xs={12} lg={6} className="avatar-container d-flex justify-content-lg-end justify-content-center">
          <img src={Images.avatar} alt="avatar" className="avatar" />
        </Col>
      </Row>
    </Container>
  );
}
