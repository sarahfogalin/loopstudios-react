import React from "react";

// styles
import "./About.css";

// images
import interactive from "../../images/mobile/image-interactive.jpg";

import { MAX_MOBILE_SCREEN } from "../../App";

const About = ({ dimensions }) => {
  const isDesktop = dimensions.width > MAX_MOBILE_SCREEN ? true : false;

  return (
    <div className="about-stack">
      <img
        src={interactive}
        className="interactive-image center"
        alt="interactive"
      />
      <div className="text-layer">
        <h2 className={isDesktop ? "" : "text-center"}>
          THE LEADER IN {isDesktop && <br />}INTERACTIVE VR
        </h2>
        <p className={`body-text ${isDesktop ? "" : "text-center"}`}>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default About;
