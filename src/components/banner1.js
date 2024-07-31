import React from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container thq-section-padding">
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container1">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="banner1-text2 thq-heading-2">
                  Welcome to the Commonwealth AI Consortium
                </span>
              </fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <fragment>
                <span className="banner1-text3 thq-heading-3">
                  Driving AI innovation across the Commonwealth while promoting
                  ethical standards, inclusive technologies, and capacity
                  building
                </span>
              </fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <fragment>
                <span className="banner1-text4">
                  Join us in shaping the future of AI
                </span>
              </fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default Banner1
