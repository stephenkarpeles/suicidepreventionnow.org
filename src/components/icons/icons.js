import React from "react";
import "./icons.css";

const Icons = (props) => {
  return (
    <>
      <div className="c-icon-block">
        <img src={props.icon} alt="" className="c-icon-block__image"/>
      </div>
    </>
  )
}

export default Icons;
