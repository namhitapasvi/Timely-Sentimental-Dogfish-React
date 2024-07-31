import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <Link to="/" className="footer4-navlink">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer4-logo1"
              />
            </Link>
          </div>
          <div className="footer4-links">
            <Link to="/about" className="footer4-navlink1">
              {props.link1 ?? (
                <fragment>
                  <span className="footer4-text05 thq-body-small">
                    About Us
                  </span>
                </fragment>
              )}
            </Link>
            <Link to="/blog" className="footer4-navlink2">
              {props.link4 ?? (
                <fragment>
                  <span className="footer4-text09 thq-body-small">
                    News &amp; Events
                  </span>
                </fragment>
              )}
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link5 ?? (
                <fragment>
                  <span className="footer4-text06 thq-body-small">
                    Resources
                  </span>
                </fragment>
              )}
            </a>
            <Link to="/contact" className="footer4-navlink3">
              {props.link2 ?? (
                <fragment>
                  <span className="footer4-text07 thq-body-small">
                    Contact Us
                  </span>
                </fragment>
              )}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                Copyright © 2024 Commonwealth Secretariat
              </span>
            </div>
            <div className="footer4-footer-links">
              <span>
                {props.privacyLink ?? (
                  <fragment>
                    <span className="footer4-text10 thq-body-small">
                      Privacy Policy
                    </span>
                  </fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <fragment>
                    <span className="footer4-text04 thq-body-small">
                      Terms of Use
                    </span>
                  </fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <fragment>
                    <span className="footer4-text08 thq-body-small">
                      Cookies Policy
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  termsLink: undefined,
  link1: undefined,
  link5: undefined,
  link2: undefined,
  cookiesLink: undefined,
  link4: undefined,
  logoSrc: '/screenshot%202024-07-31%20at%2013.58.42-1500h.png',
  privacyLink: undefined,
  logoAlt: 'Logo',
}

Footer4.propTypes = {
  termsLink: PropTypes.element,
  link1: PropTypes.element,
  link5: PropTypes.element,
  link2: PropTypes.element,
  cookiesLink: PropTypes.element,
  link4: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default Footer4
