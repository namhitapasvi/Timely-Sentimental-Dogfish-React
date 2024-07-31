import React from 'react'

import PropTypes from 'prop-types'

import './contact-form7.css'

const ContactForm7 = (props) => {
  return (
    <div className="contact-form7-contact1 thq-section-padding">
      <div className="contact-form7-max-width thq-flex-row thq-section-max-width">
        <div className="contact-form7-section-title thq-flex-column">
          <span>
            {props.content2 ?? (
              <fragment>
                <span className="contact-form7-text21 thq-body-small">
                  We are here to help and look forward to hearing from you.
                </span>
              </fragment>
            )}
          </span>
          <div className="contact-form7-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="contact-form7-text16 thq-heading-2">
                    Contact Us
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <fragment>
                  <span className="contact-form7-text11 thq-body-small">
                    <span>
                      Have a question or want to learn more about the
                      Commonwealth AI Consortium?
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
            </span>
          </div>
          <div className="contact-form7-content1">
            <div className="contact-form7-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span>
                {props.email ?? (
                  <fragment>
                    <span className="contact-form7-text15 thq-body-small">
                      caic@commonwealth.int
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="contact-form7-row1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span>
                {props.phone ?? (
                  <fragment>
                    <span className="contact-form7-text14 thq-body-small">
                      +44 20 7747 6500
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="contact-form7-row2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span>
                {props.address ?? (
                  <fragment>
                    <span className="contact-form7-text17 thq-body-small">
                      <span>
                        Marlborough House, Pall Mall, St. James&apos;s,
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>London, United Kingdom, SW1Y 5HX</span>
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form7-form thq-flex-column">
          <div className="contact-form7-container">
            <div className="contact-form7-input">
              <label
                htmlFor="contact-form-7-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-7-first-name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form7-input1">
              <label
                htmlFor="contact-form-7-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-7-last-name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container1">
            <div className="contact-form7-input2">
              <label htmlFor="contact-form-7-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form7-input3">
              <label htmlFor="contact-form-7-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-7-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container2">
            <div className="contact-form7-input4">
              <label
                htmlFor="contact-form-7-options"
                className="thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-7-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1">Climate</option>
                <option value="Option 1">Economy &amp; Trade</option>
                <option value="Option 1">Technology &amp; Innovation</option>
                <option value="Option 2">Women &amp; Youth</option>
                <option value="Option 2">HRO &amp; Other</option>
                <option value="Option 3">.</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="contact-form7-container3">
            <div className="contact-form7-input5">
              <label
                htmlFor="contact-form-7-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-7-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
          </div>
          <div className="contact-form7-checkbox">
            <input
              type="checkbox"
              id="contact-form-7-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-7-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form7-button thq-button-filled"
          >
            <a href="mailto:?subject=" className="contact-form7-action1">
              {props.action ?? (
                <fragment>
                  <span className="contact-form7-text10 thq-body-small">
                    Contact us
                  </span>
                </fragment>
              )}
            </a>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm7.defaultProps = {
  action: undefined,
  content1: undefined,
  phone: undefined,
  email: undefined,
  heading1: undefined,
  address: undefined,
  content2: undefined,
}

ContactForm7.propTypes = {
  action: PropTypes.element,
  content1: PropTypes.element,
  phone: PropTypes.element,
  email: PropTypes.element,
  heading1: PropTypes.element,
  address: PropTypes.element,
  content2: PropTypes.element,
}

export default ContactForm7
