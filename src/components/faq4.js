import React from 'react'

import PropTypes from 'prop-types'

import './faq4.css'

const FAQ4 = (props) => {
  return (
    <div className="faq4-faq12 thq-section-padding">
      <div className="faq4-max-width thq-section-max-width">
        <div className="faq4-section-title thq-flex-column">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="faq4-text03 thq-heading-2">
                  Structure of the CAIC
                </span>
              </fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="faq4-text09 thq-body-large">
                  <span>
                    Join us in our mission to promote responsible AI practices
                    and drive innovation across the Commonwealth.
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
        <div className="thq-flex-row faq4-content">
          <div className="thq-flex-column">
            <div className="faq4-list-item1">
              <p>
                {props.faq1Question ?? (
                  <fragment>
                    <span className="faq4-text12 thq-body-large">
                      What is the Commonwealth AI Consortium?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq1Answer ?? (
                  <fragment>
                    <span className="faq4-text15 thq-body-small">
                      The Commonwealth AI Consortium is an organization that
                      focuses on empowering AI innovation across the
                      Commonwealth by promoting ethical standards, inclusive
                      technologies, and capacity building.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item2">
              <p>
                {props.faq2Question ?? (
                  <fragment>
                    <span className="faq4-text06 thq-body-large">
                      Who does the Commonwealth AI Consortium collaborate with?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq2Answer ?? (
                  <fragment>
                    <span className="faq4-text23 thq-body-small">
                      The Commonwealth AI Consortium collaborates with
                      governments, industries, and academia to drive innovation
                      and address global challenges through responsible AI
                      practices.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item3">
              <p>
                {props.faq3Question ?? (
                  <fragment>
                    <span className="faq4-text05 thq-body-large">
                      What are the key focus areas of the Commonwealth AI
                      Consortium?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq3Answer ?? (
                  <fragment>
                    <span className="faq4-text22 thq-body-small">
                      The key focus areas of the Commonwealth AI Consortium
                      include promoting ethical standards, inclusive
                      technologies, and capacity building in the field of AI.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item4">
              <p>
                {props.faq4Question ?? (
                  <fragment>
                    <span className="faq4-text19 thq-body-large">
                      How can I contribute to the Commonwealth AI Consortium?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq4Answer ?? (
                  <fragment>
                    <span className="faq4-text21 thq-body-small">
                      You can contribute to the Commonwealth AI Consortium by
                      participating in our programs, sharing your expertise, and
                      supporting our initiatives.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item5">
              <p>
                {props.faq5Question ?? (
                  <fragment>
                    <span className="faq4-text20 thq-body-large">
                      Is membership required to benefit from the Commonwealth AI
                      Consortium&apos;s initiatives?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq5Answer ?? (
                  <fragment>
                    <span className="faq4-text02 thq-body-small">
                      Membership is not required to benefit from the
                      Commonwealth AI Consortium&apos;s initiatives. We welcome
                      collaboration from all stakeholders interested in
                      promoting responsible AI practices.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq4-list-item6">
              <p>
                {props.faq6Question ?? (
                  <fragment>
                    <span className="faq4-text25 thq-body-large">
                      How does the Commonwealth AI Consortium promote ethical
                      standards in AI?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq6Answer ?? (
                  <fragment>
                    <span className="faq4-text07 thq-body-small">
                      The Commonwealth AI Consortium promotes ethical standards
                      in AI through guidelines, best practices, and awareness
                      campaigns aimed at fostering a culture of responsible AI
                      use.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item7">
              <p>
                {props.faq7Question ?? (
                  <fragment>
                    <span className="faq4-text18 thq-body-large">
                      What kind of industries does the Commonwealth AI
                      Consortium work with?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq7Answer ?? (
                  <fragment>
                    <span className="faq4-text17 thq-body-small">
                      The Commonwealth AI Consortium works with a wide range of
                      industries, including technology, healthcare, finance, and
                      more, to drive innovation and promote responsible AI
                      practices.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item8">
              <p>
                {props.faq8Question ?? (
                  <fragment>
                    <span className="faq4-text14 thq-body-large">
                      Does the Commonwealth AI Consortium offer training
                      programs in AI?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq8Answer ?? (
                  <fragment>
                    <span className="faq4-text24 thq-body-small">
                      Yes, the Commonwealth AI Consortium offers training
                      programs in AI to help build capacity and foster skills
                      development in the field of artificial intelligence.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item9">
              <p>
                {props.faq9Question ?? (
                  <fragment>
                    <span className="faq4-text08 thq-body-large">
                      How can governments benefit from collaborating with the
                      Commonwealth AI Consortium?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq9Answer ?? (
                  <fragment>
                    <span className="faq4-text16 thq-body-small">
                      Governments can benefit from collaborating with the
                      Commonwealth AI Consortium by gaining access to expertise,
                      resources, and best practices to implement responsible AI
                      policies and initiatives.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="faq4-list-item10">
              <p>
                {props.faq10Question ?? (
                  <fragment>
                    <span className="faq4-text04 thq-body-large">
                      What are the goals of the Commonwealth AI Consortium?
                    </span>
                  </fragment>
                )}
              </p>
              <span>
                {props.faq10Answer ?? (
                  <fragment>
                    <span className="faq4-text13 thq-body-small">
                      The goals of the Commonwealth AI Consortium include
                      driving innovation, promoting ethical standards, fostering
                      inclusivity, and building capacity in the field of
                      artificial intelligence.
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

FAQ4.defaultProps = {
  faq5Answer: undefined,
  heading1: undefined,
  faq10Question: undefined,
  faq3Question: undefined,
  faq2Question: undefined,
  faq6Answer: undefined,
  faq9Question: undefined,
  content1: undefined,
  faq1Question: undefined,
  faq10Answer: undefined,
  faq8Question: undefined,
  faq1Answer: undefined,
  faq9Answer: undefined,
  faq7Answer: undefined,
  faq7Question: undefined,
  faq4Question: undefined,
  faq5Question: undefined,
  faq4Answer: undefined,
  faq3Answer: undefined,
  faq2Answer: undefined,
  faq8Answer: undefined,
  faq6Question: undefined,
}

FAQ4.propTypes = {
  faq5Answer: PropTypes.element,
  heading1: PropTypes.element,
  faq10Question: PropTypes.element,
  faq3Question: PropTypes.element,
  faq2Question: PropTypes.element,
  faq6Answer: PropTypes.element,
  faq9Question: PropTypes.element,
  content1: PropTypes.element,
  faq1Question: PropTypes.element,
  faq10Answer: PropTypes.element,
  faq8Question: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq9Answer: PropTypes.element,
  faq7Answer: PropTypes.element,
  faq7Question: PropTypes.element,
  faq4Question: PropTypes.element,
  faq5Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq3Answer: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq8Answer: PropTypes.element,
  faq6Question: PropTypes.element,
}

export default FAQ4
