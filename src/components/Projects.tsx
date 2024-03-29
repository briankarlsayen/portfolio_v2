import projectsArr from '../projects.json';
import ParallaxProj from './ParallaxProj';

const Projects = () => {
  return (
    <div id='project' className='bg-primary'>
      <div className='min-h-screen mx-auto flex flex-col gap-10 py-20 lg:px-0'>
        <div className='-mb-16 x-spacing pb-4'>
          <h4 className='text-violet-primary tracking-widest heading'>
            Projects
          </h4>
          <h2 className='sub-heading font-bold hero-title'>Selected Works</h2>
        </div>
        {projectsArr.map((project) => {
          return (
            <ParallaxProj key={project.id} id={project.id} data={project} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
