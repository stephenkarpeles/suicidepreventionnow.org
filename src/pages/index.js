// Base
import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout/layout";
import TwoColumnTextBlock from "../components/two-column-text-block/two-column-text-block";
import VerticalBarRechart from "../components/vertical-bar-chart/vertical.bar.rechart";
import HorizontalBarChart from "../components/horizontal-bar-chart/horizontal-bar-chart";
import ShareSocialMedia from "../components/share-social-media/ShareSocialMedia";

// Styles
import '../components/section-intro-block/section-intro-block.css';
import '../components/single-column-text-block/single-column-text-block.css';
import '../components/social-media-3col/social-media-3col.css';
import '../components/downloadable-resources/downloadable-resources.css';
import '../components/three-column-cta/three-column-cta.css';
import '../components/three-row-block/three-row-block.css';
import '../components/two-column-card/two-column-card.css';
import '../components/single-column-section-cta/single-column-section-cta.css';
import '../components/num-highlight/num-highlight.css';
import '../components/vertical-bar-chart/vertical-bar-chart.css';
import '../components/horizontal-bar-chart/horizontal-bar-chart.css';

// Images
import {
placeholderImage,
placeholderImageBlue,
placeholderImagePurple ,
imgWomanDog,
twoOut3,
eightOut10,
peopleImage,
firstAidKit,
covidIcon,
chatBubble,
twoHearts,
exclamationPoint,
bookPencil,
medicalShield,
heartBrain } from '../indexImages';

const IndexPage = () => {

  return (
    <Layout pageTitle="AFSP Site">
        <section className="t-section-sm t-gray-image-background">
          <TwoColumnTextBlock showLabel={true} anchorLink={''} header={'Introduction & Executive Summary'} bodyText={[<><p>Since 2015, the American Foundation for Suicide Prevention (AFSP), the National Action Alliance for Suicide Prevention (Action Alliance), and the Suicide Prevention Resource Center (SPRC) have commissioned The Harris Poll bi-annually to conduct nationally representative surveys of adults in the U.S. The survey’s purpose is to understand what the public knows about mental health and suicide – and ways to support someone who is struggling – while uncovering the public’s beliefs and attitudes toward help seeking for themselves and others, sharing experiences, talking about mental health and understanding barriers that may prevent them from helping someone at risk for suicide. The poll also helps inform the public’s usage, expectations, and barriers to using crisis services.</p><p>In the latest poll (2022) we take an early pulse on public awareness of 988, the new Suicide & Crisis Lifeline, and we explore changes in knowledge and attitudes and assess the impact of unified suicide prevention messaging efforts over time. We find that gains have been made in valuing mental health on a personal level, but that society lags. We find a strong desire to help but also equally strong reservations against doing so. And we learn that access to care is seen as the leading barrier to getting help.</p><p>Overall, the poll indicates that there is much progress being made, but there is more to do. We must continue to learn about suicide through research, teach others how to help with innovative mental health and suicide prevention education programs, and advocate for improved access to care and robust crisis services.</p></>]}  />
        </section>
        <section id="section2" className="section-intro-block">
          <div className="container">
            <div className="section-intro-block__grid row">
              <div className="section-intro-block__col-left col-7-12">
                <div id="know-the-facts" className="section-intro-block__tag section-intro-block__tag--green">
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
                  <ShareSocialMedia linkText={'Share this Topic'} url={'https://suicidepreventionnow.org/#know-the-facts'} />
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
        <section id="section3"  className="t-section-lg">
          <div className="c-num-highlight container">
            <h2 className="c-num-highlight__headerH2 c-num-highlight__dark-green">More People Believe that Suicide Can be Prevented and Want to Take Action to Help</h2>
            <h3 className="c-num-highlight__headerH3 c-num-highlight__green">Most people report that suicide can be prevented, at least sometimes</h3>
            <div className="row c-num-highlight__row">
              <div className="col-1-3">
                <p className="c-num-highlight__stats-num c-num-highlight__green">94<span>%</span></p>
              </div>
              <div className="col-1-3">
                <p className="c-num-highlight__stats-text c-num-highlight__dark-green">believe that suicide can be prevented at least sometimes</p>
              </div>
              <div className="col-1-3">
                <img src={twoHearts} alt="Heart icon" className="c-num-highlight__image" />
              </div>
            </div>
            <div className="row c-num-highlight__row c-num-highlight__row--reverse">
              <div className="col-1-3">
                <p className="c-num-highlight__stats-num c-num-highlight__green">75<span>%</span></p>
              </div>
              <div className="col-1-3">
                <p className="c-num-highlight__stats-text c-num-highlight__dark-green">Three-quarters of U.S. adults (75%, more than in previous years) say that most people who die by suicide usually show some signs beforehand</p>
              </div>
              <div className="col-1-3">
                <img src={exclamationPoint} alt="Exclamation icon" className="c-num-highlight__image" />
              </div>
            </div>
            <div className="row c-num-highlight__row">
              <div className="col-1-3">
                <p className="c-num-highlight__stats-num c-num-highlight__green">96<span>%</span></p>
              </div>
              <div className="col-1-3">
                <p className="c-num-highlight__stats-text c-num-highlight__dark-green">More and more U.S. adults overtime (96% in 2022) would take action to help prevent suicide if someone close to them was thinking about suicide</p>
              </div>
              <div className="col-1-3">
                <img src={chatBubble} alt="Chat bubbles icon" className="c-num-highlight__image" />
              </div>
            </div>
          </div>
        </section>
        <section id="section4" className="t-section-sm t-gray-image-background">
          <div className="c-vertical-bar-chart container">
            <h2 className="c-vertical-bar-chart__headerH2 c-vertical-bar-chart__headerH2--green">
              Recognizing mental health conditions
            </h2>
              <div className="c-vertical-bar-chart__content">
                <div className="c-vertical-bar-chart__row row">
                  <div className="col-5-12">
                    <VerticalBarRechart />
                  </div>
                  <div className="col-5-12 c-vertical-bar-chart__row-mb">
                    <h3 className="c-vertical-bar-chart__header">More people report they have or have had a mental health condition</h3>
                    <p>67% believe that they have had a mental health condition at some point in their life (up from 2018 and 2020). Over 40% of respondents said they had experienced anxiety and/or depression.</p>
                  </div>
                  <div className="col-1-10">
                    <img src={heartBrain} alt="Heart brain icon" className="c-vertical-bar-chart__image" />
                  </div>
                </div>
                <div className="c-vertical-bar-chart__download-cta">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                </div>
              </div>
          </div>
        </section>
        <section className="t-section-lg t-green-image-bg">
          <div className="c-single-col-cta container">
            <div className="c-single-col-cta__row row">
              <div className="col-2-3">
                <div className="c-single-col-cta__content">
                  <h2 className="c-single-col-cta__header">Know the Facts</h2>
                  <p>The change in the public's perception of and knowledge about suicide is encouraging. More people have a greater understanding of the importance of mental health and are willing to talk about it. Over time a greater number of people are recognizing that they may have a mental health condition and are taking steps - such as seeking professional care, supporting self-care routines and talking more openly about mental health with their friends and loved ones.</p>
                  <p><Link to={"/"} target={'_blank'} className="c-single-col-cta__link">Learn more</Link> about the data and the public's perceptions about these issues</p>
                </div>
                <div className="c-single-col-cta__social-links">
                  <Link to={'/'} className="o-resource-links o-resource-links--book-icon"><span>Find Resources</span></Link>
                  <ShareSocialMedia linkText={'Share this Topic'} url={'https://suicidepreventionnow.org'} />
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
                      <ShareSocialMedia linkText={'Share'} url={'https://suicidepreventionnow.org'} />
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
                      <ShareSocialMedia linkText={'Share'} url={'https://suicidepreventionnow.org'} />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="t-section-sm t-gray-image-background">
          <div className="c-three-row-block container">
            <h2 className="c-three-row-block__headerH2 c-three-row-block__headerH2--blue">
              People are eager to help but unsure how
            </h2>
              <div className="c-content-stats">
                <div className="c-content-stats__row row">
                  <div className="col-1-2">
                    <h3 className="c-content-stats__headerH3 c-content-stats__headerH3--blue">2 out of 3 adults</h3>
                    <p>Adults believe they don't have enough knowledge about suicide to talk about it with someone who may be struggling</p>
                  </div>
                  <div className="col-1-2">
                    <img src={twoOut3} alt="2 out of 3 adults" className="c-content-stats__image" />
                  </div>
                </div>
                <div className="c-content-stats__row row">
                  <div className="col-1-2">
                    <h3 className="c-content-stats__headerH3 c-content-stats__headerH3--light-blue">But 8 out of 10</h3>
                    <p>Adults are open to learning how they can do more to help someone in need</p>
                  </div>
                  <div className="col-1-2">
                    <img src={eightOut10} alt="But 8 out of 10" className="c-content-stats__image" />
                  </div>
                </div>
                <div className="c-content-stats__row row">
                  <div className="col-full-width">
                    <p>People need to know how to help, which is why we must continue to advocate for additional funding for educational resources and programming to teach the public what they can do to help prevent suicide.</p>
                  </div>
                </div>
                <div className="c-content-stats__download-cta">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
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
                    <p>If you're struggling with your mental health or suicidal thoughts or know someone who is, you are not alone. Education programs help people talk about mental health and suicide prevention and understand ways to help. We must continue to develop opportunities to increase confidence around talking about our mental health and help seeking for suicide risk. Download and share.</p>
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
                      <ShareSocialMedia linkText={'Share'} url={'https://suicidepreventionnow.org'} />
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
                      <ShareSocialMedia linkText={'Share'} url={'https://suicidepreventionnow.org'} />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section id="take-action" className="t-section-lg t-blue-image-bg">
          <div className="c-single-col-cta container">
            <div className="c-single-col-cta__row row">
              <div className="col-2-3">
                <div className="c-single-col-cta__content">
                  <h2 className="c-single-col-cta__header">Take Action</h2>
                  <p>80% of people surveyed are eager to learn ways to help prevent suicide, and 94 percent of people also believe that suicide may be prevented. Together, these statistics are a powerful force for change. More education is needed to close the gap between people who are eager to help and those who feel equipped to do so. Empowering people to have conversations about mental health and suicide prevention can save lives.</p>
                  <p><Link to={"/"} target={'_blank'} className="c-single-col-cta__link">Learn more</Link> about how you can be there for yourself and others.</p>
                </div>
                <div className="c-single-col-cta__social-links">
                  <Link to={'/'} className="o-resource-links o-resource-links--book-icon"><span>Find Resources</span></Link>
                  <ShareSocialMedia linkText={'Share this Topic'} url={'https://suicidepreventionnow.org/#take-action'} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="t-section-sm t-gray-image-background">
          <div className="c-three-row-block container">
            <h2 className="c-three-row-block__headerH2 c-three-row-block__headerH2--purple">
              Understanding perceived barriers to care
            </h2>
              <div className="c-content-quotes">
                <div className="c-content-quotes__row row">
                  <div className="col-full-width">
                    <h3 className="c-content-quotes__headerH3">
                      What respondents are saying&hellip;
                    </h3>
                  </div>
                </div>
                <div className="c-content-quotes__row row">
                  <div className="col-1-4">
                    <h3 className="c-content-quotes__headerH3  c-content-quotes__headerH3--purple">Barriers</h3>
                  </div>
                  <div className="col-1-4">
                    <figure className="c-quote__container">
                      <blockquote className="c-quote__block c-quote__block--white-bg">
                        <p className="c-quote__quote">States need to step up and do something [to reduce barriers]</p>
                        <div className="c-quote__block--bubble-point c-quote__block--white-bg"></div>
                      </blockquote>
                      <figcaption className="c-quote__caption">
                        69-year-old Male
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-1-4">
                    <figure className="c-quote__container">
                      <blockquote className="c-quote__block c-quote__block--white-bg">
                        <p className="c-quote__quote">[People feel they are] isolated or they are only one</p>
                        <div className="c-quote__block--bubble-point c-quote__block--white-bg"></div>
                      </blockquote>
                      <figcaption className="c-quote__caption">
                        55-year-old Male
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-1-4">
                    <figure className="c-quote__container">
                      <blockquote className="c-quote__block c-quote__block--white-bg">
                        <p className="c-quote__quote">Family isn't there for them</p>
                        <div className="c-quote__block--bubble-point c-quote__block--white-bg"></div>
                      </blockquote>
                      <figcaption className="c-quote__caption">
                        29-year-old Female
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="c-content-quotes__row row">
                  <div className="col-1-4">
                    <h3 className="c-content-quotes__headerH3 c-content-quotes__headerH3--purple">Solutions</h3>
                  </div>
                  <div className="col-1-4">
                    <figure className="c-quote__container">
                      <blockquote className="c-quote__block c-quote__block--purple-bg">
                        <p className="c-quote__quote">[Provide] better education on overall health</p>
                        <div className="c-quote__block--bubble-point c-quote__block--bubble-point-flip c-quote__block--purple-bg"></div>
                      </blockquote>
                      <figcaption className="c-quote__caption c-quote__caption--flip">
                        66-year-old Female
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-1-4">
                    <figure className="c-quote__container">
                      <blockquote className="c-quote__block c-quote__block--purple-bg">
                        <p className="c-quote__quote">[Make] mental healthcare easy and affordable</p>
                        <div className="c-quote__block--bubble-point c-quote__block--bubble-point-flip c-quote__block--purple-bg"></div>
                      </blockquote>
                      <figcaption className="c-quote__caption c-quote__caption--flip">
                        59-year-old Male
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-1-4">
                    <figure className="c-quote__container">
                      <blockquote className="c-quote__block c-quote__block--purple-bg">
                        <p className="c-quote__quote">Make it less of a stigma</p>
                        <div className="c-quote__block--bubble-point c-quote__block--bubble-point-flip c-quote__block--purple-bg"></div>
                      </blockquote>
                      <figcaption className="c-quote__caption c-quote__caption--flip">
                        33-year-old Female
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="c-content-quotes__row row">
                  <div className="col-1-4">
                    <img src={peopleImage} alt="group of people" className="c-content-quotes__image" />
                  </div>
                  <div className="c-content-quotes__statement col-1-2">
                    <p><strong>Over 60 percent of people</strong> believe we need to provide better access to mental health care (e.g., talk therapy, couples counseling, family therapy, tele-therapy). But with the number of barriers to care, not enough people have access to the care they need.</p>
                  </div>
                  <div className="col-1-4">
                    <div className="c-content-quotes__download-cta">
                      <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section  className="t-section-lg">
          <div className="c-num-highlight container">
            <h2 className="c-num-highlight__headerH2 c-num-highlight__dark-purple">We can reduce suicide risk</h2>
            <div className="row c-num-highlight__row c-num-highlight__row--reverse">
              <div className="col-1-3">
                <p className="c-num-highlight__stats-num c-num-highlight__purple">93<span>%</span></p>
              </div>
              <div className="col-1-3">
                <p className="c-num-highlight__stats-text c-num-highlight__dark-purple">Nearly all respondents feel more training and education for professionals and/or access to care can help reduce number of deaths by suicide.</p>
              </div>
              <div className="col-1-3">
                <img src={bookPencil} alt="Book pencil icon" className="c-num-highlight__image" />
              </div>
            </div>
            <div className="row c-num-highlight__row">
              <div className="col-1-3">
                <p className="c-num-highlight__stats-num c-num-highlight__purple">94<span>%</span></p>
              </div>
              <div className="col-1-3">
                <p className="c-num-highlight__stats-text c-num-highlight__dark-purple">of people believe suicide can be prevented, and almost the same number believe more can and needs to be done.</p>
              </div>
              <div className="col-1-3">
                <img src={medicalShield} alt="Medical shield icon" className="c-num-highlight__image" />
              </div>
            </div>
          </div>

          <div className="c-horizontal-bar-chart container">
            <h2 className="c-horizontal-bar-chart__headerH2 c-horizontal-bar-chart__headerH2--purple">
              Demanding more for mental health
            </h2>
              <div className="c-horizontal-bar-chart__content">
                <div className="row row--justify-content-center">
                  <div className="col-5-6">
                    <h3 className="c-num-highlight__stats-text c-num-highlight__dark-purple">Clear trends developed when respondents were asked what actions are most important in removing barriers to seeking help and preventing suicide.</h3>
                  </div>
                </div>

                <div className="c-horizontal-bar-chart__row row">
                  <div className="col-1-6">
                    <img src={heartBrain} alt="Heart brain icon" className="c-horizontal-bar-chart__image" />
                  </div>
                  <div className="col-5-6">
                    <HorizontalBarChart/>
                  </div>
                  
                </div>
                <div className="c-horizontal-bar-chart__download-cta">
                    <Link to={'/'} className="o-resource-links o-resource-links--down-arrow-icon"><span>Download this chart</span></Link>
                </div>
              </div>
            </div>

        </section>
        <section>
          <div className="c-two-column-card container">
            <div className="row">
              <div className="col-1-2">
                <div className="c-two-column-card__card">
                  <h3 className="c-two-column-card__header">Access vs affordable treatment</h3>
                  <p>Nearly half of respondents (46%) believe lack of affordable treatment keeps people who are thinking about suicide from seeking help, while another 44 percent believe lack of access to treatment is what keeps people who are thinking about suicide from seeking help.</p>
                  <img src={firstAidKit} alt="" className="c-two-column-card__image" />
                </div>
              </div>
              <div className="col-1-2">
                <div className="c-two-column-card__card">
                  <h3 className="c-two-column-card__header">People who want access can’t get it</h3>
                  <p>81% of respondents are more aware of the importance of mental health care in the wake of the pandemic, but half have found it is more difficult to access the mental health care they need.</p>
                  <img src={covidIcon} alt="" className="c-two-column-card__image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="advocate-for-change" className="t-section-lg t-purple-image-bg">
          <div className="c-single-col-cta container">
            <div className="c-single-col-cta__row row">
              <div className="col-2-3">
                <div className="c-single-col-cta__content">
                  <h2 className="c-single-col-cta__header">Advocate for Change</h2>
                  <p>More than ever, people are recognizing the importance of and need for taking care of their mental health. However, they’re finding that the support system we have in place is not adequate to fill that need. We must continue to advocate for increasing access to care and improving the training available to all health care professionals so that those who make the brave choice to seek care are able to receive it.</p>
                  <p><Link to={"/"} target={'_blank'} className="c-single-col-cta__link">Become a</Link> mental health and suicide prevention advocate.</p>
                </div>
                <div className="c-single-col-cta__social-links">
                  <Link to={'/'} className="o-resource-links o-resource-links--book-icon"><span>Find Resources</span></Link>
                  <ShareSocialMedia linkText={'Share this Topic'} url={'https://suicidepreventionnow.org/#advocate-for-change'} />
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
                      <ShareSocialMedia linkText={'Share'} url={'https://suicidepreventionnow.org'} />
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
                      <ShareSocialMedia linkText={'Share'} url={'https://suicidepreventionnow.org'} />
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
                <ShareSocialMedia linkText={'Share this Page'} url={'https://suicidepreventionnow.org'} />
                </div>
              </div>
            </div>
          </div>
        </section>

    </Layout>
  )
}

export default IndexPage
