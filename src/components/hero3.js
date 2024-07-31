import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-flex-row thq-section-max-width">
          <div className="hero3-column">
            <h1>
              {props.heading1 ?? (
                <fragment>
                  <span className="hero3-text4 thq-heading-1">
                    Welcome to the Commonwealth AI Consortium
                  </span>
                </fragment>
              )}
            </h1>
          </div>
          <div className="hero3-column1">
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="hero3-text6 thq-body-large">
                    Empowering AI innovation across the Commonwealth
                  </span>
                </fragment>
              )}
            </p>
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button">
                <span>
                  {props.action1 ?? (
                    <fragment>
                      <span className="hero3-text5 thq-body-small">
                        Learn More
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero3-button1">
                <span>
                  {props.action2 ?? (
                    <fragment>
                      <span className="hero3-text7 thq-body-small">
                        Join Us
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  heading1: undefined,
  action1: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1710993012037-8b00998c5130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTA2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
  image1Alt: 'Diverse group of people working together on computers',
}

Hero3.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero3
