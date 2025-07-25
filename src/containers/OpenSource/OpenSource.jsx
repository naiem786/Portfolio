// src/containers/OpenSource/OpenSource.jsx

import React from "react";
import "./OpenSource.scss";
import { openSource } from "../../portfolio";
import { Fade } from "react-reveal";

export default function OpenSource() {
  if (!openSource.display || !openSource.contributions) return null;

  return (
    <div className="opensource-section" id="opensource">
      <Fade bottom duration={1000} distance="20px">
        <h1 className="opensource-heading">Open Source Contributions</h1>
        <div className="opensource-card-container">
          {openSource.contributions.map((item, index) => (
            <div key={index} className="opensource-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="opensource-links">
                <a href={item.githubRepo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {item.npmLink && (
                  <a href={item.npmLink} target="_blank" rel="noreferrer">
                    NPM
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
