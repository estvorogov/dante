import { gameContent } from '../data/gameContent'

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="brandMark">✦</span>
        {gameContent.name}
      </div>

      <nav className="nav">
        <a href="#features">Особенности</a>
        <a href="#gallery">Галерея</a>
        <a href="#roadmap">План</a>
      </nav>
    </header>
  )
}

export default Header
