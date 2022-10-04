import React from 'react'

const Projects = () => {
  return (
    <div className='h-screen max-w-6xl mx-auto flex flex-col gap-10'>
      <ProjectCard mirror={false} />
      <ProjectCard mirror={true} />
      <ProjectCard mirror={false} />
    </div>
  )
}

const ProjectCard = ({mirror}: any) => {
  return(
    <div className={`flex flex-row gap-10 ${mirror ? 'flex-row-reverse': ''}`}>
      <div id="image" className='w-[80rem] h-[20rem] bg-red-100'></div>
      <div id="project-text" className='flex flex-col flex-wrap py-10'>
        <h4 className='uppercase text-sm'>Featured</h4>
        <h2 className='text-3xl pb-4'>Note-App</h2>
        <p>A note taking app inspired by Notion. Has functionality of saving text and bookmarks, checking of finished task, and can freely drag notes to prefered position.</p>
        <div className='mt-auto'>
          <ul className='flex flex-row gap-2'>
            <li>PostgresSQL</li>
            <li>ReactJs</li>
            <li>ExpressJs</li>
          </ul>
          <ul className='flex flex-row gap-2'>
            <span className='border-2 border-black rounded-full p-2'>G</span>
            <span className='border-2 border-black rounded-full p-2'>L</span>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects