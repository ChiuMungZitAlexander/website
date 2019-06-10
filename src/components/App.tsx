import * as React from "react"
import {
  MemoryRouter as Router, Switch, Route
} from 'react-router-dom'

import { Home } from './Home'

export const App = () => <Router>
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
</Router>
