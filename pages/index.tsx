import Link from 'next/link'

import homeStyle from '../styles/index.module.scss'

const Home = (): JSX.Element => (
  <div className={homeStyle.homeContainer}>
    <div className={homeStyle.homeAvatar}>
      <img src='/avatar.jpg' />
    </div>
    <p className={homeStyle.name}>
      <b>
        I am Alexander
        <br />
        Mengzhe Zhao
      </b>
    </p>
    <p className={homeStyle.job}>Javascript Engineer<br />and<br />Saxophonist</p>
    <p className={homeStyle.thankWord}>
      Appreciate your visit and support
    </p>
    <p>
      <Link href='/blogs'>
        <button>BLOG</button>
      </Link>
      <Link href='/music'>
        <button>MUSIC</button>
      </Link>
    </p>
    <p className={homeStyle.disclaimer}>粤ICP</p>
  </div>
)

export default Home
