import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/App'
import Context from './Context'

import './styles/index.less'

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('app')
)
