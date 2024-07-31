import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="gallery1-text2 thq-heading-2">
                  AI for Sustainable Development
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="gallery1-text3 thq-body-large">
                  Explore how AI is being used to address global challenges such
                  as climate change, healthcare access, and poverty alleviation.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  heading1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1664482828500-b4c2341cbfd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTA2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image2Alt: 'PlaceholderImage1302',
  image1Alt: 'AI for Sustainable Development Image',
  image2Src:
    'https://images.unsplash.com/photo-1680458842452-271155173d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTA2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1627685317111-5133a227c0e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQzNTA2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'PlaceholderImage1302',
}

Gallery1.propTypes = {
  heading1: PropTypes.element,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
}

export default Gallery1
