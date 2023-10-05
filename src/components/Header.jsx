import React from "react";
import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container, Row, Col} from "react-bootstrap"

export default function Header() {
  const isActiveLink = {
    fontWeight: "bold",
    color: "green",
  };

  return (
    <Container fluid className = "header">
      <Row className = "header-row w-100">
      <Col xs={6} lg={6} className="brand-name d-flex align-items-lg-center justify-content-center justify-content-lg-start" to="/">
            <div><Link to= "/">Justin</Link></div>
      </Col>
      <Col xs={6} lg={6} className = "pl-0 pr-0 d-flex justify-content-end">
      <Navbar expand="lg" className="nav-bar d-flex justify-content-end pr-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" id = "custom-toogle"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-items d-flex align-items-end mt-3">
              <NavLink   
                to="/about"
                style={({isActive}) => isActive ? isActiveLink : null}
                className="nav__link"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                style={({isActive}) => isActive ? isActiveLink : null}
                className="nav__link"
              >
                Projects
              </NavLink>
              <NavLink
                to="/contacts"
                style={({isActive}) => isActive ? isActiveLink : null}
                className="nav__link"
              >
                Contacts
              </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </Col>
      </Row>
    </Container>
  );
}
