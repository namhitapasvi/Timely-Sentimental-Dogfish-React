import React from 'react'

import PropTypes from 'prop-types'

import './stats3.css'

const Stats3 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats3-max-width thq-section-max-width">
        <div className="stats3-container1">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="stats3-text08 thq-heading-2">
                  Membership Plans
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="stats3-text15 thq-body-small">
                  Collaborate on cutting-edge AI projects
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="stats3-container2">
          <div className="stats3-container3">
            <h2>
              {props.stat1 ?? (
                <fragment>
                  <span className="stats3-text11 thq-heading-2">99%</span>
                </fragment>
              )}
            </h2>
            <span>
              {props.stat1Description ?? (
                <fragment>
                  <span className="stats3-text13 thq-body-small">
                    Customer satisfaction
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="stats3-container4">
            <h2>
              {props.stat2 ?? (
                <fragment>
                  <span className="stats3-text17 thq-heading-2">44%</span>
                </fragment>
              )}
            </h2>
            <span>
              {props.stat2Description ?? (
                <fragment>
                  <span className="stats3-text16 thq-body-small">
                    Active users
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="stats3-container5">
            <h2>
              {props.stat3 ?? (
                <fragment>
                  <span className="stats3-text09 thq-heading-2">99%</span>
                </fragment>
              )}
            </h2>
            <span>
              {props.stat3Description ?? (
                <fragment>
                  <span className="stats3-text14 thq-body-small">
                    Customer satisfaction
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="stats3-container6">
            <h2>
              {props.stat4 ?? (
                <fragment>
                  <span className="stats3-text10 thq-heading-2">44%</span>
                </fragment>
              )}
            </h2>
            <span>
              {props.stat4Description ?? (
                <fragment>
                  <span className="stats3-text12 thq-body-small">
                    Active users
                  </span>
                </fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats3.defaultProps = {
  heading1: undefined,
  stat3: undefined,
  stat4: undefined,
  stat1: undefined,
  stat4Description: undefined,
  stat1Description: undefined,
  stat3Description: undefined,
  content1: undefined,
  stat2Description: undefined,
  stat2: undefined,
}

Stats3.propTypes = {
  heading1: PropTypes.element,
  stat3: PropTypes.element,
  stat4: PropTypes.element,
  stat1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat1Description: PropTypes.element,
  stat3Description: PropTypes.element,
  content1: PropTypes.element,
  stat2Description: PropTypes.element,
  stat2: PropTypes.element,
}

export default Stats3
