import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  const isActiveLink = {
    fontWeight: "bold",
    color: "green",
  };

  return (
    <header>
      <Link className="brand-name" to="/">
            Justin
      </Link>
      <Navbar expand="lg" className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" id = "custom-toogle" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto">
              <NavLink
                to="/about"
                style={isActiveLink}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                style={isActiveLink}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contacts"
                style={isActiveLink}
              >
                Contacts
              </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
