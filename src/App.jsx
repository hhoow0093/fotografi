import { useState } from 'react'
import Navbar from './template/Navbar'
import Hero from './template/Hero'
import Gallery from './template/Gallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Gallery/>
    </>
  )
}

export default App
