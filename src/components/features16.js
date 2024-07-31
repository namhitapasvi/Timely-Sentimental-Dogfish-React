import React from 'react'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
          <span>
            {props.slogan1 ?? (
              <fragment>
                <span className="features16-text07 thq-body-small">Slogan</span>
              </fragment>
            )}
          </span>
          <div className="features16-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="features16-text04 thq-heading-2">
                    Key Features
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <fragment>
                  <span className="features16-text09 thq-body-large">
                    Discover the core features of the Commonwealth AI Consortium
                    that drive innovation and collaboration.
                  </span>
                </fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features16-content1">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content2">
                <h3>
                  {props.feature1Title ?? (
                    <fragment>
                      <span className="features16-text08 thq-heading-3">
                        Ethical Standards
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <fragment>
                      <span className="features16-text10 thq-body-small">
                        Promoting ethical AI practices and ensuring responsible
                        use of artificial intelligence technologies.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content3">
                <h3>
                  {props.feature2Title ?? (
                    <fragment>
                      <span className="features16-text06 thq-heading-3">
                        Inclusive Technologies
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <fragment>
                      <span className="features16-text05 thq-body-small">
                        Fostering the development of inclusive AI technologies
                        that benefit all members of society.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
                <h3>
                  {props.feature3Title ?? (
                    <fragment>
                      <span className="features16-text03 thq-heading-3">
                        Capacity Building
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <fragment>
                      <span className="features16-text11 thq-body-small">
                        Empowering individuals and organizations through skills
                        development programs to enhance AI capabilities.
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

Features16.defaultProps = {
  feature3Title: undefined,
  feature1ImageAlt: 'Ethical Standards Icon',
  feature2ImageAlt: 'Inclusive Technologies Icon',
  feature3ImageAlt: 'Capacity Building Icon',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1691425645869-75202766a58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTE5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  slogan1: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1589829068065-20154e8f9642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTE5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1662560102941-3c17464d5000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTE5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature3Description: undefined,
}

Features16.propTypes = {
  feature3Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  slogan1: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
}

export default Features16
