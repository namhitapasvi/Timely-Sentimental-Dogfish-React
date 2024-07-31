import React from 'react'

import PropTypes from 'prop-types'

import './logos8.css'

const Logos8 = (props) => {
  return (
    <div className="logos8-container thq-section-padding">
      <div className="logos8-max-width thq-section-max-width">
        <div className="logos8-container1">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="logos8-text2 thq-heading-2">
                  Welcome to the Commonwealth AI Consortium
                </span>
              </fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="logos8-text3 thq-body-large">
                  Driving AI innovation across the Commonwealth while promoting
                  ethical standards, inclusive technologies, and capacity
                  building.
                </span>
              </fragment>
            )}
          </p>
        </div>
        <div className="logos8-container2 thq-grid-2">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos8-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos8-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos8-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos8-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos8-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos8-logo6 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo7Alt}
            src={props.logo7Src}
            className="logos8-logo7 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo8Alt}
            src={props.logo8Src}
            className="logos8-logo8 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos8.defaultProps = {
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Alt: 'Transparency Logo',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Commonwealth AI Consortium Logo',
  logo8Alt: 'Equity Logo',
  logo4Alt: 'Inclusive Technologies Logo',
  logo6Alt: 'Global Challenges Logo',
  heading1: undefined,
  logo2Alt: 'AI Innovation Logo',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Alt: 'Ethical Standards Logo',
  logo5Alt: 'Capacity Building Logo',
  content1: undefined,
}

Logos8.propTypes = {
  logo2Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo8Src: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo7Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo8Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  heading1: PropTypes.element,
  logo2Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Logos8
