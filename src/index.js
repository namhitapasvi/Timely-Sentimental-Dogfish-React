import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Landing from './views/landing'
import Home from './views/home'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Home} exact path="/home" />
        <Route component={Page} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
