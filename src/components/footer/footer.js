import React from 'react';
import "./footer.css"

// Images
import {
logoSprc,
logoAfsp,
suicidePrevention,
logoAlliance } from '../../indexImages';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__title">
          Suicide Prevention <span>Now</span>
        </div>
        <div className="footer__grid">
          <div className="footer__col-left">
            <nav className="footer__nav">
              <ul>
                <li><a href="/about-project">About</a></li>
                <li><a href="/take-action">Take Action</a></li>
              </ul>
            </nav>
            <div className="footer__download-cta">
              <a href="/" className="btn btn--outlined">Download Report</a>
            </div>
          </div>
          <div className="footer__col-right">
            <div className="footer__sponsor-title">Sponsored by</div>
            <div className="footer__logo-block">
              <ul>
                <li>
                  <a href="https://afsp.org/">
                    <img src={logoAfsp} alt="American Foundation for Suicide Prevention Logo"/>
                  </a>
                </li>
                <li>
                  <a href="https://theactionalliance.org/">
                    <img src={logoAlliance} alt="National Action Alliance Logo"/>
                  </a>
                </li>
                <li>
                  <a href="https://sprc.org/">
                    <img src={logoSprc} alt="National Action Alliance Logo"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__base-gradient">
        <div className="container">
          <div className="footer__copyright">
            Copyright 2022
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer