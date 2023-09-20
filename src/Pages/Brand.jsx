import React from "react";
import * as Images from "../images"

export default function Brand() {
  return (
    <div className="home-container ">
      {/* Name && Introduction */}
      <div className="introduction-container">
        <div>
          <h1 className="greeting">
            Nice to meet you!
            <br />
            I’m <span id = "name" >Justin</span>
          </h1>
          <p className="introduction-message">
            Based in the Toronto, I’m a front-end developer
            <br /> passionate about building accessible web apps
            <br /> that users love.
          </p>
        </div>
      </div>
      {/* image */}
      <div className="image-container">
        <img
          src= {Images.avatar}
          alt="avatar"
          className="avatar"
        />
      </div>
    </div>
  );
}
