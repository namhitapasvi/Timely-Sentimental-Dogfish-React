import React from 'react'

import PropTypes from 'prop-types'

import './testimonial171.css'

const Testimonial171 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial171-max-width thq-section-max-width">
        <div className="testimonial171-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="thq-heading-2">Customer Testimonials</span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="testimonial171-text23 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card"
              >
                <div className="testimonial171-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial171-image"
                  />
                  <div className="testimonial171-container03">
                    <strong>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="thq-body-large">John Doe</span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            CEO, Company ABC
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial171-text18 thq-body-small">
                        TeleportHQ has revolutionized the way we showcase our
                        products. The power and flexibility it offers are
                        unmatched.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card1"
              >
                <div className="testimonial171-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial171-image1"
                  />
                  <div className="testimonial171-container05">
                    <strong>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="thq-body-large">Jane Smith</span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Marketing Manager, Company XYZ
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial171-text16 thq-body-small">
                        I have been using TeleportHQ for a while now, and I must
                        say it has made my job so much easier. Highly
                        recommended.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card2"
              >
                <div className="testimonial171-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial171-image2"
                  />
                  <div className="testimonial171-container07">
                    <strong>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="thq-body-large">
                            Michael Johnson
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            CTO, Tech Solutions Inc.
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial171-text20 thq-body-small">
                        TeleportHQ&apos;s features are top-notch. It has helped
                        us streamline our product showcasing process and
                        increase efficiency.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card3"
              >
                <div className="testimonial171-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial171-image3"
                  />
                  <div className="testimonial171-container09">
                    <strong>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="thq-body-large">Sarah Williams</span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Creative Director, Design Studio
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial171-text14 thq-body-small">
                        I love how TeleportHQ allows us to bring our product
                        ideas to life with ease. It&apos;s a game-changer for
                        our team.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial171.defaultProps = {
  review4: undefined,
  author2Name: undefined,
  review2: undefined,
  author3Alt: 'image',
  author4Name: undefined,
  review1: undefined,
  author3Name: undefined,
  review3: undefined,
  heading1: undefined,
  author1Alt: 'image',
  author4Alt: 'image',
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  author2Position: undefined,
  content1: undefined,
  author3Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author4Position: undefined,
  author2Alt: 'image',
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author1Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author1Name: undefined,
}

Testimonial171.propTypes = {
  review4: PropTypes.element,
  author2Name: PropTypes.element,
  review2: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Name: PropTypes.element,
  review1: PropTypes.element,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author2Position: PropTypes.element,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.element,
  author2Src: PropTypes.string,
  author1Name: PropTypes.element,
}

export default Testimonial171
