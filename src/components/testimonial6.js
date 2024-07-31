import React from 'react'

import PropTypes from 'prop-types'

import './testimonial6.css'

const Testimonial6 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial6-max-width thq-section-max-width">
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide swiper-slide"
            >
              <div className="testimonial6-card">
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial6-logo"
                />
                <p>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial6-text40 thq-body-large">
                        Joining the Commonwealth AI Consortium has been a
                        game-changer for our company. The resources and
                        networking opportunities have propelled our AI
                        initiatives to new heights.
                      </span>
                    </fragment>
                  )}
                </p>
                <div className="testimonial6-avatar">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content">
                    <span>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="testimonial6-text37 thq-body-small">
                            John Smith
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="testimonial6-text34 thq-body-small">
                            CEO, Tech Corp
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card1">
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial6-logo1"
                />
                <p>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial6-text41 thq-body-large">
                        As a researcher in the AI field, I appreciate the
                        emphasis on ethical standards and inclusivity that the
                        Consortium promotes. It&apos;s inspiring to be part of
                        such a forward-thinking community.
                      </span>
                    </fragment>
                  )}
                </p>
                <div className="testimonial6-avatar1">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content1">
                    <span>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="testimonial6-text35 thq-body-small">
                            Emily Chen
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="testimonial6-text31 thq-body-small">
                            Head of Research, Data Insights Ltd
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide1 swiper-slide"
            >
              <div className="testimonial6-card2">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo2"
                />
                <p>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial6-text36 thq-body-large">
                        The Consortium&apos;s focus on capacity building in AI
                        is commendable. The educational resources and training
                        programs have been invaluable in shaping the next
                        generation of AI professionals.
                      </span>
                    </fragment>
                  )}
                </p>
                <div className="testimonial6-avatar2">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content2">
                    <span>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="testimonial6-text30 thq-body-small">
                            David Patel
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="testimonial6-text33 thq-body-small">
                            Professor of Computer Science, University of
                            Techville
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card3">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo3"
                />
                <p>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial6-text38 thq-body-large">
                        Working with the Consortium has been a collaborative and
                        enriching experience. The initiatives to drive
                        responsible AI innovation align perfectly with our
                        government&apos;s goals.
                      </span>
                    </fragment>
                  )}
                </p>
                <div className="testimonial6-avatar3">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content3">
                    <span>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="testimonial6-text39 thq-body-small">
                            Sarah Johnson
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="testimonial6-text32 thq-body-small">
                            Government AI Policy Advisor
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide2 swiper-slide"
            >
              <div className="testimonial6-card4">
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial6-logo4"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar4">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image4 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content4">
                    <span>
                      <span>Author Name</span>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="testimonial6-text37 thq-body-small">
                            John Smith
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>Position, Company name</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide3 swiper-slide"
            >
              <div className="testimonial6-card5">
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial6-logo5"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar5">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image5 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content5">
                    <span>
                      <span>Author Name</span>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="testimonial6-text35 thq-body-small">
                            Emily Chen
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>Position, Company name</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide4 swiper-slide"
            >
              <div className="testimonial6-card6">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo6"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar6">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image6 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content6">
                    <span>
                      <span>Author Name</span>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="testimonial6-text30 thq-body-small">
                            David Patel
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="testimonial6-text33 thq-body-small">
                            Professor of Computer Science, University of
                            Techville
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide5 swiper-slide"
            >
              <div className="testimonial6-card7">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo7"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar7">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image7 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content7">
                    <span>
                      <span>Author Name</span>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="testimonial6-text39 thq-body-small">
                            Sarah Johnson
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="testimonial6-text32 thq-body-small">
                            Government AI Policy Advisor
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Testimonial6.defaultProps = {
  author3Name: undefined,
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Alt: 'Image of Emily Chen',
  author3Alt: 'Image of David Patel',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author4Alt: 'Image of Sarah Johnson',
  company3LogoAlt: 'Company Logo',
  company4LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author4Src:
    'https://images.unsplash.com/photo-1523371542221-b2965445c8f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  company2LogoAlt: 'Company Logo',
  author2Position: undefined,
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author4Position: undefined,
  author3Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  author2Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1636041282690-8404f759538e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Smith',
  company4LogoAlt: 'Company Logo',
  review3: undefined,
  company1LogoAlt: 'Company Logo',
  author1Name: undefined,
  review4: undefined,
  author4Name: undefined,
  review1: undefined,
  review2: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1626967175524-c0bf5d61b21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1N3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial6.propTypes = {
  author3Name: PropTypes.element,
  company1LogoSrc: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author4Alt: PropTypes.string,
  company3LogoAlt: PropTypes.string,
  company4LogoSrc: PropTypes.string,
  author4Src: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author2Position: PropTypes.element,
  company3LogoSrc: PropTypes.string,
  author4Position: PropTypes.element,
  author3Position: PropTypes.element,
  author3Src: PropTypes.string,
  author1Position: PropTypes.element,
  author2Name: PropTypes.element,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  company4LogoAlt: PropTypes.string,
  review3: PropTypes.element,
  company1LogoAlt: PropTypes.string,
  author1Name: PropTypes.element,
  review4: PropTypes.element,
  author4Name: PropTypes.element,
  review1: PropTypes.element,
  review2: PropTypes.element,
  author1Src: PropTypes.string,
}

export default Testimonial6
