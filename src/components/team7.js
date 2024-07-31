import React from 'react'

import PropTypes from 'prop-types'

import './team7.css'

const Team7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team7-max-width thq-section-max-width">
        <div className="team7-section-title">
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="team7-text34 thq-body-small">
                  Our team consists of diverse experts in the field of AI who
                  are dedicated to driving innovation responsibly and ethically.
                </span>
              </fragment>
            )}
          </span>
          <div className="team7-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="team7-text36 thq-heading-2">
                    Meet Our Team
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <fragment>
                  <span className="team7-text38 thq-body-large">
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
        <div className="team7-content1">
          <div className="team7-card">
            <img
              alt={props.member1Alt}
              src={props.member1Src}
              className="team7-placeholder-image thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content2">
              <div className="team7-title">
                <span>
                  {props.member1 ?? (
                    <fragment>
                      <span className="team7-text22 thq-body-small">
                        Dr. Aisha Patel
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.member1Job ?? (
                    <fragment>
                      <span className="team7-text21 thq-body-small">
                        Chief Ethics Officer
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member1Content ?? (
                  <fragment>
                    <span className="team7-text33 thq-body-small">
                      Dr. Aisha Patel leads our efforts in promoting ethical
                      standards in AI development and deployment.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card1">
            <img
              alt={props.member2Alt}
              src={props.member2Src}
              className="team7-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content3">
              <div className="team7-title1">
                <span>
                  {props.member2 ?? (
                    <fragment>
                      <span className="team7-text26 thq-body-small">
                        John Doe
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.member2Job ?? (
                    <fragment>
                      <span className="team7-text37 thq-body-small">
                        Head of Technology
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member2Content ?? (
                  <fragment>
                    <span className="team7-text31 thq-body-small">
                      John Doe oversees the technological aspects of our
                      projects and ensures inclusive technologies are
                      implemented.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons1">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card2">
            <img
              alt={props.member3Alt}
              src={props.member3Src}
              className="team7-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content4">
              <div className="team7-title2">
                <span>
                  {props.member3 ?? (
                    <fragment>
                      <span className="team7-text29 thq-body-small">
                        Maria Sanchez
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.member3Job ?? (
                    <fragment>
                      <span className="team7-text27 thq-body-small">
                        AI Research Scientist
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member3Content ?? (
                  <fragment>
                    <span className="team7-text30 thq-body-small">
                      Maria Sanchez contributes her expertise in AI research to
                      address global challenges effectively.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons2">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card3">
            <img
              alt={props.member4Alt}
              src={props.member4Src}
              className="team7-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content5">
              <div className="team7-title3">
                <span>
                  {props.member4 ?? (
                    <fragment>
                      <span className="team7-text24 thq-body-small">
                        David Wong
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.member4Job ?? (
                    <fragment>
                      <span className="team7-text42 thq-body-small">
                        Capacity Building Specialist
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member4Content ?? (
                  <fragment>
                    <span className="team7-text32 thq-body-small">
                      David Wong focuses on capacity building initiatives to
                      empower individuals and organizations with AI skills.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons3">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card4">
            <img
              alt={props.member5Alt}
              src={props.member5Src}
              className="team7-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content6">
              <div className="team7-title4">
                <span>
                  {props.member5 ?? (
                    <fragment>
                      <span className="team7-text23 thq-body-small">
                        Sarah Johnson
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.member5Job ?? (
                    <fragment>
                      <span className="team7-text41 thq-body-small">
                        Partnerships Manager
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member5Content ?? (
                  <fragment>
                    <span className="team7-text35 thq-body-small">
                      Sarah Johnson manages partnerships to foster collaboration
                      and access to AI resources within the Consortium.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons4">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card5">
            <img
              alt={props.member6Alt}
              src={props.member6Src}
              className="team7-placeholder-image5 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content7">
              <div className="team7-title5">
                <span>
                  {props.member6 ?? (
                    <fragment>
                      <span className="team7-text28 thq-body-small">
                        Alexandre Dubois
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.member6Job ?? (
                    <fragment>
                      <span className="team7-text25 thq-body-small">
                        Communications Director
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member6Content ?? (
                  <fragment>
                    <span className="team7-text43 thq-body-small">
                      Alexandre Dubois leads our communication strategies to
                      promote the Consortium&apos;s mission globally.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons5">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team7.defaultProps = {
  member1Job: undefined,
  member1: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1719198539292-e44add6d15c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  member5: undefined,
  member4: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1468186376524-b53e47314061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  member6Job: undefined,
  member3Alt: 'Portrait of Maria Sanchez',
  member2: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1462737894914-3552923dc87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Job: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  member6: undefined,
  member6Alt: 'Portrait of Alexandre Dubois',
  member3: undefined,
  member3Content: undefined,
  member2Content: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Content: undefined,
  member4Alt: 'Portrait of David Wong',
  member1Content: undefined,
  content1: undefined,
  member5Content: undefined,
  member1Alt: 'Portrait of Dr. Aisha Patel',
  heading1: undefined,
  member5Alt: 'Portrait of Sarah Johnson',
  member2Job: undefined,
  member2Alt: 'Portrait of John Doe',
  content2: undefined,
  member5Job: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1528893057273-35e9c353ee76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzMDA1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  member4Job: undefined,
  member6Content: undefined,
}

Team7.propTypes = {
  member1Job: PropTypes.element,
  member1: PropTypes.element,
  member5Src: PropTypes.string,
  member5: PropTypes.element,
  member4: PropTypes.element,
  member6Src: PropTypes.string,
  member6Job: PropTypes.element,
  member3Alt: PropTypes.string,
  member2: PropTypes.element,
  member3Src: PropTypes.string,
  member3Job: PropTypes.element,
  member4Src: PropTypes.string,
  member6: PropTypes.element,
  member6Alt: PropTypes.string,
  member3: PropTypes.element,
  member3Content: PropTypes.element,
  member2Content: PropTypes.element,
  member2Src: PropTypes.string,
  member4Content: PropTypes.element,
  member4Alt: PropTypes.string,
  member1Content: PropTypes.element,
  content1: PropTypes.element,
  member5Content: PropTypes.element,
  member1Alt: PropTypes.string,
  heading1: PropTypes.element,
  member5Alt: PropTypes.string,
  member2Job: PropTypes.element,
  member2Alt: PropTypes.string,
  content2: PropTypes.element,
  member5Job: PropTypes.element,
  member1Src: PropTypes.string,
  member4Job: PropTypes.element,
  member6Content: PropTypes.element,
}

export default Team7
