import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Members from './views/members'
import About from './views/about'
import Initiatives from './views/initiatives'
import Home from './views/home'
import Blog from './views/blog'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Contact} exact path="/contact" />
        <Route component={Members} exact path="/members" />
        <Route component={About} exact path="/about" />
        <Route component={Initiatives} exact path="/initiatives" />
        <Route component={Home} exact path="/" />
        <Route component={Blog} exact path="/blog" />
        <Route component={Page} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
