import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar" className='flex h-[80px] justify-between items-center x-spacing xl:px-20 bg-primary'>
      <span className='font-bold'>
        brian
      </span>
      <ul className='flex gap-4'>
        <li className='cursor-pointer hover:text-[#7289DA]' onClick={() => window.location.replace("/#about")}>About</li>
        <li className='cursor-pointer hover:text-[#7289DA]' onClick={() => window.location.replace("/#project")}>Project</li>
        <li className='cursor-pointer hover:text-[#7289DA]' onClick={() => window.location.replace("/#contact")}>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar