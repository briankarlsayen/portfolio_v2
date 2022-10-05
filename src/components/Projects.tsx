import projectsArr from '../projects.json'
import GithubIcon from '../../public/github.svg';
import LinkIcon from '../../public/link.svg';

interface ProductCardProps {
  id: number,
  data: ProductProps
}

interface ProductProps {
  name: string,
  description: string,
  techStack: Array<string>,
  github: string,
  website: string,
  image: string,
}

const Projects = () => {
  return (
    <div className='gray-bg-custom'>
      <div className='min-h-screen max-w-6xl mx-auto flex flex-col gap-10 py-20'>
        <div className='pb-6'>
          <h4 className='uppercase text-sm'>Projects</h4>
          <h2 className='text-3xl'>Sample Projects</h2>
        </div>
        {
          projectsArr.map((project, id) => {
            return (
              <ProjectCard key={id} id={id} data={project} />
            )
          })
        }
      </div>
    </div>
  )
}

const ProjectCard = ({id, data}: ProductCardProps) => {
  return(
    <div className={`flex flex-row gap-10 ${id % 2 >=1 ? 'flex-row-reverse': ''}`}>
      <div className='drop-shadow-md basis-2/3'>
        <a href={data.website} target="_blank">
          <img className='w-[80rem] h-[20rem] opacity-50 hover:opacity-100 cursor-pointer object-cover' src={data.image} />
        </a>
      </div>
      <div id="project-text" className='flex flex-col flex-wrap py-10 basis-1/3'>
        <h4 className='uppercase text-sm'>Featured</h4>
        <h2 className='text-3xl pb-4'>{data.name}</h2>
        <p>{data.description}</p>
        <div className='mt-auto'>
          <ul className='flex flex-row gap-2'>
            {data.techStack.map(tech => {
              return (
                <li key={tech} className='text-sm'>{tech}</li>
              )
            })}
          </ul>
          <ul className='flex flex-row gap-2'>
            <span className='p-1 cursor-pointer'>
              <a href={data.github} target="_blank">
                <img className='icon' src={GithubIcon} alt="github-icon" />
              </a>
            </span>
            <span className='p-1 cursor-pointer'>
              <a href={data.website} target="_blank">
                <img className='icon' src={LinkIcon} alt="link-icon" />
              </a>
            </span>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects