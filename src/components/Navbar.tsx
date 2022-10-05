import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex h-[80px] gray-bg-custom justify-between items-center x-spacing'>
      <span className='font-bold'>
        brian
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