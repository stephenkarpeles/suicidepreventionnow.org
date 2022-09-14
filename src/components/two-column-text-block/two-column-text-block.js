import React from "react";
import { Link } from "gatsby";
import './two-column-text-block.css';

const TwoColumnTextBlock = (props) => {
  // const [label, setLabel] = useState(true);
  const label = props.showLabel;
  console.log('label', label)

  return (
    <>
      <div className={`c-two-col-block t-offset-bg container ${label ? 'bg-yellow' : 'bg-gradient'}`}>

        <div className="c-two-col-block__label" style={{ display: label ? "block" : "none" }}>
          <span>1. Introduction</span>
        </div>

        <h1 className="c-two-col-block__header-title">{props.header}</h1>
        <div className="c-two-col-block__content">
          <div className="c-two-col-block__body-text">
            {props.bodyText}
          </div>
          <div className="c-cta-container">
            <div className="c-cta-container__link" style={{ display: label ? "block" : "none" }}>
              <Link to={props.anchorLink}>
                <span>
                  Let's get started
                </span>
                <span className="c-cta-container__svg">
                  <svg viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-circle-down"><rect width="24" height="24" opacity="0" /><path className="c-cta-container__svg" d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 .54.54 0 0 0 .16-.1.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45z"/><path className="c-cta-container__svg" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoColumnTextBlock;
