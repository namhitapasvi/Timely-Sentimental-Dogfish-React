import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container"></div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="testimonial17-text12 thq-body-large">
                            John Smith
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            CEO, Tech Solutions Ltd.
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial17-text16 thq-body-small">
                        I have had the privilege to work closely with the
                        Consortium on various projects, and I must say their
                        dedication to responsible AI governance is truly
                        commendable.
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
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="testimonial17-text17 thq-body-large">
                            Emily Johnson
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="testimonial17-text13 thq-body-small">
                            Head of Research, AI Institute
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial17-text14 thq-body-small">
                        As an academic, I appreciate the emphasis the Consortium
                        places on capacity building and skills development in
                        the field of AI. Their efforts are shaping the future of
                        AI education.
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
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="testimonial17-text23 thq-body-large">
                            David Lee
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="testimonial17-text19 thq-body-small">
                            Professor of Computer Science
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial17-text22 thq-body-small">
                        Working with the Consortium has been a transformative
                        experience. Their focus on transparency and equity in AI
                        systems is crucial for addressing global challenges
                        effectively.
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
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="testimonial17-text21 thq-body-large">
                            Sarah Patel
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="testimonial17-text20 thq-body-small">
                            Policy Advisor, Ministry of Technology
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial17-text18 thq-body-small">
                        The Commonwealth AI Consortium stands out for its
                        collaborative approach towards driving AI innovation. I
                        have seen firsthand the positive impact they are making
                        in shaping a better future through AI.
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

Testimonial17.defaultProps = {
  author1Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author2Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  review2: undefined,
  author1Position: undefined,
  author2Alt: 'image',
  review1: undefined,
  author2Name: undefined,
  author3Alt: 'image',
  review4: undefined,
  author3Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author4Position: undefined,
  author4Name: undefined,
  author1Alt: 'image',
  review3: undefined,
  author4Alt: 'image',
  author3Name: undefined,
}

Testimonial17.propTypes = {
  author1Name: PropTypes.element,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.element,
  author1Src: PropTypes.string,
  review2: PropTypes.element,
  author1Position: PropTypes.element,
  author2Alt: PropTypes.string,
  review1: PropTypes.element,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
  author3Position: PropTypes.element,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review3: PropTypes.element,
  author4Alt: PropTypes.string,
  author3Name: PropTypes.element,
}

export default Testimonial17
