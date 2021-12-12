import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Biswajit Das.</span>
        </h1>
        <p className="h-sub-text">
          I've excellent problem-solving skills and ability to perform well in a
          team. Fond of learning different technologies and frameworks like
          Django, React, Express.
          <br /> I believe in smart work but it is not a replacement of hard
          work. Because effort id important but knowing where to make an effort
          makes all the differences.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100008044603096"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            href="https://github.com/Miller123-sudo"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          {/* <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link> */}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
