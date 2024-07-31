import React from 'react'

import { Helmet } from 'react-helmet'

import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Timely Sentimental Dogfish</title>
        <meta property="og:title" content="Blog - Timely Sentimental Dogfish" />
      </Helmet>
    </div>
  )
}

export default Blog
