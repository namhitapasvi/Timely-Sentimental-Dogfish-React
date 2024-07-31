import React from 'react'

import PropTypes from 'prop-types'

import './cta15.css'

const CTA15 = (props) => {
  return (
    <div className="cta15-container thq-section-padding">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta15-background-image thq-img-ratio-16-9"
      />
      <div className="cta15-max-width thq-section-max-width">
        <div className="cta15-column">
          <div className="cta15-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="cta15-text4 thq-heading-2">
                    Join the Commonwealth AI Consortium
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="cta15-text7 thq-body-large">
                    Become a member today and be part of a global community
                    driving AI innovation with ethics and inclusivity at its
                    core.
                  </span>
                </fragment>
              )}
            </p>
          </div>
          <div className="cta15-actions">
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <fragment>
                    <span className="cta15-text5">Sign Up Now</span>
                  </fragment>
                )}
              </span>
            </button>
            <button type="button" className="thq-button-outline">
              <span>
                {props.action2 ?? (
                  <fragment>
                    <span className="cta15-text6">Learn More</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA15.defaultProps = {
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1573221564365-b56f9a2c3090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTE5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  action1: undefined,
  backgroundImageAlt: 'Image of diverse group collaborating on AI',
  action2: undefined,
  content1: undefined,
}

CTA15.propTypes = {
  backgroundImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  backgroundImageAlt: PropTypes.string,
  action2: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA15
