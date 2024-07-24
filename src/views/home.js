import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Timely Sentimental Dogfish</title>
        <meta property="og:title" content="Home - Timely Sentimental Dogfish" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="home-text thq-body-small thq-link">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small thq-link">About Us</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text002 thq-body-small thq-link">
              Initiatives
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-body-small thq-link">Contact</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text004 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text005 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text006 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text007 thq-body-large">Page Four</span>
          </fragment>
        }
        action1={
          <fragment>
            <span>Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span>Secondary Action</span>
          </fragment>
        }
        page1Description={
          <fragment>
            <span className="thq-body-small">Page One Description</span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="thq-body-small">Page Two Description</span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="thq-body-small">Page Three Description</span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="thq-body-small">Page Four Description</span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <fragment>
            <span className="thq-body-small">Join the Consortium</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="thq-body-small">Learn More</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text016 thq-body-large">
              Join us in shaping the future of AI by collaborating with
              governments, industries, and academia to drive innovation,
              economic growth, and societal benefits.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text017 thq-heading-1">
              Empowering AI Innovation Across the Commonwealth
            </span>
          </fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Capacity Building</span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Ethical Standards</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Inclusive Technologies</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Empowering individuals and organizations with the knowledge and
              skills to harness the potential of AI.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Promoting ethical guidelines and best practices to ensure AI
              technologies are developed and used responsibly.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Advocating for the development of AI solutions that are accessible
              and beneficial to all members of society.
            </span>
          </fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <fragment>
            <span>Sign up now</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-large">
              Collaborate with global partners to drive AI innovation and create
              societal impact.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">
              Join the Commonwealth AI Consortium today!
            </span>
          </fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Capacity Building</span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Ethical Standards</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Inclusive Technologies</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Empowering individuals and organizations with the knowledge and
              skills to harness the potential of AI.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Promoting ethical guidelines and best practices to ensure AI
              technologies are developed and used responsibly.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Advocating for the development of AI solutions that are accessible
              and beneficial to all members of society.
            </span>
          </fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <fragment>
            <span className="home-text033 thq-body-large">Free Tier</span>
          </fragment>
        }
        plan2={
          <fragment>
            <span className="home-text034 thq-body-large">Business plan</span>
          </fragment>
        }
        plan3={
          <fragment>
            <span className="home-text035 thq-body-large">Enterprise plan</span>
          </fragment>
        }
        plan11={
          <fragment>
            <span className="home-text036 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan21={
          <fragment>
            <span className="home-text037 thq-body-large">Business plan</span>
          </fragment>
        }
        plan31={
          <fragment>
            <span className="home-text038 thq-body-large">Enterprise plan</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text039 thq-body-small">
              Get started with our Free Tier plan and explore the world of AI
              with limited features and resources.
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="home-text040 thq-body-large">
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
            <span className="home-text043 thq-heading-2">
              Choose the plan that suits your needs best
            </span>
          </fragment>
        }
        plan1Price={
          <fragment>
            <span className="home-text044 thq-heading-3">Free</span>
          </fragment>
        }
        plan2Price={
          <fragment>
            <span className="home-text045 thq-heading-3">$29/mo</span>
          </fragment>
        }
        plan3Price={
          <fragment>
            <span className="home-text046 thq-heading-3">$49/mo</span>
          </fragment>
        }
        plan1Action={
          <fragment>
            <span className="thq-body-small">Sign Up</span>
          </fragment>
        }
        plan1Price1={
          <fragment>
            <span className="home-text048 thq-heading-3">N/A</span>
          </fragment>
        }
        plan1Yearly={
          <fragment>
            <span className="thq-body-large">N/A</span>
          </fragment>
        }
        plan2Action={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan2Price1={
          <fragment>
            <span className="home-text051 thq-heading-3">$299/yr</span>
          </fragment>
        }
        plan2Yearly={
          <fragment>
            <span className="thq-body-large">or $299 yearly</span>
          </fragment>
        }
        plan3Action={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan3Price1={
          <fragment>
            <span className="home-text054 thq-heading-3">$499/yr</span>
          </fragment>
        }
        plan3Yearly={
          <fragment>
            <span className="thq-body-large">or $499 yearly</span>
          </fragment>
        }
        plan1Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan1Yearly1={
          <fragment>
            <span className="thq-body-large">N/A</span>
          </fragment>
        }
        plan2Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan2Yearly1={
          <fragment>
            <span className="thq-body-large">or $29 monthly</span>
          </fragment>
        }
        plan3Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan3Yearly1={
          <fragment>
            <span className="thq-body-large">or $49 monthly</span>
          </fragment>
        }
        plan1Feature1={
          <fragment>
            <span className="thq-body-small">Access to AI resources</span>
          </fragment>
        }
        plan1Feature2={
          <fragment>
            <span className="thq-body-small">Community support</span>
          </fragment>
        }
        plan1Feature3={
          <fragment>
            <span className="thq-body-small">
              Limited access to training materials
            </span>
          </fragment>
        }
        plan2Feature1={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature2={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature3={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature1={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature2={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature3={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature5={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature11={
          <fragment>
            <span className="thq-body-small">N/A</span>
          </fragment>
        }
        plan1Feature21={
          <fragment>
            <span className="thq-body-small">N/A</span>
          </fragment>
        }
        plan1Feature31={
          <fragment>
            <span className="thq-body-small">N/A</span>
          </fragment>
        }
        plan2Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature51={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <fragment>
            <span className="thq-heading-2">Join the Consortium</span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="thq-heading-2">
              Participate in Capacity Building
            </span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="thq-heading-2">
              Adopt Responsible AI Practices
            </span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="thq-heading-2">
              Contribute to Global Challenges
            </span>
          </fragment>
        }
        step1Description={
          <fragment>
            <span className="home-text090 thq-body-small">
              Become a member of the Commonwealth AI Consortium to collaborate
              with governments, private sectors, academics, and researchers from
              across the Commonwealth.
            </span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text091 thq-body-small">
              Engage in capacity building programs and skills development
              initiatives to enhance your knowledge and expertise in AI
              technologies.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text092 thq-body-small">
              Implement responsible AI governance frameworks to ensure
              transparency, accountability, and equity in AI systems.
            </span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text093 thq-body-small">
              Work together with international partners to address global
              challenges effectively using AI innovation and inclusive
              technologies.
            </span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <fragment>
            <span className="home-text094 thq-body-small">
              I have had the privilege to work closely with the Consortium on
              various projects, and I must say their dedication to responsible
              AI governance is truly commendable.
            </span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text095 thq-body-small">
              As an academic, I appreciate the emphasis the Consortium places on
              capacity building and skills development in the field of AI. Their
              efforts are shaping the future of AI education.
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text096 thq-body-small">
              Working with the Consortium has been a transformative experience.
              Their focus on transparency and equity in AI systems is crucial
              for addressing global challenges effectively.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text097 thq-body-small">
              The Commonwealth AI Consortium stands out for its collaborative
              approach towards driving AI innovation. I have seen firsthand the
              positive impact they are making in shaping a better future through
              AI.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text098 thq-body-small">
              The Commonwealth AI Consortium has been instrumental in fostering
              collaboration and innovation in the AI space. Their commitment to
              ethical standards and inclusive technologies sets a benchmark for
              others to follow.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Testimonials</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="thq-body-large">John Smith</span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="thq-body-large">Emily Johnson</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="thq-body-large">David Lee</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="thq-body-large">Sarah Patel</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="thq-body-small">CEO, Tech Solutions Ltd.</span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="thq-body-small">
              Head of Research, AI Institute
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="thq-body-small">
              Professor of Computer Science
            </span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="thq-body-small">
              Policy Advisor, Ministry of Technology
            </span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="thq-body-large">
              For inquiries or partnership opportunities, please reach out to us
              using the contact information below.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Contact Us</span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="home-text110 thq-heading-3">London Office</span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="home-text111 thq-heading-3">Singapore Office</span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="thq-body-large">
              123 Commonwealth Street, London, UK
            </span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="thq-body-large">
              456 Commonwealth Avenue, Singapore
            </span>
          </fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <fragment>
            <span className="thq-body-small">About Us</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small">Contact Us</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small">Join the Consortium</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-body-small">News &amp; Events</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="thq-body-small">Resources</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="thq-body-small">Terms of Use</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="thq-body-small">Cookies Policy</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="home-text121 thq-body-small">Privacy Policy</span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
