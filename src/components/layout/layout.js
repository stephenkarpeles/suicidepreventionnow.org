import React from "react";
import "../base.css";
import "./layout.css";
import { Helmet } from "react-helmet";
import Header from "../header/header";
import Footer from "../footer/footer";
import favicon from "../../images/favicon.ico";
import favicon16 from "../../images/favicon-16x16.png";
import favicon32 from "../../images/favicon-32x32.png";
import faviconapple from "../../images/apple-touch-icon.png";

const Layout = props => {
  return (
    <div id="App">
      <Helmet>
        <title>{props.pageTitle}</title>
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconapple} />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href={favicon32}
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href={favicon16}
        />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout