import Link from "next/link"

import headerStyle from "../../styles/components/header.module.scss"

const Header = (): JSX.Element => (
  <nav className={headerStyle.header}>
    <div>
      <Link href="/blogs">
        <a>BLOGS</a>
      </Link>
      <Link href="/music">
        <a>MUSIC</a>
      </Link>
    </div>

    <span className={headerStyle.language}>
      <img src="/icons/language.svg" />
    </span>
  </nav>
)

export default Header
