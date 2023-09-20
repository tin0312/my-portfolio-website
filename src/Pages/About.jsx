import React from "react";
import * as Images from "../images";

export default function About() {
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
      <div className="skill-set">
        <img className="technology-icon" src={Images.html} alt="html-icon" />
        <img className="technology-icon" src={Images.css} alt="css-icon" />
        <img className="technology-icon" src={Images.js} alt="js-icon" />
        <img className="technology-icon" src={Images.mySQL} alt="mySQL-icon"/>
        <img className="technology-icon" src={Images.react} alt="react-icon" />
        <img className="technology-icon" src={Images.bootstrap} alt="bootstrap-icon"/>
        <img className="technology-icon" src={Images.netlify} alt="netlify-icon" />
        <img className="technology-icon" src={Images.figma} alt="figma-icon"/>
        <img className="technology-icon" src={Images.npm} alt="npm-icon"/>
      </div>
    </div>
  );
}
