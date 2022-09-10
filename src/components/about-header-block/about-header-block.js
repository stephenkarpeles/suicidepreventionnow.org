import React from "react";
import { Link } from "gatsby";
import './about-header-block.css';

const AboutHeaderBlock = () => {
  return (
    <>
      <div className="c-about-header-block container">
        <h1 className="c-about-header-block__header-title">
          About the Project
        </h1>
        <div className="c-about-content">
          <div className="c-about-content__col-left">
            <p>Cras id mauris malesuada nulla posuere posuere non ut ligula. Cras ut justo id lacus porta aliquet. Fusce in semper ex.</p>
          </div>
          <div className="c-about-content__col-right">
            <p>Lorem ipsum dolor sit amet, <Link to="/" className="o-body-text-link">consectetur adipiscing elit</Link> consectetur adipiscing elit. Aenean iaculis gravida nisl a imperdiet. Nullam congue sapien non nisl accumsan, in elementum elit semper. Pellentesque blandit lectus id dui ultrices, ut congue massa pellentesque. Nullam ut laoreet velit. In lacinia euismod felis eu consequat. Aenean iaculis gravida nisl a imperdiet. Nullam congue sapien non nisl accumsan, in elementum elit semper. Pellentesque blandit lectus id dui ultrices, ut congue massa pellentesque. Nullam ut laoreet velit. In lacinia euismod felis eu consequat.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHeaderBlock;