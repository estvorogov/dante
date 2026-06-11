import { gameContent } from '../data/gameContent'

function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <p className="eyebrow">Production plan</p>
      <h2>Что добавлять дальше</h2>

      <ol className="roadmap">
        {gameContent.roadmap.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  )
}

export default Roadmap
