import React from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container thq-section-padding">
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content thq-flex-row">
          <div className="contact101-content1">
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
                    Have a question or need support? Reach out to us!
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact101-content2 thq-flex-row">
          <div className="contact101-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact101-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <fragment>
                  <span className="contact101-text10 thq-heading-3">
                    TeleportHQ Headquarters
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    123 Main Street, City, Country
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact101-container2">
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
          <div className="contact101-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <fragment>
                  <span className="contact101-text08 thq-heading-3">
                    Customer Support Center
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    For any inquiries or assistance, contact our support team.
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact101-container4">
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

Contact101.defaultProps = {
  content1: undefined,
  location1Description: undefined,
  location2: undefined,
  heading1: undefined,
  location1ImageAlt: 'image1Alt',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  location1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location2Description: undefined,
  location2ImageAlt: 'image2Alt',
}

Contact101.propTypes = {
  content1: PropTypes.element,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
  heading1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
}

export default Contact101
