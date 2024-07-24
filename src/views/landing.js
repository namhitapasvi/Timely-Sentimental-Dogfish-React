import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero171 from '../components/hero171'
import Features241 from '../components/features241'
import CTA261 from '../components/cta261'
import Features251 from '../components/features251'
import Pricing141 from '../components/pricing141'
import Steps21 from '../components/steps21'
import Testimonial171 from '../components/testimonial171'
import Contact101 from '../components/contact101'
import Footer4 from '../components/footer4'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Timely Sentimental Dogfish</title>
        <meta property="og:title" content="Timely Sentimental Dogfish" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="landing-text thq-body-small thq-link">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small thq-link">About Us</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="landing-text002 thq-body-small thq-link">
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
            <span className="landing-text004 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="landing-text005 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="landing-text006 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="landing-text007 thq-body-large">Page Four</span>
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
      <Hero171
        action1={
          <fragment>
            <span className="thq-body-small">Shop Now</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="thq-body-small">Learn More</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="landing-text016 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="landing-text017 thq-heading-1">
              Discover the Power of Our Products
            </span>
          </fragment>
        }
      ></Hero171>
      <Features241
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Product Power Unleashed</span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Intuitive Design</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Advanced Functionality</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Explore the full potential of our products
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Efficient and user-friendly interface
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Detailed insights into product capabilities
            </span>
          </fragment>
        }
      ></Features241>
      <CTA261
        action1={
          <fragment>
            <span>Get Started</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-large">
              Discover our innovative products and revolutionize your workflow
              today.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">
              Experience the Power of TeleportHQ
            </span>
          </fragment>
        }
      ></CTA261>
      <Features251
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Product Showcase</span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Step-by-Step Directions</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">TeleportHQ Integration</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Highlight your products in a visually appealing way to showcase
              their power.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Provide clear directions on how to use the products effectively to
              maximize their potential.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Seamlessly integrate TeleportHQ to create stunning landing pages
              for your products with ease.
            </span>
          </fragment>
        }
      ></Features251>
      <Pricing141
        plan1={
          <fragment>
            <span className="landing-text033 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan2={
          <fragment>
            <span className="landing-text034 thq-body-large">
              Business plan
            </span>
          </fragment>
        }
        plan3={
          <fragment>
            <span className="landing-text035 thq-body-large">
              Enterprise plan
            </span>
          </fragment>
        }
        plan11={
          <fragment>
            <span className="landing-text036 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan21={
          <fragment>
            <span className="landing-text037 thq-body-large">
              Business plan
            </span>
          </fragment>
        }
        plan31={
          <fragment>
            <span className="landing-text038 thq-body-large">
              Enterprise plan
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="landing-text039 thq-body-small">
              Choose the perfect plan for you
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="landing-text040 thq-body-large">
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
            <span className="landing-text043 thq-heading-2">Pricing plan</span>
          </fragment>
        }
        plan1Price={
          <fragment>
            <span className="landing-text044 thq-heading-3">$9.99/month</span>
          </fragment>
        }
        plan2Price={
          <fragment>
            <span className="landing-text045 thq-heading-3">$19.99/month</span>
          </fragment>
        }
        plan3Price={
          <fragment>
            <span className="landing-text046 thq-heading-3">$29.99/month</span>
          </fragment>
        }
        plan1Action={
          <fragment>
            <span className="thq-body-small">Get Started</span>
          </fragment>
        }
        plan1Price1={
          <fragment>
            <span className="landing-text048 thq-heading-3">$200/yr</span>
          </fragment>
        }
        plan1Yearly={
          <fragment>
            <span className="thq-body-large">or $200 yearly</span>
          </fragment>
        }
        plan2Action={
          <fragment>
            <span className="thq-body-small">Get Started</span>
          </fragment>
        }
        plan2Price1={
          <fragment>
            <span className="landing-text051 thq-heading-3">$299/yr</span>
          </fragment>
        }
        plan2Yearly={
          <fragment>
            <span className="thq-body-large">or $299 yearly</span>
          </fragment>
        }
        plan3Action={
          <fragment>
            <span className="thq-body-small">Get Started</span>
          </fragment>
        }
        plan3Price1={
          <fragment>
            <span className="landing-text054 thq-heading-3">$499/yr</span>
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
            <span className="thq-body-large">or $20 monthly</span>
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
            <span className="thq-body-small">
              Unlimited access to all products
            </span>
          </fragment>
        }
        plan1Feature2={
          <fragment>
            <span className="thq-body-small">
              Exclusive members-only discounts
            </span>
          </fragment>
        }
        plan1Feature3={
          <fragment>
            <span className="thq-body-small">24/7 customer support</span>
          </fragment>
        }
        plan2Feature1={
          <fragment>
            <span className="thq-body-small">All features in Plan 1</span>
          </fragment>
        }
        plan2Feature2={
          <fragment>
            <span className="thq-body-small">Early access to new products</span>
          </fragment>
        }
        plan2Feature3={
          <fragment>
            <span className="thq-body-small">
              Personalized product recommendations
            </span>
          </fragment>
        }
        plan2Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature1={
          <fragment>
            <span className="thq-body-small">All features in Plan 2</span>
          </fragment>
        }
        plan3Feature2={
          <fragment>
            <span className="thq-body-small">Priority customer support</span>
          </fragment>
        }
        plan3Feature3={
          <fragment>
            <span className="thq-body-small">Custom product consultations</span>
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
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
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
      ></Pricing141>
      <Steps21
        step1Title={
          <fragment>
            <span className="thq-heading-2">Choose Your Product</span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="thq-heading-2">Customize Your Selection</span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="thq-heading-2">Place Your Order</span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="thq-heading-2">Enjoy Your Purchase</span>
          </fragment>
        }
        step1Description={
          <fragment>
            <span className="landing-text090 thq-body-small">
              Browse through our wide selection of products and choose the one
              that best fits your needs.
            </span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="landing-text091 thq-body-small">
              Personalize your chosen product by selecting from various
              customization options available.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="landing-text092 thq-body-small">
              Once you are satisfied with your customized product, proceed to
              place your order securely.
            </span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="landing-text093 thq-body-small">
              Sit back and relax while we prepare your order for shipping. Get
              ready to enjoy your new purchase!
            </span>
          </fragment>
        }
      ></Steps21>
      <Testimonial171
        review1={
          <fragment>
            <span className="landing-text094 thq-body-small">
              TeleportHQ has revolutionized the way we showcase our products.
              The power and flexibility it offers are unmatched.
            </span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="landing-text095 thq-body-small">
              I have been using TeleportHQ for a while now, and I must say it
              has made my job so much easier. Highly recommended.
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="landing-text096 thq-body-small">
              TeleportHQ&apos;s features are top-notch. It has helped us
              streamline our product showcasing process and increase efficiency.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="landing-text097 thq-body-small">
              I love how TeleportHQ allows us to bring our product ideas to life
              with ease. It&apos;s a game-changer for our team.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="landing-text098 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Customer Testimonials</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="thq-body-large">John Doe</span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="thq-body-large">Jane Smith</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="thq-body-large">Michael Johnson</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="thq-body-large">Sarah Williams</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="thq-body-small">CEO, Company ABC</span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="thq-body-small">
              Marketing Manager, Company XYZ
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="thq-body-small">CTO, Tech Solutions Inc.</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="thq-body-small">
              Creative Director, Design Studio
            </span>
          </fragment>
        }
      ></Testimonial171>
      <Contact101
        content1={
          <fragment>
            <span className="thq-body-large">
              Have a question or need support? Reach out to us!
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
            <span className="landing-text110 thq-heading-3">
              TeleportHQ Headquarters
            </span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="landing-text111 thq-heading-3">
              Customer Support Center
            </span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="thq-body-large">
              123 Main Street, City, Country
            </span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="thq-body-large">
              For any inquiries or assistance, contact our support team.
            </span>
          </fragment>
        }
      ></Contact101>
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
            <span className="landing-text121 thq-body-small">
              Privacy Policy
            </span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Landing
