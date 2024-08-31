import { Route, Routes } from 'react-router-dom'
import img from './assets/image.png'
import Hero from './components/Hero/Hero'
import { Toaster } from 'react-hot-toast'
import { OrbitingCirclesDemo } from './components/OrpitCircle/Test'

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/o" element={<OrbitingCirclesDemo />} />
        <Route path="/temp" element={<img src={img} alt="botato" />} />
      </Routes>
    </div>
  )
}

export default App
