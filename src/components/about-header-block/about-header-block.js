import React from "react";
import { Link } from "gatsby";
import './about-header-block.css';

const AboutHeaderBlock = () => {
  return (
    <>
      <div className="c-about-header-block t-offset-bg t-offset-color-gradient container">
        <h1 className="c-about-header-block__header-title">
          About the Project
        </h1>
        <div className="c-about-content">
          <div className="c-about-content__col-left">
            <p>Research matters - especially when it comes to messaging. We must better understand the attitudes, beliefs, and perceptions about mental health and suicide prevention if we are to messaging effectively and clearly to the public.</p>
          </div>
          <div className="c-about-content__col-right">
            <p>That’s why, the <Link to="https://afsp.org/" target={"_blank"} className="o-body-text-link">American Foundation for Suicide Prevention (AFSP)</Link>, the <Link to="https://theactionalliance.org/" target={"_blank"} className="o-body-text-link">National Action Alliance for Suicide Prevention (Action Alliance)</Link>, the <Link to="https://www.sprc.org/" target={"_blank"} className="o-body-text-link">Suicide Prevention Resource Center (SPRC)</Link>, has collaboratively united in 2015, 2018, 2020, and again in 2022 to conduct regular national polling to get a better sense about the public's perceptions of mental health and suicide prevention—and use this information to inform and transform our nation's narrative about these important growing public health issues.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHeaderBlock;