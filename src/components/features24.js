import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container1 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 3 && (
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="features24-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal"
          >
            <div className="features24-divider-container">
              {activeTab === 0 && <div className="features24-container2"></div>}
            </div>
            <div className="features24-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features24-text4 thq-heading-2">
                      Capacity Building
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features24-text5 thq-body-small">
                      Empowering individuals and organizations with the
                      knowledge and skills to harness the potential of AI.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 1 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features24-text1 thq-heading-2">
                      Ethical Standards
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features24-text3 thq-body-small">
                      Promoting ethical guidelines and best practices to ensure
                      AI technologies are developed and used responsibly.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 2 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features24-text thq-heading-2">
                      Inclusive Technologies
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features24-text2 thq-body-small">
                      Advocating for the development of AI solutions that are
                      accessible and beneficial to all members of society.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features24-tab-horizontal3">
            <div className="features24-divider-container3">
              {activeTab === 3 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2>
                {props.feature1Title1 ?? (
                  <fragment>
                    <span className="features24-text6 thq-heading-2">
                      Capacity Building
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description1 ?? (
                  <fragment>
                    <span className="features24-text7 thq-body-small">
                      Empowering individuals and organizations with the
                      knowledge and skills to harness the potential of AI.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1721984209453-858624b7711e?ixid=M3w5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNzIyNDI5MDM3fA&ixlib=rb-4.0.3&w=1400',
  feature3Title: undefined,
  feature2Title: undefined,
  feature3Description: undefined,
  imageSrc: '/picture%201-1400w.png',
  feature2Description: undefined,
  imageAlt: 'image',
  feature2ImgAlt: 'image',
  feature1ImgAlt: 'feature 1',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400',
  feature1Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400',
  feature1Description: undefined,
  feature1Title1: undefined,
  feature1Description1: undefined,
  feature3ImgAlt: 'image',
}

Features24.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  imageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  imageAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
}

export default Features24
