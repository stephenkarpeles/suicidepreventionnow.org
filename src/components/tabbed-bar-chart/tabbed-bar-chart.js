import React from "react";
import { Fade } from "react-awesome-reveal";

const TabbedBarChart = () => {
  return (
    <div className="tabbed-bar-wrapper">

      <div className="tabbed-bar__grid">
        <div className="tabbed-bar__text-label">
          Better access to mental health care
        </div>
        <div className="tabbed-bar">
          <div className="tabbed-bar__num-label">92%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="92%" height="41" x="0" fill="#1d8019"></rect>
              <rect width="8%" height="41" x="92%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

      <div className="tabbed-bar__grid">
        <div className="tabbed-bar__text-label">
          More public education
        </div>
        <div className="tabbed-bar">
          <div className="tabbed-bar__num-label">51%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="51%" height="41" x="0" fill="#31552f"></rect>
              <rect width="49%" height="41" x="51%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

    </div>
  )
}

export default TabbedBarChart;