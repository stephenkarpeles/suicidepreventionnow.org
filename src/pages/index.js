// Base
import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout/layout";
import TwoColumnTextBlock from '../components/two-column-text-block/two-column-text-block';

// Styles
import '../components/section-intro-block/section-intro-block.css';
import '../components/single-column-text-block/single-column-text-block.css';
import '../components/social-media-3col/social-media-3col.css';
import '../components/downloadable-resources/downloadable-resources.css';
import '../components/three-column-cta/three-column-cta.css';

// Images
import placeholderImage from '../images/placeholder-image.png';
import placeholderImageBlue from '../images/placeholder-image-blue.png';
import placeholderImagePurple from '../images/placeholder-image-purple.png';
import imgWomanDog from '../images/woman-dog-bed.jpg';

const IndexPage = () => {

  return (
    <Layout pageTitle="AFSP Site">

        <section>
          <TwoColumnTextBlock showLabel={true} anchorLink={''} header={'Introduction & Executive Summary'} bodyText={[<><p>Since 2015, the American Foundation for Suicide Prevention (AFSP), the National Action Alliance for Suicide Prevention (Action Alliance), and the Suicide Prevention Resource Center (SPRC) have commissioned The Harris Poll bi-annually to conduct nationally representative surveys of adults in the U.S. The survey’s purpose is to understand what the public knows about mental health and suicide – and ways to support someone who is struggling – while uncovering the public’s beliefs and attitudes toward help seeking for themselves and others, sharing experiences, talking about mental health and understanding barriers that may prevent them from helping someone at risk for suicide. The poll also helps inform the public’s usage, expectations, and barriers to using crisis services.</p><p>In the latest poll (2022) we take an early pulse on public awareness of 988, the new Suicide & Crisis Lifeline, and we explore changes in knowledge and attitudes and assess the impact of unified suicide prevention messaging efforts over time. We find that gains have been made in valuing mental health on a personal level, but that society lags. We find a strong desire to help but also equally strong reservations against doing so. And we learn that access to care is seen as the leading barrier to getting help.</p><p>Overall, the poll indicates that there is much progress being made, but there is more to do. We must continue to learn about suicide through research, teach others how to help with innovative mental health and suicide prevention education programs, and advocate for improved access to care and robust crisis services.</p></>]}  />
        </section>

        <section className="section-intro-block">
          <div className="container">
            <div className="section-intro-block__grid row">
              <div className="section-intro-block__col-left col-7-12">
                <div className="section-intro-block__tag section-intro-block__tag--green">
                  2. Know the Facts
                </div>
                <div className="section-intro-block__heading">
                  <h2>Understand the <span>perceptions, beliefs, and attitudes</span> of the U.S. public about <span>mental health and suicide</span></h2>
                </div>
                <div className="section-intro-block__intro-text">
                  <p>
                    <span aria-hidden="true"><span class="dropcap dropcap--dark-green">B</span>ased</span>
                    <span class="sr-only">Based</span> on public perception polling of attitudes and behaviors about mental health and suicide, gains have been made in how people are valuing mental health while there are reported increases in barriers to care and societal beliefs about mental health and suicide.
                  </p>
                </div>
                <div className="section-intro-block__share">
                  Share this topic
                </div>
              </div>
              <div className="section-intro-block__col-right col-5-12">
                <div className="section-intro-block__image">
                  <img src={imgWomanDog} alt="Woman looking at phone on bed with dog" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="t-section-lg">
          <div className="c-three-col-cta container">
            <div className="row">
              <div className="col-1-3">
                <div className="c-three-col-cta__content">
                  <div>
                    <h2 className="c-three-col-cta__header c-three-col-cta__header--green">Let Your Network Know</h2>
                    <p>More people recognize that they have the power to seek mental health support, practice self-care techniques and routines, and impact the conversation so that mental health is seen as equally important to physical health. Download and share.</p>
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
        </section>
        <section className="t-section-lg">
          <div className="c-three-col-cta container">
            <div className="row">
              <div className="col-1-3">
                <div className="c-three-col-cta__content">
                  <div>
                    <h2 className="c-three-col-cta__header c-three-col-cta__header--blue">Open Conversations Can Save Lives</h2>
                    <p>If you’re struggling with your mental health or suicidal thoughts or know someone who is, you are not alone. Education programs help people talk about mental health and suicide prevention and understand ways to help. We must continue to develop opportunities to increase confidence around talking about our mental health and help seeking for suicide risk. Download and share.</p>
                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                    <figure className="c-social-card__figure">
                      <img src={placeholderImageBlue} alt="" className="c-social-card__image" />
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
                      <img src={placeholderImageBlue} alt="" className="c-social-card__image" />
                    </figure>
                    <div className="c-social-card__links">
                      <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                      <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="t-section-lg">
          <div className="c-three-col-cta container">
            <div className="row">
              <div className="col-1-3">
                <div className="c-three-col-cta__content">
                  <div>
                    <h2 className="c-three-col-cta__header c-three-col-cta__header--purple">Let Your Network Know</h2>
                    <p>We need your help. By advocating for more mental health and suicide prevention research, resources and access to care, including increased support for the new 988 Suicide & Crisis Lifeline, you can make a difference. Download and share.</p>
                  </div>
                </div>
              </div>
              <div className="col-1-3">
                <div className="c-social-card">
                    <figure className="c-social-card__figure">
                      <img src={placeholderImagePurple} alt="" className="c-social-card__image" />
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
                      <img src={placeholderImagePurple} alt="" className="c-social-card__image" />
                    </figure>
                    <div className="c-social-card__links">
                      <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                      <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share</span></Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="t-section-lg t-gray-image-background">
          <div className="c-one-col-block t-offset-bg t-offset-color-gradient container">
            <h2 className="c-one-col-block__header-title">
              <span>Wrap Up</span>
            </h2>
            <div className="c-one-col-block__content">
              <p>Now that you understand the data, learn more about this project and how you can take action.</p>
              <div className="c-one-col-block__resources">
                <div className="c-one-col-block__resources-links">
                  <Link to={'/'} className="o-resource-links o-resource-links--book-icon"><span>Find Resources</span></Link>
                </div>
                <div className="c-one-col-block__resources-links">
                  <Link to={'/'} className="o-resource-links o-resource-links--share-icon"><span>Share this Page</span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

    </Layout>
  )
}

export default IndexPage
