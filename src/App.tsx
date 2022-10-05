import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='relative ml-[20rem]'>
        <p className='text-xs uppercase absolute left-[4.6rem] -top-56'>scroll</p>
        <img className='absolute w-7 left-20 -top-52 h-[20rem]' src={"./scroll.png"} />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
