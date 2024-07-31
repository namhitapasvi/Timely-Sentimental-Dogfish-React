import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1>
              {props.heading1 ?? (
                <fragment>
                  <span className="hero8-text4 thq-heading-1">
                    Welcome to the Commonwealth AI Consortium
                  </span>
                </fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="hero8-text5 thq-body-large">
                    Empowering AI innovation across the Commonwealth
                  </span>
                </fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button">
                <span>
                  {props.action1 ?? (
                    <fragment>
                      <span className="hero8-text7 thq-body-small">
                        Learn More
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero8-button1">
                <span>
                  {props.action2 ?? (
                    <fragment>
                      <span className="hero8-text6 thq-body-small">
                        Explore Membership Plans
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <video
          src={props.videoSrc}
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          className="hero8-video"
        ></video>
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  heading1: undefined,
  videoSrc: '',
  content1: undefined,
  action2: undefined,
  action1: undefined,
}

Hero8.propTypes = {
  heading1: PropTypes.element,
  videoSrc: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero8
