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
      <div className="c-partners container">
        <div className="c-partners__col-left">
          <img src={p1} alt="American Foundation Suicide Prevention (AFSP)"/>
        </div>
        <div className="c-partners__col-right">
          <h3 className="c-partners__header-title">American Foundation Suicide Prevention (AFSP)</h3>
          <p className="c-partners__body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum pretium augue et ultricies. Nunc iaculis enim enim, sed cursus lorem dapibus vel. Integer auctor orci sit amet dictum suscipit. Fusce dolor lacus, blandit a rhoncus id, viverra eu lacus. Morbi quis dignissim felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; id eros finibus scelerisque. Etiam vel sagittis erat, et dignissim urna.</p>
          <p className="c-partners__body-text">Cras sed enim sem. Vestibulum consequat nec elit eget aliquam. Vestibulum eu justo Curabitur gravida vulputate augue, a dictum enim luctus bibendum. Fusce nec consectetur velit, quis consectetur libero. <Link to="/" className="o-body-text-link">Vestibulum eu justo</Link>.</p>
        </div>
      </div>
      <div className="c-partners container">
        <div className="c-partners__col-left">
          <img src={p2} alt="National Action Alliance for Suicide Prevention (Action Alliance)"/>
        </div>
        <div className="c-partners__col-right">
          <h3 className="c-partners__header-title">National Action Alliance for Suicide Prevention (Action Alliance)</h3>
          <p className="c-partners__body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum pretium augue et ultricies. Nunc iaculis enim enim, sed cursus lorem dapibus vel. Integer auctor orci sit amet dictum suscipit. Fusce dolor lacus, blandit a rhoncus id, viverra eu lacus. Morbi quis dignissim felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; id eros finibus scelerisque. Etiam vel sagittis erat, et dignissim urna.</p>
          <p className="c-partners__body-text">Cras sed enim sem. Vestibulum consequat nec elit eget aliquam. Vestibulum eu justo Curabitur gravida vulputate augue, a dictum enim luctus bibendum. Fusce nec consectetur velit, quis consectetur libero. <Link to="/" className="o-body-text-link">Vestibulum eu justo</Link>.</p>
        </div>
      </div>
      <div className="c-partners container">
        <div className="c-partners__col-left">
          <img src={p3} alt="American Foundation Suicide Prevention (AFSP)"/>
        </div>
        <div className="c-partners__col-right">
          <h3 className="c-partners__header-title">Suicide Prevention Resource Center (SPRC)</h3>
          <p className="c-partners__body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum pretium augue et ultricies. Nunc iaculis enim enim, sed cursus lorem dapibus vel. Integer auctor orci sit amet dictum suscipit. Fusce dolor lacus, blandit a rhoncus id, viverra eu lacus. Morbi quis dignissim felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; id eros finibus scelerisque. Etiam vel sagittis erat, et dignissim urna.</p>
          <p className="c-partners__body-text">Cras sed enim sem. Vestibulum consequat nec elit eget aliquam. Vestibulum eu justo Curabitur gravida vulputate augue, a dictum enim luctus bibendum. Fusce nec consectetur velit, quis consectetur libero. <Link to="/" className="o-body-text-link">Vestibulum eu justo</Link>.</p>
        </div>
      </div>
    </>
  )
}

export default PartnerTwoColumn;
