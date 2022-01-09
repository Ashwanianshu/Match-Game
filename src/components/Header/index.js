// import {}
import './index.css'

const Header = props => {
  const {score, seconds} = props
  const ticker = () => {
    console.log('ticker', seconds)
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <li>
            <p className="score">
              Score: <span>{score}</span>
            </p>
          </li>
          <li className="timer-position">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            {/* <p className="score"> {seconds} </p> */}
            <p className="score"> {seconds} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
