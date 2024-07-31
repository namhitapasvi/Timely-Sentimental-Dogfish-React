import React from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content">
          <div className="features18-section-title">
            <span>
              {props.feature1Slogan ?? (
                <fragment>
                  <span className="features18-text4 thq-body-small">
                    Driving Ethical Standards
                  </span>
                </fragment>
              )}
            </span>
            <div className="features18-content1">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features18-text5 thq-heading-2">
                      Ethical AI Practices
                    </span>
                  </fragment>
                )}
              </h2>
              <p>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features18-text3 thq-body-large">
                      Join us in promoting responsible and inclusive AI
                      technologies that benefit society while upholding ethical
                      standards.
                    </span>
                  </fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1589828994446-72390edc2143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTA1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Inclusive AI Innovation',
  feature1Slogan: undefined,
  feature1Title: undefined,
}

Features18.propTypes = {
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Slogan: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features18
