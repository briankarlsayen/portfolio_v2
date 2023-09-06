import GithubIcon from '../assets/icons/github.svg';
import LinkIcon from '../assets/icons/link.svg';

interface ProductCardProps {
  id: number;
  data: ProductProps;
}
interface ProductProps {
  name: string;
  description: string;
  techStack: Array<string>;
  github: string;
  website: string;
  image: string;
  devImage: string;
  bg: string;
}

const ProjectCard = ({ id, data }: ProductCardProps) => {
  const links = [
    {
      name: 'Source code',
      url: data.github,
      src: GithubIcon,
    },
    {
      name: 'Website',
      url: data.website,
      src: LinkIcon,
    },
  ];

  return (
    <div
      className={`flex items-center flex-col md:gap-0 gap-4 ${
        id % 2 >= 1 ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className='drop-shadow-md basis-2/3 w-full h-screen bg-gray-600 items-center flex'>
        <div
          className={`image-bg md:h-screen h-[50vh] md:bg-auto bg-cover bg-center ${
            id % 2 >= 1 ? 'md:bg-right' : 'bg-left'
          }`}
          style={{
            backgroundColor: data.bg,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundImage: `url(${
              import.meta.env.DEV ? data.devImage : data.image
            })`,
          }}
        ></div>
      </div>
      <div
        id='project-text'
        className='flex flex-col flex-wrap md:py-10 pb-10 basis-1/3 px-4 w-full'
      >
        <h4 className='uppercase text-sm text-violet-primary tracking-widest'>
          Featured
        </h4>
        <h2 className='title pb-8'>{data.name}</h2>
        <p>{data.description}</p>
        <div className='mt-auto pt-6'>
          <ul className='flex flex-row gap-2'>
            {data.techStack.map((tech) => {
              return (
                <li key={tech} className='text-sm'>
                  {tech}
                </li>
              );
            })}
          </ul>
          <ul className='flex flex-row gap-2 pt-4'>
            {links.map((link) => (
              <LinkBtns
                key={link.name}
                name={link.name}
                url={link.url}
                src={link.src}
              />
            ))}
            {/* <span className='p-1 cursor-pointer'>
              <a href={data.github} target='_blank'>
                <img className='icon' src={GithubIcon} alt='github-icon' />
              </a>
            </span>
            <span className='p-1 cursor-pointer'>
              <a href={data.website} target='_blank'>
                <img className='icon' src={LinkIcon} alt='link-icon' />
              </a>
            </span> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const LinkBtns = ({ name, url, src }: any) => {
  return (
    <span className='px-4 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md text-white shadow-md'>
      <a className='lg:flex md:block flex gap-4 ' href={url} target='_blank'>
        <img className='invert-[1]' src={src} alt={name} />
        {name}
      </a>
    </span>
    // <span className='p-1 cursor-pointer'>
    //   <a href={url} target='_blank'>
    //     <img className='icon' src={src} alt={name} />
    //   </a>
    // </span>
  );
};

export default ProjectCard;
