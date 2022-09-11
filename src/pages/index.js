import React from "react"
import Fade from 'react-reveal/Fade'

import TwoColumnTextBlock from '../components/two-column-text-block/two-column-text-block';

// Components
import Layout from "../components/layout/layout"

const IndexPage = () => {

  return (
    <Layout pageTitle="AFSP Site">
      <Fade>
        <section>
          <div className="container">
            Test Homepage test
          </div>
        </section>
        <section>
          <TwoColumnTextBlock />
        </section>
      </Fade>
    </Layout>
  )
}

export default IndexPage
