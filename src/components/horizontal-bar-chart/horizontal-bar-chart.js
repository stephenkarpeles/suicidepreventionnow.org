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
            <svg width="500" height="41">
              <rect width="305" height="41" x="0" fill="#8764C3"></rect>
              <rect width="195" height="41" x="305" fill="#D1D1D1"></rect>
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
            <svg width="500" height="41">
              <rect width="300" height="41" x="0" fill="#734fb1"></rect>
              <rect width="200" height="41" x="300" fill="#D1D1D1"></rect>
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
            <svg width="500" height="41">
              <rect width="270" height="41" x="0" fill="#432674"></rect>
              <rect width="230" height="41" x="270" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

      <div className="h-bar__grid">
        <div className="h-bar__text-label">
          Better access to mental health care
        </div>
        <div className="h-bar">
          <div className="h-bar__num-label">53%</div>
          <Fade direction="left">
            <svg width="500" height="41">
              <rect width="265" height="41" x="0" fill="#2e1a53"></rect>
              <rect width="235" height="41" x="265" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default HorizontalBarChart;