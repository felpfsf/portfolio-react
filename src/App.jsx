import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Schollarship } from "./components/Schollarship"
import { ScrollTop } from "./components/ScrollTop"
import { Skills } from "./components/Skills"

function App() {
  return (
    <div>
      <ScrollTop />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Schollarship />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
