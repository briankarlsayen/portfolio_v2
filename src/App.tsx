import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UpIcon from './assets/icons/up.svg'

function App() {
  return (
    <div>
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
    <div className='relative xl:ml-[20rem] m-0 md:x-spacing -top-40 md:-top-56'>
      <p className='text-xs uppercase absolute left-[4.6rem] -top-4'>scroll</p>
      <img className='absolute w-7 left-20 h-[20rem]' src={"./scroll.png"} />
    </div>
  )
}

const ScollTop = () => {
  return(
    <div id="top-btn" className='fixed md:bottom-20 bottom-10 md:right-20 right-2 w-fit rounded cursor-pointer bg-white shadow-lg border z-50 invisible' onClick={() => window.location.replace("/#navbar")}>
      <img className='md:h-10 md:w-10 h-8 w-8 icon' src={UpIcon} alt="up-icon"/>
    </div>
  )
}

export default App
