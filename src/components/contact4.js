import React from 'react'

import PropTypes from 'prop-types'

import './contact4.css'

const Contact4 = (props) => {
  return (
    <div className="contact4-contact20 thq-section-padding">
      <div className="contact4-max-width thq-section-max-width">
        <div className="contact4-section-title">
          <span>
            {props.content2 ?? (
              <fragment>
                <span className="contact4-text11 thq-body-small">
                  Our team is available to assist you with any information you
                  may need.
                </span>
              </fragment>
            )}
          </span>
          <div className="contact4-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="contact4-text18 thq-heading-2">
                    Contact Us
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="contact4-text15 thq-body-large">
                    <span>
                      For inquiries about membership, programs, or general
                      questions, please reach out to us.
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
        </div>
        <div className="contact4-row">
          <div className="contact4-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact4-contact-info">
              <div className="contact4-content2">
                <h3 className="contact4-text03 thq-heading-3">Email</h3>
                <p>
                  {props.content3 ?? (
                    <fragment>
                      <span className="contact4-text14 thq-body-large">
                        Stay connected with us on social media for the latest
                        updates and news.
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
              <span>
                {props.email1 ?? (
                  <fragment>
                    <span className="contact4-text12 thq-body-small">
                      info@commonwealthai.org
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact4-content3">
            <svg
              viewBox="0 0 1024 1024"
              className="contact4-icon2 thq-icon-medium"
            >
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact4-contact-info1">
              <div className="contact4-content4">
                <h3 className="contact4-text05 thq-heading-3">Phone</h3>
                <p>
                  {props.content4 ?? (
                    <fragment>
                      <span className="contact4-text09 thq-body-large">
                        Join our mailing list to receive updates on events,
                        resources, and opportunities.
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
              <span>
                {props.phone1 ?? (
                  <fragment>
                    <span className="contact4-text10 thq-body-small">
                      +1-XXX-XXX-XXXX
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact4-content5">
            <svg
              viewBox="0 0 1024 1024"
              className="contact4-icon4 thq-icon-medium"
            >
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact4-contact-info2">
              <div className="contact4-content6">
                <h3 className="contact4-text07 thq-heading-3">Office</h3>
                <p>
                  {props.content5 ?? (
                    <fragment>
                      <span className="contact4-text13 thq-body-large">
                        We look forward to hearing from you!
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
              <span>
                {props.address1 ?? (
                  <fragment>
                    <span className="contact4-text19 thq-body-small">
                      123 Commonwealth Street, AI City, Commonwealth
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

Contact4.defaultProps = {
  content4: undefined,
  phone1: undefined,
  content2: undefined,
  email1: undefined,
  content5: undefined,
  content3: undefined,
  content1: undefined,
  heading1: undefined,
  address1: undefined,
}

Contact4.propTypes = {
  content4: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
  email1: PropTypes.element,
  content5: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  address1: PropTypes.element,
}

export default Contact4
