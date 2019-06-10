import * as React from "react"
import {
  HashRouter as Router, Switch, Route
} from 'react-router-dom'

import Home from './Home'
import AboutMe from './AboutMe'

export const App = () => <Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aboutme" exact component={AboutMe} />
  </Switch>
</Router>
