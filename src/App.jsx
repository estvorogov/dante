import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Roadmap from './components/Roadmap'
import Subscribe from './components/Subscribe'

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

      <footer>© 2026 Angel Cat: Hell Gate. Landing prototype.</footer>
    </>
  )
}

export default App
