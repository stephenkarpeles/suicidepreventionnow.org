import React, { useState, useEffect } from "react";
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollspyNav from "react-scrollspy-nav";
import "./header.css"

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

const Header = () => {
  const scroll = useScrollHandler();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className={`header${scroll ? " header--user-has-scrolled" : ""}`}>
      <div className="header__help-area-mobile">
        <div className="container">
          <strong>Need help?</strong> Call or text <a href="tel:988">988</a> or chat <a href="https://988lifeline.org" target="_blank">988lifeline.org</a>
        </div>
      </div>
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
                <strong>Need help?</strong> Call or text <a href="tel:988">988</a> or chat <a href="https://988lifeline.org" target="_blank">988lifeline.org</a>
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
              <ScrollspyNav
                  scrollTargetIds={["section1", "section2", "section3", "section4"]}
                  offset={-40}
                  activeNavClass="is-active-nav-item"
                  scrollDuration="600"
                  headerBackground="true"
              >
                <ul>
                  <li>
                    <Link href="#section1">1. <span>Introduction</span></Link>
                  </li>
                  <li>
                    <Link href="#section2">2. <span>Learn about the Data</span></Link>
                  </li>
                  <li>
                    <Link href="#section3">3. <span>Know how to Help</span></Link>
                  </li>
                  <li>
                    <Link href="#section4">4. <span>Advocate for Change</span></Link>
                  </li>
                </ul>
              </ScrollspyNav>
            </div>
          </div>
        </div>
        <div className="header__back-to-top" onClick={scrollToTop}>
          <svg viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-circle-up"><rect width="24" height="24" opacity="0" /><path className="header__back-to-top-btn" d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 .54.54 0 0 0 .16-.1.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45z"/><path className="header__back-to-top-btn" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g></svg>
        </div>
      </div>
    </header>
  )
}

export default Header