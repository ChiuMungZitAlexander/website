import * as React from 'react'
import * as classnames from 'classnames'

import Home from 'icons/routers/Home'
import AboutMe from 'icons/routers/AboutMe'
import Tutorials from 'icons/routers/Tutorials'
import Blogs from 'icons/routers/Blogs'
import Games from 'icons/routers/Games'

interface TItem {
  key: string,
  label: string,
  pathname: string,
  to: string,
  icon: (isActive: boolean) => React.ReactElement,
}

const ITEMS: TItem[] = [
  {
    key: 'home',
    label: 'HOME',
    pathname: '/',
    to: '/',
    icon: (isActive: boolean) => <Home className={classnames('banner-icon', { active: isActive })} />,
  },
  {
    key: 'aboutme',
    label: 'About Me',
    pathname: '/aboutme',
    to: '/aboutme',
    icon: (isActive: boolean) => <AboutMe className={classnames('banner-icon', { active: isActive })} />,
  },
  {
    key: 'tutorials',
    label: 'TUTORIALS',
    pathname: '/tutorials',
    to: '/tutorials',
    icon: (isActive: boolean) => <Tutorials className={classnames('banner-icon', { active: isActive })} />,
  },
  {
    key: 'tblogs',
    label: 'T BLOGS',
    pathname: '/tblogs',
    to: '/tblogs',
    icon: (isActive: boolean) => <Blogs className={classnames('banner-icon', { active: isActive })} />,
  },
  {
    key: 'games',
    label: 'GAMES',
    pathname: '/games',
    to: '/games',
    icon: (isActive: boolean) => <Games className={classnames('banner-icon', { active: isActive })} />,
  }
]

export default ITEMS
