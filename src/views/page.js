import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Timely Sentimental Dogfish</title>
        <meta property="og:title" content="Page - Timely Sentimental Dogfish" />
      </Helmet>
    </div>
  )
}

export default Page
