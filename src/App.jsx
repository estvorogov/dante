import Header from './components/Header'
import Hero from './components/Hero'
import HellCircles from './components/HellCircles'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Roadmap from './components/Roadmap'
import Subscribe from './components/Subscribe'
import { gameContent } from './data/gameContent'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HellCircles />
        <Features />
        <Gallery />
        <Roadmap />
        <Subscribe />
      </main>

      <footer>© 2026 {gameContent.name}. Landing prototype.</footer>
    </>
  )
}

export default App
