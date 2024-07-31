import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Features16 from '../components/features16'
import Logos8 from '../components/logos8'
import Team14 from '../components/team14'
import CTA15 from '../components/cta15'
import Footer4 from '../components/footer4'
import './members.css'

const Members = (props) => {
  return (
    <div className="members-container">
      <Helmet>
        <title>Members - Timely Sentimental Dogfish</title>
        <meta
          property="og:title"
          content="Members - Timely Sentimental Dogfish"
        />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="members-text thq-body-small thq-link">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="members-text01 thq-body-small thq-link">
              About Us
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="members-text02 thq-body-small thq-link">
              Initiatives
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="members-text03 thq-body-small thq-link">
              Members
            </span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="members-text04 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="members-text05 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="members-text06 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="members-text07 thq-body-large">Page Four</span>
          </fragment>
        }
        link41={
          <fragment>
            <span className="members-text08 thq-body-small thq-link">
              Contact
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="members-text09">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="members-text10">Secondary Action</span>
          </fragment>
        }
        logoSrc="/screenshot%202024-07-31%20at%2013.58.42-1500h.png"
        link1Url="/"
        link3Url="/initiatives"
        page1Description={
          <fragment>
            <span className="members-text11 thq-body-small">
              Page One Description
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="members-text12 thq-body-small">
              Page Two Description
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="members-text13 thq-body-small">
              Page Three Description
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="members-text14 thq-body-small">
              Page Four Description
            </span>
          </fragment>
        }
      ></Navbar8>
      <Banner1
        action1={
          <fragment>
            <span className="members-text15">
              Join us in shaping the future of AI
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="members-text16 thq-heading-3">
              Driving AI innovation across the Commonwealth while promoting
              ethical standards, inclusive technologies, and capacity building
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="members-text17 thq-heading-2">
              Welcome to the Commonwealth AI Consortium
            </span>
          </fragment>
        }
      ></Banner1>
      <Features16
        slogan1={
          <fragment>
            <span className="members-text18 thq-body-small">Slogan</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="members-text19 thq-body-large">
              Discover the core features of the Commonwealth AI Consortium that
              drive innovation and collaboration.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="members-text20 thq-heading-2">Key Features</span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="members-text21 thq-heading-3">
              Ethical Standards
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="members-text22 thq-heading-3">
              Inclusive Technologies
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="members-text23 thq-heading-3">
              Capacity Building
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="members-text24 thq-body-small">
              Promoting ethical AI practices and ensuring responsible use of
              artificial intelligence technologies.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="members-text25 thq-body-small">
              Fostering the development of inclusive AI technologies that
              benefit all members of society.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="members-text26 thq-body-small">
              Empowering individuals and organizations through skills
              development programs to enhance AI capabilities.
            </span>
          </fragment>
        }
      ></Features16>
      <Logos8
        content1={
          <fragment>
            <span className="members-text27 thq-body-large">
              Driving AI innovation across the Commonwealth while promoting
              ethical standards, inclusive technologies, and capacity building.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="members-text28 thq-heading-2">
              Welcome to the Commonwealth AI Consortium
            </span>
          </fragment>
        }
      ></Logos8>
      <Team14
        member1={
          <fragment>
            <span className="members-text29 thq-body-small">
              Dr. Sarah Johnson
            </span>
          </fragment>
        }
        member2={
          <fragment>
            <span className="members-text30 thq-body-small">John Ngugi</span>
          </fragment>
        }
        member3={
          <fragment>
            <span className="members-text31 thq-body-small">Aisha Patel</span>
          </fragment>
        }
        member4={
          <fragment>
            <span className="members-text32 thq-body-small">Maria Santos</span>
          </fragment>
        }
        member5={
          <fragment>
            <span className="members-text33 thq-body-small">Chen Wei</span>
          </fragment>
        }
        member6={
          <fragment>
            <span className="members-text34 thq-body-small">Fatima Khan</span>
          </fragment>
        }
        member7={
          <fragment>
            <span className="members-text35 thq-body-small">
              David O&apos;Connor
            </span>
          </fragment>
        }
        member8={
          <fragment>
            <span className="members-text36 thq-body-small">Luis Ramirez</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="members-text37 thq-body-small">
              Our team consists of diverse experts in AI from around the
              Commonwealth who are dedicated to driving innovation while
              upholding ethical standards and promoting inclusivity.
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="members-text38 thq-body-large">
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
            <span className="members-text41 thq-heading-2">Meet Our Team</span>
          </fragment>
        }
        member1Job={
          <fragment>
            <span className="members-text42 thq-body-small">AI Researcher</span>
          </fragment>
        }
        member2Job={
          <fragment>
            <span className="members-text43 thq-body-small">AI Developer</span>
          </fragment>
        }
        member3Job={
          <fragment>
            <span className="members-text44 thq-body-small">AI Ethicist</span>
          </fragment>
        }
        member4Job={
          <fragment>
            <span className="members-text45 thq-body-small">
              AI Policy Analyst
            </span>
          </fragment>
        }
        member5Job={
          <fragment>
            <span className="members-text46 thq-body-small">AI Engineer</span>
          </fragment>
        }
        member6Job={
          <fragment>
            <span className="members-text47 thq-body-small">
              AI Project Manager
            </span>
          </fragment>
        }
        member7Job={
          <fragment>
            <span className="members-text48 thq-body-small">AI Educator</span>
          </fragment>
        }
        member8Job={
          <fragment>
            <span className="members-text49 thq-body-small">AI Strategist</span>
          </fragment>
        }
        actionContent={
          <fragment>
            <span className="members-text50 thq-body-small">
              Open positions
            </span>
          </fragment>
        }
        member1Content={
          <fragment>
            <span className="members-text51 thq-body-small">
              Dr. Sarah Johnson is a leading AI researcher with a focus on
              responsible AI practices and capacity building initiatives.
            </span>
          </fragment>
        }
        member2Content={
          <fragment>
            <span className="members-text52 thq-body-small">
              John Ngugi is an experienced AI developer passionate about
              creating inclusive technologies and fostering collaboration.
            </span>
          </fragment>
        }
        member3Content={
          <fragment>
            <span className="members-text53 thq-body-small">
              Aisha Patel specializes in AI ethics and works towards ensuring
              transparency and equity in AI applications.
            </span>
          </fragment>
        }
        member4Content={
          <fragment>
            <span className="members-text54 thq-body-small">
              Maria Santos focuses on analyzing AI policies and regulations to
              promote responsible AI governance.
            </span>
          </fragment>
        }
        member5Content={
          <fragment>
            <span className="members-text55 thq-body-small">
              Chen Wei is an AI engineer dedicated to developing cutting-edge AI
              solutions with a focus on skills development.
            </span>
          </fragment>
        }
        member6Content={
          <fragment>
            <span className="members-text56 thq-body-small">
              Fatima Khan excels in managing AI projects and initiatives that
              contribute to addressing global challenges.
            </span>
          </fragment>
        }
        member7Content={
          <fragment>
            <span className="members-text57 thq-body-small">
              David O&apos;Connor is an AI educator who advocates for inclusive
              education on AI technologies for all.
            </span>
          </fragment>
        }
        member8Content={
          <fragment>
            <span className="members-text58 thq-body-small">
              Luis Ramirez strategizes on leveraging AI for sustainable
              development goals and fostering international collaboration.
            </span>
          </fragment>
        }
      ></Team14>
      <CTA15
        action1={
          <fragment>
            <span className="members-text59">Sign Up Now</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="members-text60">Learn More</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="members-text61 thq-body-large">
              Become a member today and be part of a global community driving AI
              innovation with ethics and inclusivity at its core.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="members-text62 thq-heading-2">
              Join the Commonwealth AI Consortium
            </span>
          </fragment>
        }
      ></CTA15>
      <Footer4
        link1={
          <fragment>
            <span className="members-text63 thq-body-small">About Us</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="members-text64 thq-body-small">Contact Us</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="members-text65 thq-body-small">
              News &amp; Events
            </span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="members-text66 thq-body-small">Resources</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="members-text67 thq-body-small">Terms of Use</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="members-text68 thq-body-small">
              Cookies Policy
            </span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="members-text69 thq-body-small">
              Privacy Policy
            </span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Members
