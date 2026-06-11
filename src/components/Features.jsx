import { Sword, Shield, Feather, Star } from 'lucide-react'
import { gameContent } from '../data/gameContent'

const icons = [Sword, Shield, Feather, Star]

function Features() {
  return (
    <section id="features" className="section">
      <p className="eyebrow">Почему зайдёт игрокам</p>
      <h2>Лендинг готов под будущую механику</h2>

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

export default Features
