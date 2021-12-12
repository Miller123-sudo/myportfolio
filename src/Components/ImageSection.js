import React from "react";
import about from "../img/bd.jpeg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Biswajit Das</span>
        </h4>
        <p className="about-text">
          I've experience of building api's in node.js which have
          authentication, mailing, pagination functionality. As well as limiting
          request into the server etc.
          <br />
          And I also know how to use api in frontend(React.js) and can build a
          web application.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            {/* <p>Countries</p> */}
          </div>
          <div className="right-section">
            <p>: Biswajit Das</p>
            <p>: {new Date().getFullYear() - 1997}</p>
            <p>: Indian</p>
            <p>: Bengali, Hindi, English</p>
            <p>: Balaramdihi, Jhargram(Hometown)</p>
            {/* <p>: France, Spain, Germany</p> */}
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
