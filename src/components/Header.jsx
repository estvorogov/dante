import { gameContent } from '../data/gameContent'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="brandMark">☼</span>
        {gameContent.name}
      </div>

      <nav className="nav" aria-label="Основная навигация">
        <a href="#hell-circles">Круги ада</a>
        <a href="#features">Оружие</a>
        <a href="#gallery">Галерея</a>
        <a href="#roadmap">План</a>
      </nav>
    </header>
  )
}
