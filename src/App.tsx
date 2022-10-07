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
      <ScollTop />
      <Hero />
      <ScrollImg />
      <About />

      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

const ScrollImg = () => {
  return(
    <div className='relative xl:ml-[20rem] m-0 md:x-spacing'>
      <p className='text-xs uppercase absolute left-[4.6rem] -top-56'>scroll</p>
      <img className='absolute w-7 left-20 -top-52 h-[20rem]' src={"./scroll.png"} />
    </div>
  )
}

const ScollTop = () => {
  return(
    <div className='fixed md:bottom-20 bottom-10 md:right-20 right-2 -rotate-90 w-fit rounded py-2 px-4 cursor-pointer bg-quaternary z-50' onClick={() => window.location.replace("/#navbar")}>
      <h2 className='uppercase text-white'>Top</h2>
    </div>
  )
}

export default App
