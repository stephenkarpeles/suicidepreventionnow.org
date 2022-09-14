import React from "react";
import { Link } from "gatsby";
import Fade from 'react-reveal/Fade';

// Components
import Layout from "../components/layout/layout"
import TwoColumnTextBlock from '../components/two-column-text-block/two-column-text-block';

const TakeAction = () => {

  return (
    <Layout pageTitle="AFSP Site - Take Action">
      <Fade>
        <section className="t-section-sm bg-50-50">
          <div className="c-one-col-block take-action-block t-offset-bg container">
            <h2 className="c-one-col-block__header-title">
              <span>Take Action</span>
            </h2>
            <div className="c-one-col-block__content">
              <p>The data shows that the publics wants to take action to strengthen suicide prevention and mental health. To help spur action and create better systems of care, check out the actionable resources below and share widely.</p>
            </div>
          </div>
        </section>
      </Fade>
    </Layout>
  )
}

export default TakeAction;
