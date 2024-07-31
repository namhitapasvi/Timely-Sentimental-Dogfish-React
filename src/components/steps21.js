import React from 'react'

import PropTypes from 'prop-types'

import './steps21.css'

const Steps21 = (props) => {
  return (
    <div className="steps21-container thq-section-padding">
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container1 thq-grid-2">
          <div className="steps21-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps21-actions">
              <button className="thq-button-animated thq-button-filled steps21-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps21-container2">
            <div className="steps21-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <fragment>
                    <span className="steps21-text15 thq-heading-2">
                      Choose Your Product
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <fragment>
                    <span className="steps21-text20 thq-body-small">
                      Browse through our wide selection of products and choose
                      the one that best fits your needs.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps21-text05 thq-heading-3">01</label>
            </div>
            <div className="steps21-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <fragment>
                    <span className="steps21-text17 thq-heading-2">
                      Customize Your Selection
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <fragment>
                    <span className="steps21-text16 thq-body-small">
                      Personalize your chosen product by selecting from various
                      customization options available.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps21-text08 thq-heading-3">02</label>
            </div>
            <div className="steps21-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <fragment>
                    <span className="steps21-text22 thq-heading-2">
                      Place Your Order
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <fragment>
                    <span className="steps21-text18 thq-body-small">
                      Once you are satisfied with your customized product,
                      proceed to place your order securely.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps21-text11 thq-heading-3">03</label>
            </div>
            <div className="steps21-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <fragment>
                    <span className="steps21-text21 thq-heading-2">
                      Enjoy Your Purchase
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <fragment>
                    <span className="steps21-text19 thq-body-small">
                      Sit back and relax while we prepare your order for
                      shipping. Get ready to enjoy your new purchase!
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps21-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps21.defaultProps = {
  step1Title: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step3Description: undefined,
  step4Description: undefined,
  step1Description: undefined,
  step4Title: undefined,
  step3Title: undefined,
}

Steps21.propTypes = {
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
}

export default Steps21
