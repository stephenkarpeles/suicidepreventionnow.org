import React from "react";
import { Link } from "gatsby";
import './two-column-text-block.css';

const TwoColumnTextBlock = () => {
  return (
    <>
      <div className="c-two-col-block container">
        <div className="c-two-col-block__tab">
          <span>1. Introduction</span>
        </div>
        <h1 className="c-two-col-block__header-title">Introduction & Executive Summary</h1>
        <div className="c-two-col-block__content">
          <div className="c-two-col-block__body-text">
            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pharetra dolor, nec pellentesque tortor. Suspendisse vel interdum quam, a hendrerit magna. Sed semper lacinia orci finibus sagittis. Etiam nec nisl sodales, dictum neque sit amet, vehicula quam. Donec tempus a lorem nec volutpat. Aliquam suscipit consequat lectus et commodo. Aliquam nec lobortis purus. Quisque interdum erat id arcu scelerisque, in tincidunt ipsum dictum. Proin posuere venenatis lacus in cursus.</p>
            <p>Sed consequat neque sed nibh condimentum, eu lobortis ex hendrerit. Maecenas vestibulum sem quis ultricies luctus. Aenean finibus libero mi, ac tempor purus auctor vitae. Nulla euismod nunc vitae sapien aliquam ultricies. Sed malesuada eros mauris, imperdiet fermentum felis tincidunt sed. Sed ullamcorper feugiat odio, ac euismod tellus pharetra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec molestie lacus eu tortor faucibus, vitae facilisis ex tempor. Proin efficitur, velit eget ornare tristique, augue enim sollicitudin mauris, at dictum urna dui eu dolor. Proin sagittis consequat metus quis pellentesque. Cras lorem est, facilisis a faucibus ut, dapibus eu lacus. Integer sed nunc non erat aliquet interdum. Vestibulum volutpat arcu eu elit porttitor porta. Cras eget tempus felis, ac ultrices lorem. Nunc sagittis varius sapien, ac imperdiet quam aliquam eget.</p>
            <p>Ut aliquet magna et congue iaculis. Proin fermentum at libero porttitor molestie. Duis quis leo in nulla rutrum gravida non vel nibh. Mauris interdum venenatis ornare. Quisque libero orci, auctor eget aliquet consequat, tempus id magna. Sed auctor non elit eu porttitor. Nullam a tristique lectus. Vivamus pharetra nunc nec ex ornare molestie.</p>
          </div>
          <div className="c-cta-container">
            <div className="c-cta-container__link">
              <a href="">
                <span>
                  Let's get started
                </span>
                <span className="c-cta-container__svg">
                  <svg viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-circle-down"><rect width="24" height="24" opacity="0" /><path className="c-cta-container__svg" d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 .54.54 0 0 0 .16-.1.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45z"/><path className="c-cta-container__svg" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoColumnTextBlock;