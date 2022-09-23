import React from "react";
import { Fade } from "react-awesome-reveal";

const TabbedBarChart2018 = () => {
  return (
    <div className="tabbed-bar-wrapper">

      <div className="tabbed-bar__grid">
        <div className="tabbed-bar__text-label">
          Most people perceive mental health as equal to or more important than physical health
        </div>
        <div className="tabbed-bar">
          <div className="tabbed-bar__num-label">30%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="30%" height="41" x="0" fill="#1d8019"></rect>
              <rect width="70%" height="41" x="30%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

      <div className="tabbed-bar__grid">
        <div className="tabbed-bar__text-label">
          However, over half of U.S. adults feel physical health is treated as more important
        </div>
        <div className="tabbed-bar">
          <div className="tabbed-bar__num-label">15%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="15%" height="41" x="0" fill="#31552f"></rect>
              <rect width="85%" height="41" x="15%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

    </div>
  )
}

export default TabbedBarChart2018;