import { Route, Routes } from 'react-router-dom'
import img from './assets/image.png'
// import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/temp" element={<img src={img} alt="botato" />} />
      </Routes>
    </div>
  )
}

export default App
