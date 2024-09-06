import { Route, Routes } from 'react-router-dom'
import img from './assets/image.png'
import Hero from './components/Hero/Hero'
import { Toaster } from 'react-hot-toast'
import { OrbitingCirclesDemo } from './components/OrpitCircle/Test'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase'
import TechGrids from './components/TechGrids/TechGrids'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/o" element={<OrbitingCirclesDemo />} />
        <Route path="/temp" element={<img src={img} alt="botato" />} />
      </Routes>
      <TechGrids />
      <ProjectShowcase />
      <Footer />
    </div>
  )
}

export default App
