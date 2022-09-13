import React from "react";
import { Link } from "gatsby";
import p1 from "../../images/american-foundation-suicide-prevention.png";
import p2 from "../../images/national-action-alliance.png";
import p3 from "../../images/suicide-prevention-resource-center.png";
import './partner-two-column.css';

const PartnerTwoColumn = props => {

  const partner = props.image;
  console.log(partner);

  return (
    <>
      <h2 className="o-partners-header">The Partners</h2>
      <div className="c-partners container">
        <div className="c-partners__col-left">
          <img src={p1} alt="American Foundation Suicide Prevention (AFSP)"/>
        </div>
        <div className="c-partners__col-right">
          <h3 className="c-partners__header-title">American Foundation Suicide Prevention (AFSP)</h3>
          <p>AFSP is dedicated to saving lives and bringing hope to those affected by suicide. AFSP creates a culture that’s smart about mental health through education and community programs, develops suicide prevention through research and advocacy, and provides support for those affected by suicide. Led by CEO Robert Gebbia and headquartered in New York, and with a public policy office in Washington, D.C., AFSP has local chapters in all 50 states with programs and events nationwide.</p>
          <p>Learn more about AFSP in its latest <Link to="/" target={"_blank"} className="o-body-text-link">Annual Report</Link>, and join the conversation on suicide prevention by following AFSP on <Link to="https://www.facebook.com/AFSPnational" target={"_blank"} className="o-body-text-link">Facebook</Link>, <Link to="https://twitter.com/afspnational" target={"_blank"} className="o-body-text-link">Twitter</Link>, <Link to="https://instagram.com/afspnational" target={"_blank"} className="o-body-text-link">Instagram</Link>, and <Link to="https://www.youtube.com/user/AFSPNational" target={"_blank"} className="o-body-text-link">YouTube</Link>.</p>
        </div>
      </div>
      <div className="c-partners container">
        <div className="c-partners__col-left">
          <img src={p2} alt="National Action Alliance for Suicide Prevention (Action Alliance)"/>
        </div>
        <div className="c-partners__col-right">
          <h3 className="c-partners__header-title">National Action Alliance for Suicide Prevention (Action Alliance)</h3>
          <p>The Action Alliance is the public-private partnership working to advance the National Strategy for Suicide Prevention and make suicide prevention a national priority. The Substance Abuse and Mental Health Services Administration (SAMHSA), through the Suicide Prevention Resource Center (SPRC) grant, provides funding to Education Development Center (EDC) to operate and manage the Secretariat for the Action Alliance, which was launched in 2010.</p>
          <p>Learn more at the <Link to="http://actionallianceforsuicideprevention.org/" target={"_blank"} className="o-body-text-link">Action Alliance website</Link> and join the conversation on suicide prevention by following the Action Alliance on <Link to="https://www.facebook.com/SuicidePreventionResourceCenter" target={"_blank"} className="o-body-text-link">Facebook</Link>, <Link to="https://twitter.com/Action_Alliance" target={"_blank"} className="o-body-text-link">Twitter</Link>, <Link to="https://www.linkedin.com/company/national-action-alliance-for-suicide-prevention" target={"_blank"} className="o-body-text-link">LinkedIn</Link>, and <Link to="https://www.youtube.com/TheActionAlliance" target={"_blank"} className="o-body-text-link">YouTube</Link>.</p>
        </div>
      </div>
      <div className="c-partners container">
        <div className="c-partners__col-left">
          <img src={p3} alt="American Foundation Suicide Prevention (AFSP)"/>
        </div>
        <div className="c-partners__col-right">
          <h3 className="c-partners__header-title">Suicide Prevention Resource Center (SPRC)</h3>
          <p>SPRC is the only federally funded resource center devoted to advancing the implementation of the National Strategy for Suicide Prevention. SPRC is supported through a grant from the U.S. Department of Health and Human Services’ Substance Abuse and Mental Health Services Administration <Link to="https://www.samhsa.gov/" target={"_blank"} className="o-body-text-link">(SAMHSA)</Link>. SPRC builds capacity and infrastructure for effective suicide prevention through consultation, training, and resources for state, tribal, health/behavioral health, and community systems; professionals and professional education programs; and national public and private partners and stakeholders.</p><p><Link to="https://sprc.org/" target={"_blank"} className="o-body-text-link">SPRC</Link> is housed at the University of Oklahoma Health Sciences Center <Link to="https://www.ouhsc.edu/" target={"_blank"} className="o-body-text-link">(OUHSC)</Link>. Follow SPRC on <Link to="https://www.facebook.com/ActionAlliance/" target={"_blank"} className="o-body-text-link">Facebook</Link>, <Link to="https://twitter.com/Action_Alliance" target={"_blank"} className="o-body-text-link">Twitter</Link>, <Link to="https://www.linkedin.com/company/national-action-alliance-for-suicide-prevention" target={"_blank"} className="o-body-text-link">LinkedIn</Link>, and <Link to="https://www.youtube.com/TheActionAlliance" target={"_blank"} className="o-body-text-link">YouTube</Link>.</p>
        </div>
      </div>
    </>
  )
}

export default PartnerTwoColumn;
