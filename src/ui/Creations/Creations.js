import React from "react";

// styles
import "./Creations.css";

// images
import creationsData from "../../data";

import { MAX_MOBILE_SCREEN } from "../../App";

const Creations = ({ dimensions }) => {
  const isDesktop = dimensions.width > MAX_MOBILE_SCREEN ? true : false;

  return (
    <div>
      {isDesktop ? (
        <div className="creations-header">
          <h2>OUR CREATIONS</h2>
          <button className="see-all-button">SEE ALL</button>
        </div>
      ) : (
        <h2 className="text-center">OUR CREATIONS</h2>
      )}
      <div className={isDesktop ? "creations-grid" : ""}>
        {creationsData.map((creation, index) => {
          const imgSrc =
            dimensions.width <= MAX_MOBILE_SCREEN
              ? creation.mobileSrc
              : creation.desktopSrc;
          return (
            <div
              className="creation-container"
              key={`${creation.label}${index}`}
            >
              <div className="creation-label">
                <h3>{creation.lineOne}</h3>
                <h3>{creation.lineTwo}</h3>
              </div>
              <span className="overlay">
                <img
                  src={imgSrc}
                  alt={creation.label}
                  className="creation-image center"
                />
              </span>
            </div>
          );
        })}
      </div>
      {!isDesktop && <button className="see-all-button center">SEE ALL</button>}
    </div>
  );
};

export default Creations;
