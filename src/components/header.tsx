import Logo from '../assets/images/logo.svg'

import G from '../assets/icons/github.svg'
import F from '../assets/icons/facebook.svg'
import T from '../assets/icons/twitter.svg'
import L from '../assets/icons/linkedin.svg'
import Z from '../assets/icons/zhihu.svg'

export const Header = () => (
  <div className="flex items-center px-8 py-4 text-white">
    <div className="flex grow justify-center gap-4">
      <nav>关于</nav>
      <nav>音乐</nav>
      <nav>编程</nav>
    </div>
    <Logo width="12rem" />
    <div className="flex grow justify-center items-center gap-4 ">
      <a
        href="https://github.com/ChiuMungZitAlexander"
        target="_blank"
      >
        <G
          height="1.5rem"
          width="1.5rem"
        />
      </a>
      <a
        href="https://www.facebook.com/alexandermengzhezhao/"
        target="_blank"
      >
        <F
          height="1.5rem"
          width="1.5rem"
        />
      </a>
      <a
        href="https://twitter.com/alexandermzchiu"
        target="_blank"
      >
        <T
          height="1.5rem"
          width="1.5rem"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alexandermzchiu/"
        target="_blank"
      >
        <L
          height="1.5rem"
          width="1.5rem"
        />
      </a>
      <a
        href="https://www.zhihu.com/people/alexanderchiumungzit"
        target="_blank"
      >
        <Z
          height="1.5rem"
          width="1.5rem"
        />
      </a>
    </div>
  </div>
)
