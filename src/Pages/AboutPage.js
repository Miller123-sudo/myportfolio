import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />

      <Tittle title={"Experience"} span={"Experience"} />
      <div className="about-details">
        <div className="left-section">
          <p>Current Company</p>
          <p>Working since</p>
          <p>Responsibilities</p>
          {/* <p>Languages</p>
          <p>Address</p> */}
          {/* <p>Countries</p> */}
        </div>
        <div className="right-section">
          <p>: Paapri Cloud Technology</p>
          <p>: May 2020</p>
          <p>: Building backend(api) in node.js and frontend in React.js</p>
          {/* <p>: Bengali, Hindi, English</p>
          <p>: Balaramdihi, Jhargram</p> */}
          {/* <p>: France, Spain, Germany</p> */}
        </div>
      </div>
      <br />

      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Node Js"} progress={"85%"} width={"85%"} />
        {/* <SkillsSection skill={"Typescript"} progress={"30%"} width={"30%"} /> */}
        <SkillsSection skill={"Python"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Django"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"React Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"HTML"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"CSS"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"MongoDB"} progress={"75%"} width={"75%"} />
        <SkillsSection skill={"SQLite"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Git(basic)"} progress={"65%"} width={"65%"} />
        {/* <SkillsSection skill={"UI/Ux Design"} progress={"76%"} width={"76%"} /> */}
      </div>

      {/* <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Build api's"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div> */}
    </div>
  );
}

export default AboutPage;
