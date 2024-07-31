import React from 'react'

import PropTypes from 'prop-types'

import './testimonial13.css'

const Testimonial13 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial13-max-width thq-section-max-width">
        <div className="testimonial13-section-title">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="testimonial13-text08 thq-heading-2">
                  Testimonials
                </span>
              </fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="testimonial13-text06 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </fragment>
            )}
          </p>
        </div>
        <div className="testimonial13-container thq-flex-row">
          <div className="testimonial13-content thq-flex-column">
            <div className="testimonial13-stars">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p>
              {props.review1 ?? (
                <fragment>
                  <span className="testimonial13-text09 thq-body-large">
                    Being part of the Commonwealth AI Consortium has been an
                    incredible experience. The collaborative environment and
                    focus on ethical AI have truly set a new standard in the
                    industry.
                  </span>
                </fragment>
              )}
            </p>
            <div className="testimonial13-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial13-avatar-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial13-avatar-content">
                <span>
                  {props.author1Name ?? (
                    <fragment>
                      <span className="testimonial13-text10 thq-body-small">
                        John Smith
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.author1Position ?? (
                    <fragment>
                      <span className="testimonial13-text12 thq-body-small">
                        AI Developer
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial13-logo"
              />
            </div>
          </div>
          <div className="testimonial13-content1 thq-flex-column">
            <div className="testimonial13-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p>
              {props.review2 ?? (
                <fragment>
                  <span className="testimonial13-text07 thq-body-large">
                    I have learned so much through the Consortium&apos;s skills
                    development programs. The emphasis on responsible AI
                    practices is commendable and has broadened my perspective on
                    AI technologies.
                  </span>
                </fragment>
              )}
            </p>
            <div className="testimonial13-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial13-avatar-image1 thq-img-round"
              />
              <div className="testimonial13-avatar-content1">
                <span>
                  {props.author2Name ?? (
                    <fragment>
                      <span className="testimonial13-text11 thq-body-small">
                        Emily Johnson
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.author2Position ?? (
                    <fragment>
                      <span className="testimonial13-text13 thq-body-small">
                        Data Scientist
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial13-logo1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial13.defaultProps = {
  company1LogoAlt: 'Company Logo for John Smith',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Alt: 'Image of Emily Johnson',
  content1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1546881963-ac8d67aee789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTMwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  heading1: undefined,
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1513483460609-1c8a505ea990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTMwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author2Name: undefined,
  company2LogoAlt: 'Company Logo for Emily Johnson',
  author1Alt: 'Image of John Smith',
  author1Position: undefined,
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Position: undefined,
}

Testimonial13.propTypes = {
  company1LogoAlt: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.element,
  author1Src: PropTypes.string,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  author1Name: PropTypes.element,
  author2Name: PropTypes.element,
  company2LogoAlt: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.element,
  company1LogoSrc: PropTypes.string,
  author2Position: PropTypes.element,
}

export default Testimonial13
