import React from 'react'

import PropTypes from 'prop-types'

import './cta1.css'

const CTA1 = (props) => {
  return (
    <div className="cta1-container thq-section-padding">
      <div className="cta1-max-width thq-section-max-width">
        <div className="cta1-content">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="cta1-text1 thq-heading-2">
                  Become a Member Today
                </span>
              </fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="cta1-text3 thq-body-large">
                  Unlock the potential of AI innovation by joining our
                  consortium and collaborating with like-minded professionals.
                </span>
              </fragment>
            )}
          </p>
          <div className="cta1-actions">
            <button className="thq-button-filled cta1-button">
              <span>
                {props.action1 ?? (
                  <fragment>
                    <span className="cta1-text thq-body-small">
                      Join the Consortium
                    </span>
                  </fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline cta1-button1">
              <span>
                {props.action2 ?? (
                  <fragment>
                    <span className="cta1-text2 thq-body-small">
                      Explore Our Programs
                    </span>
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

CTA1.defaultProps = {
  action1: undefined,
  heading1: undefined,
  action2: undefined,
  content1: undefined,
}

CTA1.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA1
