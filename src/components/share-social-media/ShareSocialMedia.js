import React, { useState } from "react";
import { Link } from "gatsby";
import {ShareSocial} from 'react-share-social';

import './share-social-media.css';

const ShareSocialMedia = (props) => {

  const [show, setShow] = useState(false);

  const handleClick = event => {
    setShow(current => !current);
  }

  const styleModal = {
    background: '#ffffff',
    borderRadius: 3,
    border: 0,
    color: '#363737',
    padding: '0 16px 16px',
    boxShadow: '0px 3px 6px 0px rgba(95,95,95,0.5)'
  };

  return (
    <>
      <div className="c-modal__container">
        <div className={`c-modal__reveal ${show ? 'c-modal__reveal--on' : 'c-modal__reveal--off'}`} onMouseLeave={() => setShow(false)}>
          <ShareSocial
              style={styleModal}
              title={'New Poll Data (mental health & suicide prevention).\n@afspnational @Action_Alliance @sprctweets\n\nLearn more:'}
              url={props.url}
              socialTypes={['facebook','twitter']}
            />
        </div>
        <div className="o-resource-links o-resource-links--share-icon" onClick={handleClick}><span>{props.linkText}</span></div>
      </div>
    </>
  )
}

export default ShareSocialMedia;