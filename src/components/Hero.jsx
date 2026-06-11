import { ChevronRight } from 'lucide-react'
import { gameContent } from '../data/gameContent'

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Cartoon mobile fantasy idle RPG</p>
        <h1>{gameContent.name}</h1>
        <p className="heroTagline">Белый кот-ангел против 9 кругов ада</p>
        <p className="lead">{gameContent.description}</p>

        <div className="ctaRow">
          <a className="primaryBtn" href="#hell-circles">
            Смотреть круги ада <ChevronRight size={18} />
          </a>
          <a className="ghostBtn" href="#features">
            Оружие Данте
          </a>
        </div>

        <div className="stats">
          {gameContent.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="phoneMock">
        <img
          src={`${import.meta.env.BASE_URL}preview-dark.jpeg`}
          alt="Мобильный fantasy idle RPG стиль с ангельским котом Данте у врат ада"
        />
      </div>
    </section>
  )
}
