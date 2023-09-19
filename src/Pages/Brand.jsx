import React from "react";

export default function Brand() {
  return (
    <div className="home-container ">
      {/* Name && Introduction */}
      <div className="introduction-container">
        <div>
          <h1 className="greeting">
            Nice to meet you!
            <br />
            I’m Justin
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
          src="src/images/developer-photo.jpeg"
          alt="developer-photo"
          className="profile-picture"
        />
      </div>
    </div>
  );
}
