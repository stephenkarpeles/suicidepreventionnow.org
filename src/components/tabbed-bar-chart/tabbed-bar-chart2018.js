import React from "react";
import { Fade } from "react-awesome-reveal";

const TabbedBarChart2018 = () => {
  return (
    <div className="tabbed-bar-wrapper">

      <div className="tabbed-bar__grid">
        <div className="tabbed-bar__text-label">
          80% of those surveyed believe mental health and physical health are equally important to their own health 
        </div>
        <div className="tabbed-bar">
          <div className="tabbed-bar__num-label">80%</div>
          <Fade direction="left">
            <svg width="100%" height="41">
              <rect width="80%" height="41" x="0" fill="#1d8019"></rect>
              <rect width="20%" height="41" x="80%" fill="#D1D1D1"></rect>
            </svg>
          </Fade>
        </div>
      </div>

      <div className="tabbed-bar__grid">
        <div className="tabbed-bar__text-label">
          However, nearly 30 percent of people feel physical health is treated as more important
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

export default TabbedBarChart2018;