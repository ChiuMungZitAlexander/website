import * as React from 'react'
import {
  Link,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import * as classnames from 'classnames'

import { AppContextConsumer } from 'src/Context'

import Github from 'icons/socials/Github'
import Facebook from 'icons/socials/Facebook'
import LinkedIn from 'icons/socials/LinkedIn'
import Home from 'icons/Home'
import DoubleArrow from 'icons/DoubleArrow'

import ITEMS from './items';

interface IBannerProps { pathname?: string }

class Banner extends React.Component<RouteComponentProps<IBannerProps>> {
  render() {
    return (
      <AppContextConsumer>
        {
          ({ isMenuCollapsed, toggleMenu }) => (
            <ul className='banner-item-list'>
              <li className='banner-item'>
                <a
                  className='social-link'
                  href='https://github.com/ChiuMungZitAlexander'
                  target='_blank'
                >
                  <Github height='1.5rem' width='1.5rem' fill='darkslategray' />
                </a>
                <a
                  className='social-link'
                  href='https://www.facebook.com/alexander.chiu.319'
                  target='_blank'
                >
                  <Facebook height='1.5rem' width='1.5rem' fill='darkslategray' />
                </a>
                <a 
                  className='social-link'
                  href='https://www.linkedin.com/in/alexandermengzhezhao/'
                  target='_blank'
                >
                  <LinkedIn height='1.5rem' width='1.5rem' fill='darkslategray' />
                </a>
              </li>
              <div className='banner-menu-container'>
                {
                  ITEMS.map(item => (
                    <Link
                      key={item.key}
                      to={item.to}
                      className={classnames('menu-item', { active: location.pathname === item.pathname })}
                    >
                      {
                        isMenuCollapsed
                          ? <Home />
                          : item.label
                      }
                    </Link>
                  ))
                }
              </div>
              <li
                className='banner-item'
                onClick={toggleMenu}
              >
                <div className={classnames('collapse-button', { 'collapsed': isMenuCollapsed })}>
                  <DoubleArrow width='1.5rem' fill='darkslategray' />
                </div>
              </li>
            </ul>
          )
        }
      </AppContextConsumer>
    )
  }
}

export default withRouter(Banner)
