import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">INITIATIVES</h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <Link
                to="/initiatives"
                className="steps2-button thq-button-animated thq-button-filled"
              >
                <span className="thq-body-small">Learn More...</span>
              </Link>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <fragment>
                    <span className="steps2-text15 thq-heading-2">
                      Join the Consortium
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <fragment>
                    <span className="steps2-text13 thq-body-small">
                      Become a member of the Commonwealth AI Consortium to
                      collaborate with governments, private sectors, academics,
                      and researchers from across the Commonwealth.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <fragment>
                    <span className="steps2-text14 thq-heading-2">
                      Participate in Capacity Building
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <fragment>
                    <span className="steps2-text16 thq-body-small">
                      Engage in capacity building programs and skills
                      development initiatives to enhance your knowledge and
                      expertise in AI technologies.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <fragment>
                    <span className="steps2-text18 thq-heading-2">
                      Adopt Responsible AI Practices
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <fragment>
                    <span className="steps2-text17 thq-body-small">
                      Implement responsible AI governance frameworks to ensure
                      transparency, accountability, and equity in AI systems.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <fragment>
                    <span className="steps2-text11 thq-heading-2">
                      Contribute to Global Challenges
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <fragment>
                    <span className="steps2-text12 thq-body-small">
                      Work together with international partners to address
                      global challenges effectively using AI innovation and
                      inclusive technologies.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step4Description: undefined,
  step1Description: undefined,
  step2Title: undefined,
  step1Title: undefined,
  step2Description: undefined,
  step3Description: undefined,
  step3Title: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  step2Title: PropTypes.element,
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
}

export default Steps2
