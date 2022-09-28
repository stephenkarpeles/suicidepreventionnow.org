import React from "react";
import { Fade } from "react-awesome-reveal";

const HorizontalBarChart = () => {
  return (
    <div className="h-bar-wrapper">

      <div className="h-bar__grid">
        <div className="h-bar__text-label">
          Better access to mental health care
        </div>
        <div className="h-bar">
          <div className="h-bar__num-label">61%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="61%" height="41" x="0" fill="#8764C3"></rect>
              <rect width="39%" height="41" x="61%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

      <div className="h-bar__grid">
        <div className="h-bar__text-label">
          More public education
        </div>
        <div className="h-bar">
          <div className="h-bar__num-label">60%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="60%" height="41" x="0" fill="#734fb1"></rect>
              <rect width="40%" height="41" x="60%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

      <div className="h-bar__grid">
        <div className="h-bar__text-label">
          Additional training for health care providers
        </div>
        <div className="h-bar">
          <div className="h-bar__num-label">54%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="54%" height="41" x="0" fill="#432674"></rect>
              <rect width="46%" height="41" x="54%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

      <div className="h-bar__grid">
        <div className="h-bar__text-label">
          Better access to health care in general
        </div>
        <div className="h-bar">
          <div className="h-bar__num-label">53%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="53%" height="41" x="0" fill="#2e1a53"></rect>
              <rect width="47%" height="41" x="53%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default HorizontalBarChart;
