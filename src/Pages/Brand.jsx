import React from "react";

export default function Brand() {
  return (
    <div className="brand-container ">
      <div className="developer-wrapper">
        <h1 className="developer-name">Hello, my name is <br/>Truong Hoang</h1>
        <p className="developer-introduction">
          Based in the Toronto, I’m a front-end developer <br />
          passionate about building functional, real-world <br />
          related web apps that enhance users experience{" "}
        </p>
      </div>
      <div className="photo-wrapper">
        <img
          src="src/images/developer-photo.jpeg"
          alt="Justin Hoang"
          className="developer-image"
        />
      </div>
    </div>
  );
}
