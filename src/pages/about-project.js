import React from "react";
import Helmet from 'react-helmet'

// Components
import Layout from "../components/layout/layout";
import AboutHeaderBlock from "../components/about-header-block/about-header-block";
import PartnerTwoColumn from "../components/partner-two-column/partner-two-column";
import TwoColumnTextBlock from "../components/two-column-text-block/two-column-text-block";

const AboutProject = () => {

  return (
    <Layout pageTitle="AFSP Site - About The Project">
      <Helmet
          bodyAttributes={{
              class: 'about-project-page'
          }}
      />
      <section className="t-section-sm t-gray-image-background">
        <AboutHeaderBlock />
      </section>
      <section className="t-section-sm t-gradient-background">
        <PartnerTwoColumn />
      </section>
      <section className="t-section-sm t-gray-image-background">
        <TwoColumnTextBlock showLabel={false} anchorLink={''} header={[<>About the <span>2022 Survey Methodology</span></>]} bodyText={[<><p>This survey was conducted online within the United States by The Harris Poll on behalf of the National Action Alliance for Suicide Prevention, the American Foundation for Suicide Prevention, and the Suicide Prevention Resource Center from July 18 - 20, 2022 among 2,054 U.S. adults ages 18 and older. This online survey is not based on a probability sample and therefore no estimate of theoretical sampling error can be calculated.</p><p>Figures for age within gender, region, race/ethnicity, household income, education, marital status, and size of household were weighted where necessary to align them with their actual proportions in the population. Propensity score weighting was used to adjust for respondents' propensity to be online.</p><p>Respondents for this survey were selected from among those who have agreed to participate in Harris Poll surveys. The data have been weighted to reflect the composition of the adult population. Because the sample is based on those who agreed to participate in panels, no estimates of theoretical sampling error can be calculated.</p><p>The 2020 research was conducted utilizing the same research method among n=2,072 US Adults between July 22 - 24, 2020 – similar to the 2018 research among n=2,015 US Adults between August 28 - 30, 2018. No edits were made to the trended questions between 2018 and 2020.</p></>]}  />
      </section>
    </Layout>
  )
}

export default AboutProject;
