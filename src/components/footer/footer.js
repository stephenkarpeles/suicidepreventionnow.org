import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__title">
          Suicide Prevention <strong>Now</strong>
        </div>
        <div className="footer__grid">
          <div className="footer__col-left">
            <nav className="footer__nav">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Partners and Methodology</a></li>
                <li><a href="/">Diving Deeper</a></li>
              </ul>
            </nav>
            <div className="footer__download-cta">
              <a href="/" className="btn btn--outlined">Download Report</a>
            </div>
          </div>
          <div className="footer__col-right">
            <div className="footer__sponsor-title">Sponsored by</div>
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