import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex h-[80px] bg-slate-200 justify-between items-center x-spacing'>
      <span>
        bRIAN
      </span>
      <ul className='flex gap-4'>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar