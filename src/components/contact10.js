import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="thq-heading-2">Contact Us</span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="thq-body-large">
                    For inquiries or partnership opportunities, please reach out
                    to us using the contact information below.
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <fragment>
                  <span className="contact10-text08 thq-heading-3">
                    London Office
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    123 Commonwealth Street, London, UK
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <fragment>
                  <span className="contact10-text06 thq-heading-3">
                    Singapore Office
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    456 Commonwealth Avenue, Singapore
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location2Description: undefined,
  location1ImageAlt: 'image1Alt',
  location1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  content1: undefined,
  location2ImageAlt: 'image2Alt',
  location1Description: undefined,
  heading1: undefined,
}

Contact10.propTypes = {
  location2: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact10