import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="faq1-text20 thq-heading-2">FAQs</span>
              </fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="faq1-text15 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </span>
              </fragment>
            )}
          </p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p>
              {props.faq1Question ?? (
                <fragment>
                  <span className="faq1-text08 thq-body-large">
                    What is the Commonwealth AI Consortium?
                  </span>
                </fragment>
              )}
            </p>
            <span>
              {props.faq1Answer ?? (
                <fragment>
                  <span className="faq1-text09 thq-body-small">
                    The Commonwealth AI Consortium is an organization dedicated
                    to driving AI innovation across the Commonwealth while
                    promoting ethical standards, inclusive technologies, and
                    capacity building.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item2">
            <p>
              {props.faq2Question ?? (
                <fragment>
                  <span className="faq1-text19 thq-body-large">
                    What initiatives does the Consortium offer?
                  </span>
                </fragment>
              )}
            </p>
            <span>
              {props.faq2Answer ?? (
                <fragment>
                  <span className="faq1-text13 thq-body-small">
                    The Consortium offers initiatives for collaboration, skills
                    development, and responsible AI practices.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item3">
            <p>
              {props.faq3Question ?? (
                <fragment>
                  <span className="faq1-text05 thq-body-large">
                    What values does the Consortium emphasize?
                  </span>
                </fragment>
              )}
            </p>
            <span>
              {props.faq3Answer ?? (
                <fragment>
                  <span className="faq1-text14 thq-body-small">
                    The Consortium emphasizes transparency, equity, and
                    collaboration in shaping the future of AI.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item4">
            <p>
              {props.faq4Question ?? (
                <fragment>
                  <span className="faq1-text11 thq-body-large">
                    Frequently Asked Questions
                  </span>
                </fragment>
              )}
            </p>
            <span>
              {props.faq4Answer ?? (
                <fragment>
                  <span className="faq1-text06 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item5">
            <p>
              {props.faq5Question ?? (
                <fragment>
                  <span className="faq1-text07 thq-body-large">
                    Frequently Asked Questions
                  </span>
                </fragment>
              )}
            </p>
            <span>
              {props.faq5Answer ?? (
                <fragment>
                  <span className="faq1-text10 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </span>
                </fragment>
              )}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2>
              {props.heading2 ?? (
                <fragment>
                  <span className="faq1-text04 thq-heading-2">
                    Still have a question?
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <fragment>
                  <span className="faq1-text16 thq-body-large">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </fragment>
              )}
            </p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span>
                {props.action1 ?? (
                  <fragment>
                    <span className="faq1-text12 thq-body-small">Contact</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  heading2: undefined,
  faq3Question: undefined,
  faq4Answer: undefined,
  faq5Question: undefined,
  faq1Question: undefined,
  faq1Answer: undefined,
  faq5Answer: undefined,
  faq4Question: undefined,
  action1: undefined,
  faq2Answer: undefined,
  faq3Answer: undefined,
  content1: undefined,
  content2: undefined,
  faq2Question: undefined,
  heading1: undefined,
}

FAQ1.propTypes = {
  heading2: PropTypes.element,
  faq3Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq5Question: PropTypes.element,
  faq1Question: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq5Answer: PropTypes.element,
  faq4Question: PropTypes.element,
  action1: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq3Answer: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  faq2Question: PropTypes.element,
  heading1: PropTypes.element,
}

export default FAQ1
