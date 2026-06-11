import { Flame, Shield, Sparkles, Sword } from 'lucide-react'
import { gameContent } from '../data/gameContent'

export default function HellCircles() {
  return (
    <section id="hell-circles" className="section hellCirclesSection">
      <div className="sectionIntro">
        <p className="eyebrow">9 кругов прогрессии</p>
        <h2>Каждый круг даёт Данте новую силу</h2>
        <p>
          Проходи ад как яркую mobile RPG-карту: открывай оружие, броню и стихии, чтобы
          милый кот-ангел становился сильнее после каждой победы.
        </p>
      </div>

      <div className="hellCirclesGrid">
        {gameContent.hellCircles.map((circle) => (
          <article className="hellCircleCard" key={circle.id}>
            <div className="circleCardTop">
              <span className="circleNumber">Круг {circle.id}</span>
              <span className="elementBadge">
                <Sparkles size={14} /> {circle.element}
              </span>
            </div>

            <h3>{circle.title}</h3>
            <p className="circleSin">{circle.sin}</p>

            <div className="rewardList">
              <div className="rewardItem">
                <Sword size={18} />
                <span>{circle.weapon}</span>
              </div>
              <div className="rewardItem">
                <Shield size={18} />
                <span>{circle.armor}</span>
              </div>
            </div>

            <p className="circleDescription">
              <Flame size={16} /> {circle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
