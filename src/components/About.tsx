const About = () => {
  return (
    <div className='h-screen p-[30rem] bg-slate-300 relative'>
      <h4 className='uppercase pb-10 absolute top-0'>About</h4>
      <p className='text-xl'>Hi I’m Brian Karl Sayen, I build web applications that can be helpful to the users. The process of building and learning new stuffs is what keeps me excited.</p>
      <p className='text-xl'>This are the technologies that i’ve worked with:</p>
      <div className='flex flex-row py-5'>
        <div className='basis-1/2'>
          <p>Javascript</p>
          <p>Typescript</p>
          <p>ReactJs</p>
          <p>NextJs</p>
        </div>
        <div className='basis-1/2'>
          <p>PostgresSQL</p>
          <p>MongoDB</p>
          <p>ExpressJs</p>
          <p>PHP</p>
          <p>Laravel</p>
        </div>
      </div>
    </div>
  )
}

export default About