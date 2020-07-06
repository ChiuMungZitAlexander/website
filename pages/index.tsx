import homeStyle from '../styles/index.module.css'

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
      Appreciate your visit and support,<br />
      website is upgrading
    </p>
    <div className={homeStyle.homeLoading}><div></div><div></div></div>
  </div>
)

export default Home
