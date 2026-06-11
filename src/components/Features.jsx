import { Feather, Shield, Star, Sword } from 'lucide-react'
import { gameContent } from '../data/gameContent'

const icons = [Sword, Shield, Feather, Star]

export default function Features() {
  return (
    <section id="features" className="section">
      <p className="eyebrow">Оружие и броня</p>
      <h2>Инвентарь героя растёт вместе с прогрессом</h2>

      <div className="grid">
        {gameContent.features.map((f, i) => {
          const Icon = icons[i] || Star

          return (
            <article className="card" key={f.title}>
              <Icon size={28} />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
