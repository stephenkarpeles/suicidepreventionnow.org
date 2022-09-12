import React from "react"
import "../base.css"
import "./layout.css"
import { Helmet } from "react-helmet";
import Header from "../header/header"
import Footer from "../footer/footer"

// Image routes for icons (& component)
import bookPencil from "../../images/c-book-pencil.svg";
import chatBubbles from "../../images/c-chat-bubbles.svg";
import covid from "../../images/c-covid.svg";
import firstAidKit from "../../images/c-first-aid-kit.svg";
import groupPeople from "../../images/c-group-people.svg";
import heartBrain from "../../images/c-heart-brain.svg";
import medicalClipboard from "../../images/c-medical-clipboard.svg";
import medicalOnline from "../../images/c-medical-online.svg";
import medicalShield from "../../images/c-medical-shield.svg";

const Layout = props => {
  return (
    <div id="App">
      <Helmet>
        <title>{props.pageTitle}</title>
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout