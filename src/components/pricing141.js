import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing141.css'

const Pricing141 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing141-pricing23 thq-section-padding">
      <div className="pricing141-max-width thq-section-max-width">
        <div className="pricing141-section-title">
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="pricing141-text066 thq-body-small">
                  Choose the perfect plan for you
                </span>
              </fragment>
            )}
          </span>
          <div className="pricing141-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="pricing141-text083 thq-heading-2">
                    Pricing plan
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <fragment>
                  <span className="pricing141-text098 thq-body-large">
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
        </div>
        <div className="pricing141-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing141-button thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing141-button01 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing141-button02 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing141-button03 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing141-container">
            <div className="pricing141-column thq-card">
              <div className="pricing141-price">
                <div className="pricing141-price01">
                  <p>
                    {props.plan1 ?? (
                      <fragment>
                        <span className="pricing141-text097 thq-body-large">
                          Basic plan
                        </span>
                      </fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan1Price ?? (
                      <fragment>
                        <span className="pricing141-text075 thq-heading-3">
                          $9.99/month
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan1Yearly ?? (
                      <fragment>
                        <span className="pricing141-text091 thq-body-large">
                          or $200 yearly
                        </span>
                      </fragment>
                    )}
                  </p>
                </div>
                <div className="pricing141-list">
                  <div className="pricing141-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature1 ?? (
                        <fragment>
                          <span className="pricing141-text071 thq-body-small">
                            Unlimited access to all products
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature2 ?? (
                        <fragment>
                          <span className="pricing141-text060 thq-body-small">
                            Exclusive members-only discounts
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature3 ?? (
                        <fragment>
                          <span className="pricing141-text072 thq-body-small">
                            24/7 customer support
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button04 thq-button-animated thq-button-outline">
                <span>
                  {props.plan1Action ?? (
                    <fragment>
                      <span className="pricing141-text102 thq-body-small">
                        Get Started
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column1 thq-card">
              <div className="pricing141-price02">
                <div className="pricing141-price03">
                  <p>
                    {props.plan2 ?? (
                      <fragment>
                        <span className="pricing141-text070 thq-body-large">
                          Business plan
                        </span>
                      </fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan2Price ?? (
                      <fragment>
                        <span className="pricing141-text082 thq-heading-3">
                          $19.99/month
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan2Yearly ?? (
                      <fragment>
                        <span className="pricing141-text069 thq-body-large">
                          or $299 yearly
                        </span>
                      </fragment>
                    )}
                  </p>
                </div>
                <div className="pricing141-list1">
                  <div className="pricing141-list-item03">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature1 ?? (
                        <fragment>
                          <span className="pricing141-text089 thq-body-small">
                            All features in Plan 1
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature2 ?? (
                        <fragment>
                          <span className="pricing141-text092 thq-body-small">
                            Early access to new products
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature3 ?? (
                        <fragment>
                          <span className="pricing141-text085 thq-body-small">
                            Personalized product recommendations
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature4 ?? (
                        <fragment>
                          <span className="pricing141-text055 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button05 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action ?? (
                    <fragment>
                      <span className="pricing141-text062 thq-body-small">
                        Get Started
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column2 thq-card">
              <div className="pricing141-price04">
                <div className="pricing141-price05">
                  <p>
                    {props.plan3 ?? (
                      <fragment>
                        <span className="pricing141-text090 thq-body-large">
                          Enterprise plan
                        </span>
                      </fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan3Price ?? (
                      <fragment>
                        <span className="pricing141-text068 thq-heading-3">
                          $29.99/month
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan3Yearly ?? (
                      <fragment>
                        <span className="pricing141-text059 thq-body-large">
                          or $499 yearly
                        </span>
                      </fragment>
                    )}
                  </p>
                </div>
                <div className="pricing141-list2">
                  <div className="pricing141-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature1 ?? (
                        <fragment>
                          <span className="pricing141-text104 thq-body-small">
                            All features in Plan 2
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature2 ?? (
                        <fragment>
                          <span className="pricing141-text086 thq-body-small">
                            Priority customer support
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature3 ?? (
                        <fragment>
                          <span className="pricing141-text084 thq-body-small">
                            Custom product consultations
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature4 ?? (
                        <fragment>
                          <span className="pricing141-text093 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature5 ?? (
                        <fragment>
                          <span className="pricing141-text064 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button06 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action ?? (
                    <fragment>
                      <span className="pricing141-text106 thq-body-small">
                        Get Started
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing141-container1">
            <div className="pricing141-column3 thq-card">
              <div className="pricing141-price06">
                <div className="pricing141-price07">
                  <span>
                    {props.plan11 ?? (
                      <fragment>
                        <span className="pricing141-text103 thq-body-large">
                          Basic plan
                        </span>
                      </fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan1Price1 ?? (
                      <fragment>
                        <span className="pricing141-text073 thq-heading-3">
                          $200/yr
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan1Yearly1 ?? (
                      <fragment>
                        <span className="pricing141-text056 thq-body-large">
                          or $20 monthly
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list3">
                  <div className="pricing141-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature11 ?? (
                        <fragment>
                          <span className="pricing141-text079 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature21 ?? (
                        <fragment>
                          <span className="pricing141-text105 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature31 ?? (
                        <fragment>
                          <span className="pricing141-text094 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button07 thq-button-animated thq-button-outline">
                <span>
                  {props.plan1Action1 ?? (
                    <fragment>
                      <span className="pricing141-text081 thq-body-small">
                        Get started
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column4 thq-card">
              <div className="pricing141-price08">
                <div className="pricing141-price09">
                  <span>
                    {props.plan21 ?? (
                      <fragment>
                        <span className="pricing141-text087 thq-body-large">
                          Business plan
                        </span>
                      </fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan2Price1 ?? (
                      <fragment>
                        <span className="pricing141-text076 thq-heading-3">
                          $299/yr
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan2Yearly1 ?? (
                      <fragment>
                        <span className="pricing141-text065 thq-body-large">
                          or $29 monthly
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list4">
                  <div className="pricing141-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature11 ?? (
                        <fragment>
                          <span className="pricing141-text063 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature21 ?? (
                        <fragment>
                          <span className="pricing141-text061 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature31 ?? (
                        <fragment>
                          <span className="pricing141-text057 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature41 ?? (
                        <fragment>
                          <span className="pricing141-text101 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button08 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action1 ?? (
                    <fragment>
                      <span className="pricing141-text077 thq-body-small">
                        Get started
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column5 thq-card">
              <div className="pricing141-price10">
                <div className="pricing141-price11">
                  <span>
                    {props.plan31 ?? (
                      <fragment>
                        <span className="pricing141-text107 thq-body-large">
                          Enterprise plan
                        </span>
                      </fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan3Price1 ?? (
                      <fragment>
                        <span className="pricing141-text080 thq-heading-3">
                          $499/yr
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan3Yearly1 ?? (
                      <fragment>
                        <span className="pricing141-text096 thq-body-large">
                          or $49 monthly
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list5">
                  <div className="pricing141-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature11 ?? (
                        <fragment>
                          <span className="pricing141-text095 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature21 ?? (
                        <fragment>
                          <span className="pricing141-text088 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature31 ?? (
                        <fragment>
                          <span className="pricing141-text078 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature41 ?? (
                        <fragment>
                          <span className="pricing141-text058 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature51 ?? (
                        <fragment>
                          <span className="pricing141-text074 thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button09 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action1 ?? (
                    <fragment>
                      <span className="pricing141-text067 thq-body-small">
                        Get started
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing141.defaultProps = {
  plan2Feature4: undefined,
  plan1Yearly1: undefined,
  plan2Feature31: undefined,
  plan3Feature41: undefined,
  plan3Yearly: undefined,
  plan1Feature2: undefined,
  plan2Feature21: undefined,
  plan2Action: undefined,
  plan2Feature11: undefined,
  plan3Feature5: undefined,
  plan2Yearly1: undefined,
  content1: undefined,
  plan3Action1: undefined,
  plan3Price: undefined,
  plan2Yearly: undefined,
  plan2: undefined,
  plan1Feature1: undefined,
  plan1Feature3: undefined,
  plan1Price1: undefined,
  plan3Feature51: undefined,
  plan1Price: undefined,
  plan2Price1: undefined,
  plan2Action1: undefined,
  plan3Feature31: undefined,
  plan1Feature11: undefined,
  plan3Price1: undefined,
  plan1Action1: undefined,
  plan2Price: undefined,
  heading1: undefined,
  plan3Feature3: undefined,
  plan2Feature3: undefined,
  plan3Feature2: undefined,
  plan21: undefined,
  plan3Feature21: undefined,
  plan2Feature1: undefined,
  plan3: undefined,
  plan1Yearly: undefined,
  plan2Feature2: undefined,
  plan3Feature4: undefined,
  plan1Feature31: undefined,
  plan3Feature11: undefined,
  plan3Yearly1: undefined,
  plan1: undefined,
  content2: undefined,
  plan2Feature41: undefined,
  plan1Action: undefined,
  plan11: undefined,
  plan3Feature1: undefined,
  plan1Feature21: undefined,
  plan3Action: undefined,
  plan31: undefined,
}

Pricing141.propTypes = {
  plan2Feature4: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Action: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  content1: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan3Price: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan2: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan1Price: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Price: PropTypes.element,
  heading1: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan21: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan3: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1: PropTypes.element,
  content2: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan1Action: PropTypes.element,
  plan11: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan3Action: PropTypes.element,
  plan31: PropTypes.element,
}

export default Pricing141
