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
import bethere from '../images/bethere.png';
import keepSafe from '../images/keep-them-safe.png';
import realConvo from '../images/realconvo.png';
import sprcBeThere from '../images/sprc-how-to-be-there.png';
import sprcHelpSeek from '../images/sprc-increase-help-seeking.png';
import take5 from '../images/Take5toSaveLives.png';
import reachOut from '../images/va-take-moment-reach-out.png';
import suicidePrevention from '../images/Advocate-for-Suicide-Prevention.png';


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
      <section className="t-section-sm t-section-bg-pattern t-bg-pattern-color-01">
        <div className="c-downloadable-resources container">
          <div className="c-downloadable-resources__col-left">
            <h2>Know the Facts</h2>
            <p>Resources about the data and the public's perceptions about suicide and suicide prevention.</p>
          </div>
          <div className="c-downloadable-resources__col-right">
            <h3 className="c-downloadable-resources__header">The Harris Poll Executive Summaries</h3>
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
            <h3 className="c-downloadable-resources__header">Press Releases</h3>
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
      <section className="t-section-sm t-section-bg-pattern t-bg-pattern-color-02">
        <div className="c-downloadable-resources container">
          <div className="c-downloadable-resources__col-left">
            <h2>Learn How to Help</h2>
            <p>Begin to make the connection and be there for yourself and others.</p>
          </div>
          <div className="c-downloadable-resources__col-right">
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={bethere} alt="action alliances Be There resources" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    Action Alliance's "Be There" Resources
                  </span>
                </Link>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={realConvo} alt="AFSP's Have a #RealConvo" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                  AFSP's Have a #RealConvo
                  </span>
                </Link>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={take5} alt="Nation Council for Suicide Prevention's #Take5toSaveLives" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    Nation Council for Suicide Prevention's #Take5toSaveLives
                  </span>
                </Link>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={sprcHelpSeek} alt="SPRC's Increase Help-Seeking" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    SPRC's Increase Help-Seeking
                  </span>
                </Link>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={sprcBeThere} alt="SPRC's How to Be There" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    SPRC's How to Be There
                  </span>
                </Link>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={reachOut} alt="VA's Take a Moment to Reach Out" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    VA's Take a Moment to Reach Out
                  </span>
                </Link>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={keepSafe} alt="Vibrant/SAMHSA's #BeThe1To" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    Vibrant/SAMHSA's #BeThe1To
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="t-section-sm t-section-bg-pattern t-bg-pattern-color-01">
        <div className="c-downloadable-resources container">
          <div className="c-downloadable-resources__col-left">
            <h2>Advocate for Change</h2>
            <p>Learn how you can become an advocate for change to help prevent suicide.</p>
          </div>
          <div className="c-downloadable-resources__col-right">
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3">
                <figure>
                  <img src={suicidePrevention} alt="Sign Up to become an Advocate for Suicide Prevention" className="c-downloadable-resources__file-image" />
                </figure>
              </div>
              <div className="col-2-3">
                <Link to={"/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <h3 className="c-downloadable-resources__header--link">Sign Up to become an Advocate for Suicide Prevention</h3>
                </Link>
                <p>Join our network of thousands of Field Advocates across the country who are speaking out and fighting for essential policy changes that will save lives. Monthly email updates will alert you to the legislation and policies that need your support. Demand action from your federal and state public officials in a matter of minutes.</p>
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
