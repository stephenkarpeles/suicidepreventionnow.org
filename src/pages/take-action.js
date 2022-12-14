import React from "react";
import { Link } from "gatsby";
import ShareSocialMedia from "../components/share-social-media/ShareSocialMedia";
import Helmet from 'react-helmet'

// Components
import Layout from "../components/layout/layout";

// Images
import {
es2020,
es2018,
es2015,
pdfIcon,
bethere,
keepSafe,
realConvo,
sprcBeThere,
sprcHelpSeek,
take5,
reachOut,
suicidePrevention,
hsV4,
hsV42,
hsV43,
hsV44,
hsV45,
hsV47,
hsV414,
hsV415,
hsV416,
hsV418,
hsV423,
hsV424,
hsV425 } from '../indexImages';

//Downloadable PDF Files
import executiveSummary2020 from '../static/executive-summary-2020.pdf';
import executiveSummary2018 from '../static/executive-summary-2018.pdf';
import executiveSummary2015 from '../static/executive-summary-2015.pdf';
import pressRelease2022 from '../static/press-release-2022.pdf';
import pressRelease2020 from '../static/press-release-2020.pdf';
import pressRelease2018 from '../static/press-release-2018.pdf';
import pressRelease2015 from '../static/press-release-2015.pdf';
import promoToolkit2022 from '../static/2022-promotional-toolkit.pdf';

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const TakeAction = () => {
  return (
    <Layout pageTitle="Suicide Prevention Now - Take Action">
      <Helmet
          bodyAttributes={{
              class: 'take-action-page'
          }}
      />
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
      <section id="learn-about-the-data" className="t-section-lg t-section-bg-pattern t-bg-pattern-color-01">
        <div className="c-downloadable-resources container">
          <div className="c-downloadable-resources__col-left">
            <h2>Learn About the Data</h2>
            <p>Resources about the data and the public's perceptions about suicide and suicide prevention.</p>
          </div>
          <div className="c-downloadable-resources__col-right">
            <h3 className="c-downloadable-resources__header">The Harris Poll Executive Summaries</h3>
            <p>An overview of survey questions and data with interpretations from the Harris Poll.</p>
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3">
                <a href={executiveSummary2020} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={es2020} alt="executive summary 2020" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    2020 Executive Summary
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
              <div className="col-1-3">
                <a href={executiveSummary2018} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={es2018} alt="executive summary 2018" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    2018 Executive Summary
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
              <div className="col-1-3">
                <a href={executiveSummary2015} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={es2015} alt="executive summary 2015" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    2015 Executive Summary
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
            </div>
            <h3 className="c-downloadable-resources__header">Press Releases</h3>
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3">
                <a href={pressRelease2022} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2022 Press Release
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
              <div className="col-1-3">
                <a href={pressRelease2020} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2020 Press Release
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
              <div className="col-1-3">
                <a href={pressRelease2018} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2018 Press Release
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
            </div>
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3">
                <a href={pressRelease2015} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2015 Press Release
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
            </div>
            <h3 className="c-downloadable-resources__header">Promotional Toolkit</h3>
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3">
                <a href={promoToolkit2022} target={"_blank"} className="c-downloadable-resources__file-link">
                  <span>
                    2022 Promotional Toolkit
                    <img src={pdfIcon} alt="pdf icon" className="c-downloadable-resources__pdf-icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="know-how-to-help" className="t-section-lg t-section-bg-pattern t-bg-pattern-color-02">
        <div className="c-downloadable-resources container">
          <div className="c-downloadable-resources__col-left">
            <h2>Know How to Help</h2>
            <p>Begin to make the connection and be there for yourself and others.</p>
          </div>
          <div className="c-downloadable-resources__col-right">
            <div className="c-downloadable-resources__downloadable-row row">
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <a href={"https://theactionalliance.org/bethere"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={bethere} alt="action alliances Be There resources" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    Action Alliance's "Be There" Resources
                  </span>
                </a>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <a href={"https://afsp.org/realconvo"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={realConvo} alt="AFSP's Have a #RealConvo" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                  AFSP's Have a #RealConvo
                  </span>
                </a>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <a href={"https://www.take5tosavelives.org/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={take5} alt="Nation Council for Suicide Prevention's #Take5toSaveLives" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    Nation Council for Suicide Prevention's #Take5toSaveLives
                  </span>
                </a>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <a href={"https://www.sprc.org/comprehensive-approach/help-seeking"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={sprcHelpSeek} alt="SPRC's Increase Help-Seeking" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    SPRC's Increase Help-Seeking
                  </span>
                </a>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <a href={"https://www.sprc.org/news/how-be-there"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={sprcBeThere} alt="SPRC's How to Be There" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    SPRC's How to Be There
                  </span>
                </a>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <a href={"https://www.va.gov/REACH/about/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={reachOut} alt="VA's Take a Moment to Reach Out" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    VA's Take a Moment to Reach Out
                  </span>
                </a>
              </div>
              <div className="col-1-3 c-downloadable-resources__advocate-card">
                <a href={"https://www.bethe1to.com/"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <figure>
                    <img src={keepSafe} alt="Vibrant/SAMHSA's #BeThe1To" className="c-downloadable-resources__file-image" />
                  </figure>
                  <span>
                    Vibrant/SAMHSA's #BeThe1To
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="advocate-for-change" className="t-section-lg t-section-bg-pattern t-bg-pattern-color-01">
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
                <a href={"https://afsp.org/become-a-suicide-prevention-public-policy-advocate"} target={"_blank"} className="c-downloadable-resources__file-link">
                  <h3 className="c-downloadable-resources__header--link">Sign Up to become an Advocate for Suicide Prevention</h3>
                </a>
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
          <div className="row row--justify-content-center">
            <div className="col col-1-2">
               <div className="text-center" style={{marginBottom: '100px', marginTop: '-20px'}}>
                <ShareSocialMedia linkText={'Share content'} url={'https://suicidepreventionnow.org'} />
              </div>
            </div>
          </div>
          <div className="c-social-media-3col__content">
            <div className="row">
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV4} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV4} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV42} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV42} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV43} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV43} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV44} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV44} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV45} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV45} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV47} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV47} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV414} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV414} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV415} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV415} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV416} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV416} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV418} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV418} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV423} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV423} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV424} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV424} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                  <figure className="c-social-card__figure">
                    <img src={hsV425} alt="" className="c-social-card__image" />
                  </figure>
                  <div className="c-social-card__links">
                    <a href={hsV425} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></a>

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
