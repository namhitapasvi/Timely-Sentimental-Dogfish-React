import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero3 from '../components/hero3'
import Logos9 from '../components/logos9'
import Gallery1 from '../components/gallery1'
import Features17 from '../components/features17'
import Features18 from '../components/features18'
import Features171 from '../components/features171'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer4 from '../components/footer4'
import './initiatives.css'

const Initiatives = (props) => {
  return (
    <div className="initiatives-container">
      <Helmet>
        <title>Initiatives - Timely Sentimental Dogfish</title>
        <meta
          property="og:title"
          content="Initiatives - Timely Sentimental Dogfish"
        />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="initiatives-text thq-body-small thq-link">
              Home
            </span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="initiatives-text01 thq-body-small thq-link">
              About Us
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="initiatives-text02 thq-body-small thq-link">
              Initiatives
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="initiatives-text03 thq-body-small thq-link">
              Members
            </span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="initiatives-text04 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="initiatives-text05 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="initiatives-text06 thq-body-large">
              Page Three
            </span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="initiatives-text07 thq-body-large">Page Four</span>
          </fragment>
        }
        link41={
          <fragment>
            <span className="initiatives-text08 thq-body-small thq-link">
              Contact
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="initiatives-text09">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="initiatives-text10">Secondary Action</span>
          </fragment>
        }
        logoSrc="/screenshot%202024-07-31%20at%2013.58.42-1500h.png"
        link1Url="/"
        page1Description={
          <fragment>
            <span className="initiatives-text11 thq-body-small">
              Page One Description
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="initiatives-text12 thq-body-small">
              Page Two Description
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="initiatives-text13 thq-body-small">
              Page Three Description
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="initiatives-text14 thq-body-small">
              Page Four Description
            </span>
          </fragment>
        }
      ></Navbar8>
      <Hero3
        action1={
          <fragment>
            <span className="initiatives-text15 thq-body-small">
              Learn More
            </span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="initiatives-text16 thq-body-small">Join Us</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="initiatives-text17 thq-body-large">
              Empowering AI innovation across the Commonwealth
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="initiatives-text18 thq-heading-1">
              Welcome to the Commonwealth AI Consortium
            </span>
          </fragment>
        }
      ></Hero3>
      <Logos9
        heading1={
          <fragment>
            <span className="initiatives-text19 thq-heading-2">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </fragment>
        }
      ></Logos9>
      <Gallery1
        content1={
          <fragment>
            <span className="initiatives-text20 thq-body-large">
              Explore how AI is being used to address global challenges such as
              climate change, healthcare access, and poverty alleviation.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="initiatives-text21 thq-heading-2">
              AI for Sustainable Development
            </span>
          </fragment>
        }
      ></Gallery1>
      <Features17
        feature1Title={
          <fragment>
            <span className="initiatives-text22 thq-heading-2">
              Ethical AI Standards
            </span>
          </fragment>
        }
        feature1Slogan={
          <fragment>
            <span className="initiatives-text23 thq-body-small">
              Promoting responsible AI practices
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="initiatives-text24 thq-body-large">
              We advocate for the development and implementation of ethical AI
              standards to ensure that AI technologies benefit society while
              upholding fundamental human values.
            </span>
          </fragment>
        }
      ></Features17>
      <Features18
        feature1Title={
          <fragment>
            <span className="initiatives-text25 thq-heading-2">
              Ethical AI Practices
            </span>
          </fragment>
        }
        feature1Slogan={
          <fragment>
            <span className="initiatives-text26 thq-body-small">
              Driving Ethical Standards
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="initiatives-text27 thq-body-large">
              Join us in promoting responsible and inclusive AI technologies
              that benefit society while upholding ethical standards.
            </span>
          </fragment>
        }
      ></Features18>
      <Features171
        feature1Title={
          <fragment>
            <span className="initiatives-text28 thq-heading-2">
              Ethical AI Standards
            </span>
          </fragment>
        }
        feature1Slogan={
          <fragment>
            <span className="initiatives-text29 thq-body-small">
              Promoting responsible AI practices
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="initiatives-text30 thq-body-large">
              We advocate for the development and implementation of ethical
              guidelines to ensure AI technologies benefit society while
              upholding privacy, security, and fairness.
            </span>
          </fragment>
        }
      ></Features171>
      <CTA1
        action1={
          <fragment>
            <span className="initiatives-text31 thq-body-small">
              Join the Consortium
            </span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="initiatives-text32 thq-body-small">
              Explore Our Programs
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="initiatives-text33 thq-body-large">
              Unlock the potential of AI innovation by joining our consortium
              and collaborating with like-minded professionals.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="initiatives-text34 thq-heading-2">
              Become a Member Today
            </span>
          </fragment>
        }
      ></CTA1>
      <FAQ1
        action1={
          <fragment>
            <span className="initiatives-text35 thq-body-small">Contact</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="initiatives-text36 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="initiatives-text37 thq-body-large">
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
        }
        heading1={
          <fragment>
            <span className="initiatives-text40 thq-heading-2">FAQs</span>
          </fragment>
        }
        heading2={
          <fragment>
            <span className="initiatives-text41 thq-heading-2">
              Still have a question?
            </span>
          </fragment>
        }
        faq1Answer={
          <fragment>
            <span className="initiatives-text42 thq-body-small">
              The Commonwealth AI Consortium is an organization dedicated to
              driving AI innovation across the Commonwealth while promoting
              ethical standards, inclusive technologies, and capacity building.
            </span>
          </fragment>
        }
        faq2Answer={
          <fragment>
            <span className="initiatives-text43 thq-body-small">
              The Consortium offers initiatives for collaboration, skills
              development, and responsible AI practices.
            </span>
          </fragment>
        }
        faq3Answer={
          <fragment>
            <span className="initiatives-text44 thq-body-small">
              The Consortium emphasizes transparency, equity, and collaboration
              in shaping the future of AI.
            </span>
          </fragment>
        }
        faq4Answer={
          <fragment>
            <span className="initiatives-text45 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </fragment>
        }
        faq5Answer={
          <fragment>
            <span className="initiatives-text46 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </fragment>
        }
        faq1Question={
          <fragment>
            <span className="initiatives-text47 thq-body-large">
              What is the Commonwealth AI Consortium?
            </span>
          </fragment>
        }
        faq2Question={
          <fragment>
            <span className="initiatives-text48 thq-body-large">
              What initiatives does the Consortium offer?
            </span>
          </fragment>
        }
        faq3Question={
          <fragment>
            <span className="initiatives-text49 thq-body-large">
              What values does the Consortium emphasize?
            </span>
          </fragment>
        }
        faq4Question={
          <fragment>
            <span className="initiatives-text50 thq-body-large">
              Frequently Asked Questions
            </span>
          </fragment>
        }
        faq5Question={
          <fragment>
            <span className="initiatives-text51 thq-body-large">
              Frequently Asked Questions
            </span>
          </fragment>
        }
      ></FAQ1>
      <Contact4
        email1={
          <fragment>
            <span className="initiatives-text52 thq-body-small">
              info@commonwealthai.org
            </span>
          </fragment>
        }
        phone1={
          <fragment>
            <span className="initiatives-text53 thq-body-small">
              +1-XXX-XXX-XXXX
            </span>
          </fragment>
        }
        address1={
          <fragment>
            <span className="initiatives-text54 thq-body-small">
              123 Commonwealth Street, AI City, Commonwealth
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="initiatives-text55 thq-body-large">
              <span>
                For inquiries about membership, programs, or general questions,
                please reach out to us.
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
            <span className="initiatives-text58 thq-body-small">
              Our team is available to assist you with any information you may
              need.
            </span>
          </fragment>
        }
        content3={
          <fragment>
            <span className="initiatives-text59 thq-body-large">
              Stay connected with us on social media for the latest updates and
              news.
            </span>
          </fragment>
        }
        content4={
          <fragment>
            <span className="initiatives-text60 thq-body-large">
              Join our mailing list to receive updates on events, resources, and
              opportunities.
            </span>
          </fragment>
        }
        content5={
          <fragment>
            <span className="initiatives-text61 thq-body-large">
              We look forward to hearing from you!
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="initiatives-text62 thq-heading-2">Contact Us</span>
          </fragment>
        }
      ></Contact4>
      <Footer4
        link1={
          <fragment>
            <span className="initiatives-text63 thq-body-small">About Us</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="initiatives-text64 thq-body-small">
              Contact Us
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="initiatives-text65 thq-body-small">
              News &amp; Events
            </span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="initiatives-text66 thq-body-small">Resources</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="initiatives-text67 thq-body-small">
              Terms of Use
            </span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="initiatives-text68 thq-body-small">
              Cookies Policy
            </span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="initiatives-text69 thq-body-small">
              Privacy Policy
            </span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Initiatives
