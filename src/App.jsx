// import { Route, Routes } from 'react-router-dom'
// import img from './assets/image.png'
import Hero from './components/Hero/Hero'
import { Toaster } from 'react-hot-toast'
// import { OrbitingCirclesDemo } from './components/OrpitCircle/Test'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase'
import TechGrids from './components/TechGrids/TechGrids'
import Footer from './components/Footer/Footer'
import AboutMe from './components/About/About'
import CursorFollower from './components/Cursor/Cursor'

function App() {
  return (
    <div>
      <Toaster />
      <CursorFollower />
      <Hero />
      {/* <Routes>
        <Route path="/" element={} />
        <Route path="/o" element={<OrbitingCirclesDemo />} />
        <Route path="/temp" element={<img src={img} alt="botato" />} />
      </Routes> */}
      <AboutMe />
      <TechGrids />
      <ProjectShowcase />
      <Footer />
    </div>
  )
}

export default App
