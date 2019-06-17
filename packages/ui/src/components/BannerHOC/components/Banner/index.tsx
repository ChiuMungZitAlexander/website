import * as React from 'react'
import {
  Link,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import * as classnames from 'classnames'

import { AppContextConsumer } from '../../../../Context'

import Github from 'icons/socials/Github'
import Facebook from 'icons/socials/Facebook'
import LinkedIn from 'icons/socials/LinkedIn'

import ITEMS from './items';

interface BannerProps { pathname?: string }

class Banner extends React.Component<RouteComponentProps<BannerProps>, {}> {
  render() {
    return (
      <AppContextConsumer>
        {
          ({ isMenuCollapsed, toggleMenu }) => (
            <ul className='banner-item-list'>
              <li className='banner-item'>
                <a className='social-link'><Github width='1.5rem' fill='darkslategray' /></a>
                <a className='social-link'><Facebook width='1.5rem' fill='darkslategray' /></a>
                <a className='social-link'><LinkedIn width='1.5rem' fill='darkslategray' /></a>
              </li>
              <div className='banner-menu-container'>
                {
                  ITEMS.map(item => (
                    <Link
                      key={item.key}
                      to={item.to}
                      className={classnames('menu-item', { active: location.pathname === item.pathname })}
                    >
                      {item.label}
                    </Link>
                  ))
                }
              </div>
              <li
                className='banner-item'
                onClick={toggleMenu}
              >
                {isMenuCollapsed ? 'yes' : 'no'}
              </li>
            </ul>
          )
        }
      </AppContextConsumer>
    )
  }
}

export default withRouter(Banner)
