import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import CTA26 from '../components/cta26'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Timely Sentimental Dogfish</title>
        <meta property="og:title" content="Timely Sentimental Dogfish" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="home-text thq-body-small thq-link">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text01 thq-body-small thq-link">
              About Us
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text02 thq-body-small thq-link">
              Initiatives
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text03 thq-body-small thq-link">Members</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text04 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text05 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text06 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text07 thq-body-large">Page Four</span>
          </fragment>
        }
        link41={
          <fragment>
            <span className="home-text08 thq-body-small thq-link">Contact</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="home-text09">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text10">Secondary Action</span>
          </fragment>
        }
        logoSrc="/screenshot%202024-07-31%20at%2013.58.42-1500h.png"
        link1Url="/"
        link3Url="/initiatives"
        page1Description={
          <fragment>
            <span className="home-text11 thq-body-small">
              Page One Description
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="home-text12 thq-body-small">
              Page Two Description
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="home-text13 thq-body-small">
              Page Three Description
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="home-text14 thq-body-small">
              Page Four Description
            </span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        content1={
          <fragment>
            <span className="home-text15 thq-body-large">
              Join us in shaping the future of AI by collaborating with
              governments, industries, and academia to drive innovation,
              economic growth, and societal benefits.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text16 thq-heading-1">
              Empowering AI Innovation Across the Commonwealth
            </span>
          </fragment>
        }
        image1Src="/img-1500w.jpeg"
      ></Hero17>
      <h1>Our Working Groups</h1>
      <Features24
        feature1Title={
          <fragment>
            <span className="home-text18 thq-heading-2">
              Research and Innovation
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text19 thq-heading-2">
              Capacity Building 
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text20 thq-heading-2">
              Data &amp; Infrastructure 
            </span>
          </fragment>
        }
        feature1Title1={
          <fragment>
            <span className="home-text21 thq-heading-2">Gover</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text22 thq-body-small">
              Empowering individuals and organizations with the knowledge and
              skills to harness the potential of AI.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text23 thq-body-small">
              Promoting ethical guidelines and best practices to ensure AI
              technologies are developed and used responsibly.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text24 thq-body-small">
              Advocating for the development of AI solutions that are accessible
              and beneficial to all members of society.
            </span>
          </fragment>
        }
        feature1Description1={
          <fragment>
            <span className="home-text25 thq-body-small">
              Empowering individuals and organizations with the knowledge and
              skills to harness the potential of AI.
            </span>
          </fragment>
        }
      ></Features24>
      <Steps2
        step1Title={
          <fragment>
            <span className="home-text26 thq-heading-2">
              Commonwealth AI Academy
            </span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="home-text27 thq-heading-2">AI Incubator</span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="home-text28 thq-heading-2">Make-a-Thon</span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="home-text29 thq-heading-2">Simplilearn</span>
          </fragment>
        }
        step1Description={
          <fragment>
            <span className="home-text30 thq-body-small">
              <span>
                A collaboration with Intel on building the AI capacity for the
                Commonwealth members through 
              </span>
              <span>
                skills and capacity building. The courses range from AI for the
                Public Sector to AI for Youths.
              </span>
            </span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text33 thq-body-small">
              Available for youth, including women who would like to benefit
              from learning- partnering with Universities and building solutions
              in SDG areas.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text34 thq-body-small">
              Together Commonwealth and OpenWeaver aim to build the AI research,
              capacity and data, and infrastructure environment for the
              stakeholders in the Commonwealth.
            </span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text35 thq-body-small">
              An industry-level certification from Simplilearn for free for
              countries and we can provide the offerings to your staff as well.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <fragment>
            <span className="home-text36 thq-body-small">
              This consortium is a significant milestone in giving our countries
              the tools they need to maximise the value of advanced technologies
              not only for economic growth, job creation and social inclusion
              but also to build a smarter future for everyone, particularly for
              young people as the Commonwealth celebrates 2023 as the Year of
              Youth. We will continue to welcome strategic collaborators to join
              this consortium.
            </span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text37 thq-body-small">
              The accelerating AI landscape presents an opportunity for all – if
              harnessed responsibly. The Commonwealth is rich in talent and
              diversity that can lead the development of sustainable and
              equitable AI outcomes for the world. Through this collaboration,
              we extend CSIRO’s world-leading Responsible AI expertise and
              National AI Centre’s Responsible AI Network to enable Commonwealth
              Small States with robust and responsible AI governance frameworks.
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text38 thq-body-small">
              NVIDIA is collaborating with the Commonwealth, and its partners,
              to transform 33 nations into AI Nations, creating an ‘on ramp’ for
              AI start-ups to turbocharge emerging economies, and harnessing the
              public cloud to bring accelerated computing and innovations in
              generative AI, climate AI, energy AI, health AI, agriculture AI,
              and more to the Global South.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text39 thq-body-small">
              AI is the technology that will define the coming decades with the
              potential to supercharge economies, create new industries and
              amplify human ingenuity. It’s vital that this technology brings
              new opportunities to all. Microsoft is proud to work with NVIDIA,
              the Commonwealth Secretariat and others to bring the benefits of
              AI to more people, in more countries, across the Commonwealth.
            </span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="home-text40 thq-body-large">John Smith</span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="home-text41 thq-body-large">Stela Solar</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="home-text42 thq-body-large">Keith Strier</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="home-text43 thq-body-large">Hugh Milward</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="home-text44 thq-body-small">
              Secretary General, Commonwealth Secretariat
            </span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="home-text45 thq-body-small">
              Director of Australia’s National AI Centre
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="home-text46 thq-body-small">
              Vice President of Worldwide AI Initiative at NVIDIA
            </span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="home-text47 thq-body-small">
              General Manager, Corporate, External, Legal Affairs at Microsoft,
            </span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="home-text48 thq-body-large">
              For inquiries or partnership opportunities, please reach out to us
              using the contact information below.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text49 thq-heading-2">Contact Us</span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="home-text50 thq-heading-3">London Office</span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="home-text51 thq-body-large">
              123 Commonwealth Street, London, UK
            </span>
          </fragment>
        }
      ></Contact10>
      <CTA26
        action1={
          <fragment>
            <span className="home-text52">Contact Us</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text53 thq-body-large">
              Collaborate with global partners to drive AI innovation and create
              societal impact.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text54 thq-heading-2">
              Join the Commonwealth AI Consortium today!
            </span>
          </fragment>
        }
      ></CTA26>
      <Footer4
        link1={
          <fragment>
            <span className="home-text55 thq-body-small">About Us</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text56 thq-body-small">Contact Us</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text57 thq-body-small">
              News &amp; Events
            </span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="home-text58 thq-body-small">Resources</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="home-text59 thq-body-small">Terms of Use</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="home-text60 thq-body-small">Cookies Policy</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="home-text61 thq-body-small">Privacy Policy</span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
