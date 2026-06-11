import { ChevronRight } from 'lucide-react'
import { gameContent } from '../data/gameContent'

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Mobile idle RPG</p>
        <h1>{gameContent.tagline}</h1>
        <p className="lead">{gameContent.description}</p>

        <div className="ctaRow">
          <a className="primaryBtn" href="#subscribe">
            Следить за запуском <ChevronRight size={18} />
          </a>
          <a className="ghostBtn" href="#gallery">
            Смотреть стиль
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
          alt="Скриншоты игры с ангельским котом и демонами"
        />
      </div>
    </section>
  )
}

export default Hero
