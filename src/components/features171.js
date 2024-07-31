import React from 'react'

import PropTypes from 'prop-types'

import './features171.css'

const Features171 = (props) => {
  return (
    <div className="features171-layout349 thq-section-padding">
      <div className="features171-max-width thq-section-max-width">
        <div className="features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features171-content">
          <div className="features171-section-title">
            <span>
              {props.feature1Slogan ?? (
                <fragment>
                  <span className="features171-text4 thq-body-small">
                    Promoting responsible AI practices
                  </span>
                </fragment>
              )}
            </span>
            <div className="features171-content1">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features171-text3 thq-heading-2">
                      Ethical AI Standards
                    </span>
                  </fragment>
                )}
              </h2>
              <p>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features171-text5 thq-body-large">
                      We advocate for the development and implementation of
                      ethical guidelines to ensure AI technologies benefit
                      society while upholding privacy, security, and fairness.
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

Features171.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTA2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Image depicting ethical standards',
  feature1Title: undefined,
  feature1Slogan: undefined,
  feature1Description: undefined,
}

Features171.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Features171
