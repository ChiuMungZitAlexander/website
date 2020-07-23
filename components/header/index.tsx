import Link from 'next/link'

import headerStyle from '../../styles/components/header.module.scss'

const Header = (): JSX.Element => (
  <nav className={headerStyle.header}>
    <Link href='/blogs'>BLOGS</Link>
    <Link href='/blogs'>MUSIC</Link>

    <span className={headerStyle.language}>
      LAN
    </span>
  </nav>
)

export default Header
