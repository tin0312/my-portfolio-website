import React from "react";
import * as Images from "../images"


export default function Footer() {
  return (
    <footer className="footer-container">
      <a href = "https://www.linkedin.com/in/nhattruonghoang/"><img
        src={Images.linkedinicon}
        alt="linkedin-icon"
        className="social-icon"
      /></a>
      <a href = "https://github.com/tin0312"><img
        src={Images.githubIcon}
        alt="github-icon"
        className="social-icon"
      /></a>
    </footer>
  );
}
