import homeStyle from '../styles/index.module.css'

const Home = () => (
  <div className={homeStyle.homeContainer}>
    <div className={homeStyle.homeAvatar}>
      <img src='/avatar.jpg' />
    </div>
    <p>
      <b>Hey, I am Alexander Mengzhe Zhao</b>
      <sup>
        <img src='/china-flag.png' className={homeStyle.homeChinaFlag} height='16px' />
      </sup>
    </p>
    <p>Javascript Engineer and Saxophonist</p>
    <p className={homeStyle.thankWord}>
      Appreciate your visit and support,<br />
      website is upgrading
    </p>
    <div className={homeStyle.homeLoading}><div></div><div></div></div>
  </div>
)

export default Home
