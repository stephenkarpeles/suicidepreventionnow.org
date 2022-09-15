import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout/layout";

// Images
import placeholderImage from '../images/placeholder-image.png';
import es2022 from '../images/executive-summary-2022.png';
import es2020 from '../images/executive-summary-2020.png';
import es2018 from '../images/executive-summary-2018.png';
import es2015 from '../images/executive-summary-2015.png';
import pdfIcon from '../images/file.svg';


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
      <section className="t-section-sm t-section-bg-pattern--01">
        <div className="c-downloadable-resources container">
          <div className="c-downloadable-resources__col-left">
            <h2>Know the Facts</h2>
            <p>Resources about the data and the public's perceptions about suicide and suicide prevention.</p>
          </div>
          <div className="c-downloadable-resources__col-right">
            <h3>The Harris Poll Executive Summaries</h3>
            <p>An overview of survey questions and data with interpretations from the Harris Poll.</p>
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-4">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={es2022} alt="executive summary 2022" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    2022 Executive Summary
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </Link>
              </div>
              <div className="col-1-4">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={es2020} alt="executive summary 2020" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    2020 Executive Summary
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </Link>
              </div>
              <div className="col-1-4">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={es2018} alt="executive summary 2018" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    2018 Executive Summary
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </Link>
              </div>
              <div className="col-1-4">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={es2015} alt="executive summary 2015" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    2015 Executive Summary
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </Link>
              </div>
            </div>
            <h3>Press Releases</h3>
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2022 Press Release
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </Link>
              </div>
              <div className="col-1-3">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2020 Press Release
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </Link>
              </div>
              <div className="col-1-3">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2018 Press Release
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </Link>
              </div>
            </div>
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
