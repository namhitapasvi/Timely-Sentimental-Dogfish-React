import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm7 from '../components/contact-form7'
import Logos21 from '../components/logos21'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Timely Sentimental Dogfish</title>
        <meta
          property="og:title"
          content="Contact - Timely Sentimental Dogfish"
        />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="contact-text thq-body-small thq-link">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="contact-text01 thq-body-small thq-link">
              About Us
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="contact-text02 thq-body-small thq-link">
              Initiatives
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="contact-text03 thq-body-small thq-link">
              Members
            </span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="contact-text04 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="contact-text05 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="contact-text06 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="contact-text07 thq-body-large">Page Four</span>
          </fragment>
        }
        link41={
          <fragment>
            <span className="contact-text08 thq-body-small thq-link">
              Contact
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="contact-text09">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="contact-text10">Secondary Action</span>
          </fragment>
        }
        logoSrc="/screenshot%202024-07-31%20at%2013.58.42-1500h.png"
        link1Url="/"
        link3Url="/initiatives"
        page1Description={
          <fragment>
            <span className="contact-text11 thq-body-small">
              Page One Description
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="contact-text12 thq-body-small">
              Page Two Description
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="contact-text13 thq-body-small">
              Page Three Description
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="contact-text14 thq-body-small">
              Page Four Description
            </span>
          </fragment>
        }
      ></Navbar8>
      <ContactForm7
        email={
          <fragment>
            <span className="contact-text15 thq-body-small">
              caic@commonwealth.int
            </span>
          </fragment>
        }
        phone={
          <fragment>
            <span className="contact-text16 thq-body-small">
              +44 20 7747 6500
            </span>
          </fragment>
        }
        action={
          <fragment>
            <span className="contact-text17 thq-body-small">Contact us</span>
          </fragment>
        }
        address={
          <fragment>
            <span className="contact-text18 thq-body-small">
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
        }
        content1={
          <fragment>
            <span className="contact-text22 thq-body-small">
              <span>
                Have a question or want to learn more about the Commonwealth AI
                Consortium?
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
        }
        content2={
          <fragment>
            <span className="contact-text25 thq-body-small">
              We are here to help and look forward to hearing from you.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="contact-text26 thq-heading-2">Contact Us</span>
          </fragment>
        }
      ></ContactForm7>
      <Logos21
        heading1={
          <fragment>
            <span className="contact-text27 thq-heading-2">Our Partners</span>
          </fragment>
        }
      ></Logos21>
      <Footer4
        link1={
          <fragment>
            <span className="contact-text28 thq-body-small">About Us</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="contact-text29 thq-body-small">Contact Us</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="contact-text30 thq-body-small">
              News &amp; Events
            </span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="contact-text31 thq-body-small">Resources</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="contact-text32 thq-body-small">Terms of Use</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="contact-text33 thq-body-small">
              Cookies Policy
            </span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="contact-text34 thq-body-small">
              Privacy Policy
            </span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
