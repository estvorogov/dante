import { ChevronRight } from 'lucide-react'
import { gameContent } from '../data/gameContent'

const heroBadges = [
  '⚔ 9 видов оружия',
  '🛡 9 комплектов брони',
  '🔥 9 кругов ада',
  '😈 боссы демоны',
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Dark fantasy mobile idle RPG</p>
        <h1>{gameContent.name}</h1>
        <p className="heroTagline">Белый кот-ангел против 9 кругов ада</p>
        <p className="lead">
          Прокачивай Данте, открывай легендарное оружие и броню каждого круга, побеждай
          демонов и пройди путь от Лимба до встречи с Люцифером.
        </p>

        <div className="heroBadges" aria-label="RPG особенности игры">
          {heroBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>

        <div className="ctaRow">
          <a className="primaryBtn" href="#hell-circles">
            Смотреть круги ада <ChevronRight size={18} />
          </a>
          <a className="ghostBtn" href="#features">
            Оружие Данте
          </a>
        </div>
      </div>

      <div className="phoneMock">
        <img
          src={`${import.meta.env.BASE_URL}dante-hero.jpeg`}
          alt="Белый кот-ангел Данте с нимбом, крыльями и мечом света на фоне врат ада"
        />
      </div>
    </section>
  )
}
