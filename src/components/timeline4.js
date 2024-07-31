import React from 'react'

import PropTypes from 'prop-types'

import './timeline4.css'

const Timeline4 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="timeline4-max-width thq-section-max-width">
        <div className="timeline4-container01">
          <h2>
            {props.title1 ?? (
              <fragment>
                <span className="timeline4-text30 thq-heading-2">
                  Our Journey
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="timeline4-text32 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </span>
              </fragment>
            )}
          </span>
          <div className="timeline4-container02">
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <fragment>
                    <span className="timeline4-text21">Primary action</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="timeline4-timeline-container">
          <div className="timeline4-step1">
            <div className="timeline4-container03">
              <div className="timeline4-container04"></div>
              <div className="timeline4-progress0"></div>
            </div>
            <div className="timeline4-container05">
              <h3>
                {props.date1 ?? (
                  <fragment>
                    <span className="timeline4-text22 thq-heading-3">
                      April 2023
                    </span>
                  </fragment>
                )}
              </h3>
              <h3>
                {props.card1Heading ?? (
                  <fragment>
                    <span className="timeline4-text19 thq-heading-3">
                      Formation of the Consortium
                    </span>
                  </fragment>
                )}
              </h3>
              <span>
                {props.card1Content ?? (
                  <fragment>
                    <span className="timeline4-text28 thq-body-small">
                      Founding members come together to establish the
                      Commonwealth AI Consortium with a vision for driving AI
                      innovation.
                    </span>
                  </fragment>
                )}
              </span>
              <div className="timeline4-container06">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card1Action1 ?? (
                      <fragment>
                        <span className="timeline4-text36">Learn More</span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="timeline4-step2">
            <div className="timeline4-container07">
              <div className="timeline4-container08"></div>
              <div className="timeline4-progress01"></div>
            </div>
            <div className="timeline4-container09">
              <h3>
                {props.date2 ?? (
                  <fragment>
                    <span className="timeline4-text24 thq-heading-3">
                      March 2022
                    </span>
                  </fragment>
                )}
              </h3>
              <h3>
                {props.card2Heading ?? (
                  <fragment>
                    <span className="timeline4-text35 thq-heading-3">
                      Introduction of Training Initiatives
                    </span>
                  </fragment>
                )}
              </h3>
              <span>
                {props.card2Content ?? (
                  <fragment>
                    <span className="timeline4-text23 thq-body-small">
                      Capacity building programs are launched to empower
                      individuals and organizations with AI skills and
                      knowledge.
                    </span>
                  </fragment>
                )}
              </span>
              <div className="timeline4-container10">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card2Action1 ?? (
                      <fragment>
                        <span className="timeline4-text37">
                          Explore Programs
                        </span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="timeline4-step3">
            <div className="timeline4-container11">
              <div className="timeline4-container12"></div>
              <div className="timeline4-progress02"></div>
            </div>
            <div className="timeline4-container13">
              <h3>
                {props.date3 ?? (
                  <fragment>
                    <span className="timeline4-text31 thq-heading-3">
                      May 2022
                    </span>
                  </fragment>
                )}
              </h3>
              <h3>
                {props.card3Heading ?? (
                  <fragment>
                    <span className="timeline4-text29 thq-heading-3">
                      Release of Ethical Standards
                    </span>
                  </fragment>
                )}
              </h3>
              <span>
                {props.card3Content ?? (
                  <fragment>
                    <span className="timeline4-text33 thq-body-small">
                      Publication of ethical guidelines to promote responsible
                      AI practices within the Consortium and beyond.
                    </span>
                  </fragment>
                )}
              </span>
              <div className="timeline4-container14">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card3Action1 ?? (
                      <fragment>
                        <span className="timeline4-text20">
                          Read Guidelines
                        </span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="timeline4-step4">
            <div className="timeline4-container15">
              <div className="timeline4-container16"></div>
              <div className="timeline4-progress03"></div>
            </div>
            <div className="timeline4-container17">
              <h3>
                {props.date4 ?? (
                  <fragment>
                    <span className="timeline4-text34 thq-heading-3">
                      August 2022
                    </span>
                  </fragment>
                )}
              </h3>
              <h3>
                {props.card4Heading ?? (
                  <fragment>
                    <span className="timeline4-text25 thq-heading-3">
                      Participation in Summit
                    </span>
                  </fragment>
                )}
              </h3>
              <span>
                {props.card4Content ?? (
                  <fragment>
                    <span className="timeline4-text26 thq-body-small">
                      Members gather at the Global AI Innovation Summit to
                      showcase projects, share insights, and foster
                      collaborations.
                    </span>
                  </fragment>
                )}
              </span>
              <div className="timeline4-container18">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card4Action1 ?? (
                      <fragment>
                        <span className="timeline4-text27">
                          View Event Details
                        </span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline4.defaultProps = {
  card1Heading: undefined,
  card3Action1: undefined,
  action1: undefined,
  date1: undefined,
  card2Content: undefined,
  date2: undefined,
  card4Heading: undefined,
  card4Content: undefined,
  card4Action1: undefined,
  card1Content: undefined,
  card3Heading: undefined,
  title1: undefined,
  date3: undefined,
  content1: undefined,
  card3Content: undefined,
  date4: undefined,
  card2Heading: undefined,
  card1Action1: undefined,
  card2Action1: undefined,
}

Timeline4.propTypes = {
  card1Heading: PropTypes.element,
  card3Action1: PropTypes.element,
  action1: PropTypes.element,
  date1: PropTypes.element,
  card2Content: PropTypes.element,
  date2: PropTypes.element,
  card4Heading: PropTypes.element,
  card4Content: PropTypes.element,
  card4Action1: PropTypes.element,
  card1Content: PropTypes.element,
  card3Heading: PropTypes.element,
  title1: PropTypes.element,
  date3: PropTypes.element,
  content1: PropTypes.element,
  card3Content: PropTypes.element,
  date4: PropTypes.element,
  card2Heading: PropTypes.element,
  card1Action1: PropTypes.element,
  card2Action1: PropTypes.element,
}

export default Timeline4
