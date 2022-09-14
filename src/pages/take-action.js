import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout/layout";

import placeholderImage from '../images/placeholder-image.png';

const TakeAction = () => {

  return (
    <Layout pageTitle="AFSP Site - Take Action">
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
      <section className="t-section-lg">
        <div className="c-social-media-3col container">
          <h2 className="c-social-media-3col__header-title">
            <span>Share these Messages</span>
          </h2>
          <div className="c-social-media-3col__content">
            <div className="row">
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={placeholderImage} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                    <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={placeholderImage} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                    <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={placeholderImage} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                    <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={placeholderImage} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                    <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={placeholderImage} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                    <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={placeholderImage} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                    <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TakeAction;
