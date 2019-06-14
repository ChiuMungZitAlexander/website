import * as React from 'react'

import Home from 'icons/Home'

interface TItem {
  key: string,
  label: string,
  pathname: string,
  to: string,
  icon: Function,
}

const ITEMS: TItem[] = [
  {
    key: 'home',
    label: 'HOME',
    pathname: '/',
    to: '/',
    icon: (props: any) => <Home {...props} />
  },
  {
    key: 'aboutme',
    label: 'About Me',
    pathname: '/aboutme',
    to: '/aboutme',
    icon: (props: any) => <Home {...props} />
  },
  {
    key: 'tutorials',
    label: 'TUTORIALS',
    pathname: '/tutorials',
    to: '/tutorials',
    icon: (props: any) => <Home {...props} />
  },
  {
    key: 'tblogs',
    label: 'T BLOGS',
    pathname: '/tblogs',
    to: '/tblogs',
    icon: (props: any) => <Home {...props} />
  },
  {
    key: 'games',
    label: 'GAMES',
    pathname: '/games',
    to: '/games',
    icon: (props: any) => <Home {...props} />
  }
]

export default ITEMS
