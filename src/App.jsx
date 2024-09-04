import { Route, Routes } from 'react-router-dom'
import img from './assets/image.png'
import Hero from './components/Hero/Hero'
import { Toaster } from 'react-hot-toast'
import { OrbitingCirclesDemo } from './components/OrpitCircle/Test'
// import Marquee from './components/Marquee/Marquee'
import { MarqueeDemo } from './components/Marquee/MUsee'
import ImageMarquee from './components/Marquee/Marquee'

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/t" element={<MarqueeDemo />} />
        <Route path="/o" element={<OrbitingCirclesDemo />} />
        <Route path="/temp" element={<img src={img} alt="botato" />} />
      </Routes>
      <ImageMarquee />
    </div>
  )
}

export default App
