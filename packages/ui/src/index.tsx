import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/App'

import './styles/index.less'

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  sessionStorage.setItem('collapsedMenu', 'true');
} else {
  sessionStorage.setItem('collapsedMenu', 'false');
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
