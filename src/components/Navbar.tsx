const Navbar = () => {
  const navList = [
    {
      name: 'About',
      link: '/#about',
    },
    {
      name: 'Project',
      link: '/#project',
    },
    {
      name: 'Contact',
      link: '/#contact',
    },
    {
      name: 'Blog',
      link: 'https://dev.to/blu3fire89',
      isUrl: true,
      newPage: true,
    },
  ];

  return (
    <nav
      id='navbar'
      className='flex h-[80px] justify-between items-center x-spacing xl:px-20 bg-primary'
    >
      <span className='font-bold cursor-pointer'>brian</span>
      <ul className='flex gap-4'>
        {navList.map((nav) => (
          <li
            key={nav.name}
            className='cursor-pointer hover:text-[#7289DA]'
            onClick={() => {
              nav.isUrl
                ? window.open(nav.link, '_blank')
                : window.location.replace(nav.link);
            }}
          >
            {nav.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
