// Base
import React from "react"
import Fade from 'react-reveal/Fade'

// Components
import Layout from "../components/layout/layout"
import TwoColumnTextBlock from '../components/two-column-text-block/two-column-text-block';

// Styles
import '../components/section-intro-block/section-intro-block.css';

// Images
import imgWomanDog from '../images/woman-dog-bed.jpg'

const IndexPage = () => {

  return (
    <Layout pageTitle="AFSP Site">
     
        <section>
          <div className="container">
            Test Homepage test
          </div>
        </section>
        
        <Fade>
          <section>
          <TwoColumnTextBlock showLabel={true} anchorLink={''} header={'Introduction & Executive Summary'} bodyText={[<><p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra dolor, nec pellentesque tortor. Suspendisse vel interdum quam, a hendrerit magna. Sed semper lacinia orci finibus sagittis. Etiam nec nisl sodales, dictum neque sit amet, vehicula quam. Donec tempus a lorem nec volutpat. Aliquam suscipit consequat lectus et commodo. Aliquam nec lobortis purus. Quisque interdum erat id arcu scelerisque, in tincidunt ipsum dictum. Proin posuere venenatis lacus in cursus.</p><p>Sed consequat neque sed nibh condimentum, eu lobortis ex hendrerit. Maecenas vestibulum sem quis ultricies luctus. Aenean finibus libero mi, ac tempor purus auctor vitae. Nulla euismod nunc vitae sapien aliquam ultricies. Sed malesuada eros mauris, imperdiet fermentum felis tincidunt sed. Sed ullamcorper feugiat odio, ac euismod tellus pharetra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec molestie lacus eu tortor faucibus, vitae facilisis ex tempor. Proin efficitur, velit eget ornare tristique, augue enim sollicitudin mauris, at dictum urna dui eu dolor. Proin sagittis consequat metus quis pellentesque. Cras lorem est, facilisis a faucibus ut, dapibus eu lacus. Integer sed nunc non erat aliquet interdum. Vestibulum volutpat arcu eu elit porttitor porta. Cras eget tempus felis, ac ultrices lorem. Nunc sagittis varius sapien, ac imperdiet quam aliquam eget.</p><p>Ut aliquet magna et congue iaculis. Proin fermentum at libero porttitor molestie. Duis quis leo in nulla rutrum gravida non vel nibh. Mauris interdum venenatis ornare. Quisque libero orci, auctor eget aliquet consequat, tempus id magna. Sed auctor non elit eu porttitor. Nullam a tristique lectus. Vivamus pharetra nunc nec ex ornare molestie.</p></>]}  />
          </section>
        </Fade>

        <Fade>
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
                      <span class="sr-only">Based</span> on public perception polling of attitudes and behaviors about mental health and suicide, gains have been made in how people are valuing mental health while there are reported increases in barriers to care and societal beliefs about mental health and suicide.</p>
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
        </Fade>
      
    </Layout>
  )
}

export default IndexPage
