import React from "react"
import "../base.css"
import "./layout.css"
import { Helmet } from "react-helmet";
import Header from "../header/header"
import Footer from "../footer/footer"
import AboutHeaderBlock from "../about-header-block/about-header-block";

const Layout = props => {
  return (
    <div id="App">
      <Helmet>
        <title>{props.pageTitle}</title>
      </Helmet>
      <Header />
      {props.children}
      <Footer />
      <AboutHeaderBlock />
    </div>
  )
}

export default Layout