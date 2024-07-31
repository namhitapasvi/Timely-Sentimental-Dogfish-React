import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Timeline4 from '../components/timeline4'
import FAQ4 from '../components/faq4'
import Team7 from '../components/team7'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Timely Sentimental Dogfish</title>
        <meta
          property="og:title"
          content="About - Timely Sentimental Dogfish"
        />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="about-text thq-body-small thq-link">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="about-text01 thq-body-small thq-link">
              About Us
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="about-text02 thq-body-small thq-link">
              Initiatives
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="about-text03 thq-body-small thq-link">
              Members
            </span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="about-text04 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="about-text05 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="about-text06 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="about-text07 thq-body-large">Page Four</span>
          </fragment>
        }
        link41={
          <fragment>
            <span className="about-text08 thq-body-small thq-link">
              Contact
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="about-text09">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="about-text10">Secondary Action</span>
          </fragment>
        }
        logoSrc="/screenshot%202024-07-31%20at%2013.58.42-1500h.png"
        page1Description={
          <fragment>
            <span className="about-text11 thq-body-small">
              Page One Description
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="about-text12 thq-body-small">
              Page Two Description
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="about-text13 thq-body-small">
              Page Three Description
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="about-text14 thq-body-small">
              Page Four Description
            </span>
          </fragment>
        }
      ></Navbar8>
      <Hero8
        action1={
          <fragment>
            <span className="about-text15 thq-body-small">Learn More</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="about-text16 thq-body-small">
              Explore Membership Plans
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="about-text17 thq-body-large">
              Empowering AI innovation across the Commonwealth
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="about-text18 thq-heading-1">
              Welcome to the Commonwealth AI Consortium
            </span>
          </fragment>
        }
        videoSrc="namantapasvi.com"
        image1Src="https://production-new-commonwealth-files.s3.eu-west-2.amazonaws.com/s3fs-public/styles/banner/public/2023-10/DSC09901.jpg?VersionId=f3FtWePHQF_Q6.Wndi_DxQRB7b_tpZER&amp;itok=_v2pzaej"
      ></Hero8>
      <Timeline4
        date1={
          <fragment>
            <span className="about-text19 thq-heading-3">April 2023</span>
          </fragment>
        }
        date2={
          <fragment>
            <span className="about-text20 thq-heading-3">March 2022</span>
          </fragment>
        }
        date3={
          <fragment>
            <span className="about-text21 thq-heading-3">May 2022</span>
          </fragment>
        }
        date4={
          <fragment>
            <span className="about-text22 thq-heading-3">August 2022</span>
          </fragment>
        }
        title1={
          <fragment>
            <span className="about-text23 thq-heading-2">Our Journey</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="about-text24">Primary action</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="about-text25 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </span>
          </fragment>
        }
        card1Action1={
          <fragment>
            <span className="about-text26">Learn More</span>
          </fragment>
        }
        card1Content={
          <fragment>
            <span className="about-text27 thq-body-small">
              Founding members come together to establish the Commonwealth AI
              Consortium with a vision for driving AI innovation.
            </span>
          </fragment>
        }
        card1Heading={
          <fragment>
            <span className="about-text28 thq-heading-3">
              Formation of the Consortium
            </span>
          </fragment>
        }
        card2Action1={
          <fragment>
            <span className="about-text29">Explore Programs</span>
          </fragment>
        }
        card2Content={
          <fragment>
            <span className="about-text30 thq-body-small">
              Capacity building programs are launched to empower individuals and
              organizations with AI skills and knowledge.
            </span>
          </fragment>
        }
        card2Heading={
          <fragment>
            <span className="about-text31 thq-heading-3">
              Introduction of Training Initiatives
            </span>
          </fragment>
        }
        card3Action1={
          <fragment>
            <span className="about-text32">Read Guidelines</span>
          </fragment>
        }
        card3Content={
          <fragment>
            <span className="about-text33 thq-body-small">
              Publication of ethical guidelines to promote responsible AI
              practices within the Consortium and beyond.
            </span>
          </fragment>
        }
        card3Heading={
          <fragment>
            <span className="about-text34 thq-heading-3">
              Release of Ethical Standards
            </span>
          </fragment>
        }
        card4Action1={
          <fragment>
            <span className="about-text35">View Event Details</span>
          </fragment>
        }
        card4Content={
          <fragment>
            <span className="about-text36 thq-body-small">
              Members gather at the Global AI Innovation Summit to showcase
              projects, share insights, and foster collaborations.
            </span>
          </fragment>
        }
        card4Heading={
          <fragment>
            <span className="about-text37 thq-heading-3">
              Participation in Summit
            </span>
          </fragment>
        }
      ></Timeline4>
      <FAQ4
        content1={
          <fragment>
            <span className="about-text38 thq-body-large">
              <span>
                Join us in our mission to promote responsible AI practices and
                drive innovation across the Commonwealth.
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
            <span className="about-text41 thq-heading-2">
              Structure of the CAIC
            </span>
          </fragment>
        }
        faq1Answer={
          <fragment>
            <span className="about-text42 thq-body-small">
              The Commonwealth AI Consortium is an organization that focuses on
              empowering AI innovation across the Commonwealth by promoting
              ethical standards, inclusive technologies, and capacity building.
            </span>
          </fragment>
        }
        faq2Answer={
          <fragment>
            <span className="about-text43 thq-body-small">
              The Commonwealth AI Consortium collaborates with governments,
              industries, and academia to drive innovation and address global
              challenges through responsible AI practices.
            </span>
          </fragment>
        }
        faq3Answer={
          <fragment>
            <span className="about-text44 thq-body-small">
              The key focus areas of the Commonwealth AI Consortium include
              promoting ethical standards, inclusive technologies, and capacity
              building in the field of AI.
            </span>
          </fragment>
        }
        faq4Answer={
          <fragment>
            <span className="about-text45 thq-body-small">
              You can contribute to the Commonwealth AI Consortium by
              participating in our programs, sharing your expertise, and
              supporting our initiatives.
            </span>
          </fragment>
        }
        faq5Answer={
          <fragment>
            <span className="about-text46 thq-body-small">
              Membership is not required to benefit from the Commonwealth AI
              Consortium&apos;s initiatives. We welcome collaboration from all
              stakeholders interested in promoting responsible AI practices.
            </span>
          </fragment>
        }
        faq6Answer={
          <fragment>
            <span className="about-text47 thq-body-small">
              The Commonwealth AI Consortium promotes ethical standards in AI
              through guidelines, best practices, and awareness campaigns aimed
              at fostering a culture of responsible AI use.
            </span>
          </fragment>
        }
        faq7Answer={
          <fragment>
            <span className="about-text48 thq-body-small">
              The Commonwealth AI Consortium works with a wide range of
              industries, including technology, healthcare, finance, and more,
              to drive innovation and promote responsible AI practices.
            </span>
          </fragment>
        }
        faq8Answer={
          <fragment>
            <span className="about-text49 thq-body-small">
              Yes, the Commonwealth AI Consortium offers training programs in AI
              to help build capacity and foster skills development in the field
              of artificial intelligence.
            </span>
          </fragment>
        }
        faq9Answer={
          <fragment>
            <span className="about-text50 thq-body-small">
              Governments can benefit from collaborating with the Commonwealth
              AI Consortium by gaining access to expertise, resources, and best
              practices to implement responsible AI policies and initiatives.
            </span>
          </fragment>
        }
        faq10Answer={
          <fragment>
            <span className="about-text51 thq-body-small">
              The goals of the Commonwealth AI Consortium include driving
              innovation, promoting ethical standards, fostering inclusivity,
              and building capacity in the field of artificial intelligence.
            </span>
          </fragment>
        }
        faq1Question={
          <fragment>
            <span className="about-text52 thq-body-large">
              What is the Commonwealth AI Consortium?
            </span>
          </fragment>
        }
        faq2Question={
          <fragment>
            <span className="about-text53 thq-body-large">
              Who does the Commonwealth AI Consortium collaborate with?
            </span>
          </fragment>
        }
        faq3Question={
          <fragment>
            <span className="about-text54 thq-body-large">
              What are the key focus areas of the Commonwealth AI Consortium?
            </span>
          </fragment>
        }
        faq4Question={
          <fragment>
            <span className="about-text55 thq-body-large">
              How can I contribute to the Commonwealth AI Consortium?
            </span>
          </fragment>
        }
        faq5Question={
          <fragment>
            <span className="about-text56 thq-body-large">
              Is membership required to benefit from the Commonwealth AI
              Consortium&apos;s initiatives?
            </span>
          </fragment>
        }
        faq6Question={
          <fragment>
            <span className="about-text57 thq-body-large">
              How does the Commonwealth AI Consortium promote ethical standards
              in AI?
            </span>
          </fragment>
        }
        faq7Question={
          <fragment>
            <span className="about-text58 thq-body-large">
              What kind of industries does the Commonwealth AI Consortium work
              with?
            </span>
          </fragment>
        }
        faq8Question={
          <fragment>
            <span className="about-text59 thq-body-large">
              Does the Commonwealth AI Consortium offer training programs in AI?
            </span>
          </fragment>
        }
        faq9Question={
          <fragment>
            <span className="about-text60 thq-body-large">
              How can governments benefit from collaborating with the
              Commonwealth AI Consortium?
            </span>
          </fragment>
        }
        faq10Question={
          <fragment>
            <span className="about-text61 thq-body-large">
              What are the goals of the Commonwealth AI Consortium?
            </span>
          </fragment>
        }
      ></FAQ4>
      <Team7
        member1={
          <fragment>
            <span className="about-text62 thq-body-small">Dr. Aisha Patel</span>
          </fragment>
        }
        member2={
          <fragment>
            <span className="about-text63 thq-body-small">John Doe</span>
          </fragment>
        }
        member3={
          <fragment>
            <span className="about-text64 thq-body-small">Maria Sanchez</span>
          </fragment>
        }
        member4={
          <fragment>
            <span className="about-text65 thq-body-small">David Wong</span>
          </fragment>
        }
        member5={
          <fragment>
            <span className="about-text66 thq-body-small">Sarah Johnson</span>
          </fragment>
        }
        member6={
          <fragment>
            <span className="about-text67 thq-body-small">
              Alexandre Dubois
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="about-text68 thq-body-small">
              Our team consists of diverse experts in the field of AI who are
              dedicated to driving innovation responsibly and ethically.
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="about-text69 thq-body-large">
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
            <span className="about-text72 thq-heading-2">Meet Our Team</span>
          </fragment>
        }
        member1Job={
          <fragment>
            <span className="about-text73 thq-body-small">
              Chief Ethics Officer
            </span>
          </fragment>
        }
        member2Job={
          <fragment>
            <span className="about-text74 thq-body-small">
              Head of Technology
            </span>
          </fragment>
        }
        member3Job={
          <fragment>
            <span className="about-text75 thq-body-small">
              AI Research Scientist
            </span>
          </fragment>
        }
        member4Job={
          <fragment>
            <span className="about-text76 thq-body-small">
              Capacity Building Specialist
            </span>
          </fragment>
        }
        member5Job={
          <fragment>
            <span className="about-text77 thq-body-small">
              Partnerships Manager
            </span>
          </fragment>
        }
        member6Job={
          <fragment>
            <span className="about-text78 thq-body-small">
              Communications Director
            </span>
          </fragment>
        }
        member1Content={
          <fragment>
            <span className="about-text79 thq-body-small">
              Dr. Aisha Patel leads our efforts in promoting ethical standards
              in AI development and deployment.
            </span>
          </fragment>
        }
        member2Content={
          <fragment>
            <span className="about-text80 thq-body-small">
              John Doe oversees the technological aspects of our projects and
              ensures inclusive technologies are implemented.
            </span>
          </fragment>
        }
        member3Content={
          <fragment>
            <span className="about-text81 thq-body-small">
              Maria Sanchez contributes her expertise in AI research to address
              global challenges effectively.
            </span>
          </fragment>
        }
        member4Content={
          <fragment>
            <span className="about-text82 thq-body-small">
              David Wong focuses on capacity building initiatives to empower
              individuals and organizations with AI skills.
            </span>
          </fragment>
        }
        member5Content={
          <fragment>
            <span className="about-text83 thq-body-small">
              Sarah Johnson manages partnerships to foster collaboration and
              access to AI resources within the Consortium.
            </span>
          </fragment>
        }
        member6Content={
          <fragment>
            <span className="about-text84 thq-body-small">
              Alexandre Dubois leads our communication strategies to promote the
              Consortium&apos;s mission globally.
            </span>
          </fragment>
        }
      ></Team7>
      <Footer4
        link1={
          <fragment>
            <span className="about-text85 thq-body-small">About Us</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="about-text86 thq-body-small">Contact Us</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="about-text87 thq-body-small">
              News &amp; Events
            </span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="about-text88 thq-body-small">Resources</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="about-text89 thq-body-small">Terms of Use</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="about-text90 thq-body-small">Cookies Policy</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="about-text91 thq-body-small">Privacy Policy</span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
