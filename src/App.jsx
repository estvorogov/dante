import { createRoot } from 'react-dom/client'
import { Sword, Shield, Feather, Star, Store, ChevronRight } from 'lucide-react'
import { gameContent } from './data/gameContent'
import './styles/global.css'

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

function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div>
        <p className="eyebrow">Art direction</p>
        <h2>Милый герой, опасный мир</h2>
        <p>
          Сейчас используются заглушки из твоих референсов. Позже Codex сможет заменить их
          на реальные скриншоты, видео или WebP-ассеты.
        </p>
      </div>

      <div className="shots">
        <img
          src={`${import.meta.env.BASE_URL}preview-soft.jpeg`}
          alt="Светлый стиль игры"
        />
        <img
          src={`${import.meta.env.BASE_URL}preview-dark.jpeg`}
          alt="Тёмный стиль игры"
        />
      </div>
    </section>
  )
}

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

function Subscribe() {
  return (
    <section id="subscribe" className="subscribe">
      <Store size={34} />
      <h2>Скоро в App Store и Google Play</h2>
      <p>
        Форма пока локальная. Когда будет домен — подключим аналитику, сбор email и кнопки
        магазинов.
      </p>

      <form>
        <input placeholder="email для новостей" />
        <button type="button">Подписаться</button>
      </form>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Gallery />
        <Roadmap />
        <Subscribe />
      </main>

      <footer>© 2026 {gameContent.name}. Landing prototype.</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
