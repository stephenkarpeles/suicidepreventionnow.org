import { Link } from 'gatsby';
import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__base-gradient">
      </div>
      <div className="container">
        <div className="header__grid">
          <div className="header__col-left">
            <div className="header__logo">
              <Link to="/">  
                Suicide<br/>
                Prevention<br/> 
                <span>Now</span>
              </Link>
            </div>
          </div>
          <div className="header__col-right">
            <div className="header__top-menu">
              <div className="header__help-area">
                <strong>Need help?</strong> Call or text 988 or chat 988lifeline.org
              </div>
              <div className="header__utility-nav">
                <ul>
                  <li>
                    <Link to="/about-project">About the Project</Link>
                  </li>
                  <li>
                    <Link to="/take-action">Take Action</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__bottom-menu">
              <ul>
                <li>
                  <Link to="/">1. Introduction</Link>
                </li>
                <li>
                  <Link to="/">2. Know the Facts</Link>
                </li>
                <li>
                  <Link to="/">3. Learn How to Help</Link>
                </li>
                <li>
                  <Link to="/">4. Advocate for Change</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header