import * as React from "react"
import {
  HashRouter as Router, Switch, Route
} from 'react-router-dom'

import Home from './Home'
import AboutMe from './AboutMe'
import Tutorials from './Tutorials'
import TBlogs from './TBlogs'
import Games from './Games'

export const App = () => <Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aboutme" exact component={AboutMe} />
    <Route path="/tutorials" exact component={Tutorials} />
    <Route path="/tblogs" exact component={TBlogs} />
    <Route path="/games" exact component={Games} />
  </Switch>
</Router>
