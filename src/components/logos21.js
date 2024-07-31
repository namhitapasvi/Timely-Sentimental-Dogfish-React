import React from 'react'

import PropTypes from 'prop-types'

import './logos21.css'

const Logos21 = (props) => {
  return (
    <div className="logos21-container thq-section-padding">
      <div className="logos21-max-width thq-section-max-width">
        <h2>
          {props.heading1 ?? (
            <fragment>
              <span className="logos21-text1 thq-heading-2">Our Partners</span>
            </fragment>
          )}
        </h2>
        <div className="thq-grid-5">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos21-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos21-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos21-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos21-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos21-logo5 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos21.defaultProps = {
  logo3Alt: 'Partner Logo 3',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Partner Logo 1',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Alt: 'Partner Logo 5',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Alt: 'Partner Logo 4',
  heading1: undefined,
  logo2Alt: 'Partner Logo 2',
}

Logos21.propTypes = {
  logo3Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo2Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  heading1: PropTypes.element,
  logo2Alt: PropTypes.string,
}

export default Logos21
