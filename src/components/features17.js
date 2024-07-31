import React from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div className="features17-layout349 thq-section-padding">
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <span>
              {props.feature1Slogan ?? (
                <fragment>
                  <span className="features17-text5 thq-body-small">
                    Promoting responsible AI practices
                  </span>
                </fragment>
              )}
            </span>
            <div className="features17-content1">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features17-text4 thq-heading-2">
                      Ethical AI Standards
                    </span>
                  </fragment>
                )}
              </h2>
              <p>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features17-text3 thq-body-large">
                      We advocate for the development and implementation of
                      ethical AI standards to ensure that AI technologies
                      benefit society while upholding fundamental human values.
                    </span>
                  </fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1Description: undefined,
  feature1ImageAlt: 'Image depicting ethical AI standards',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1712246754649-119c1cef4a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTA2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Slogan: undefined,
}

Features17.propTypes = {
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Slogan: PropTypes.element,
}

export default Features17
