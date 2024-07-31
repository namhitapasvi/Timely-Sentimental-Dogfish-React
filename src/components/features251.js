import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features251.css'

const Features251 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features251-container1 thq-section-max-width">
        <div className="features251-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features251-tab-horizontal"
          >
            <div className="features251-divider-container">
              {activeTab === 0 && (
                <div className="features251-container2"></div>
              )}
            </div>
            <div className="features251-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features251-text2 thq-heading-2">
                      Product Showcase
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features251-text4 thq-body-small">
                      Highlight your products in a visually appealing way to
                      showcase their power.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features251-tab-horizontal1"
          >
            <div className="features251-divider-container1">
              {activeTab === 1 && (
                <div className="features251-container3"></div>
              )}
            </div>
            <div className="features251-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features251-text thq-heading-2">
                      Step-by-Step Directions
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features251-text3 thq-body-small">
                      Provide clear directions on how to use the products
                      effectively to maximize their potential.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features251-tab-horizontal2"
          >
            <div className="features251-divider-container2">
              {activeTab === 2 && (
                <div className="features251-container4"></div>
              )}
            </div>
            <div className="features251-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features251-text1 thq-heading-2">
                      TeleportHQ Integration
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features251-text5 thq-body-small">
                      Seamlessly integrate TeleportHQ to create stunning landing
                      pages for your products with ease.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features251-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features251-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features251-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features251-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features251.defaultProps = {
  feature2Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400',
  feature3Title: undefined,
  feature3ImgAlt: 'image',
  feature1Title: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  feature2ImgAlt: 'image',
  feature1ImgAlt: 'feature 1',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400',
  feature3Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1NHx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1400',
}

Features251.propTypes = {
  feature2Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
}

export default Features251
