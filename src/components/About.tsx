import { useInView } from 'react-intersection-observer';
import JsIcon from '../assets/icons/js-icon.png';
import TsIcon from '../assets/icons/ts-icon.png';
import ReactjsIcon from '../assets/icons/react-icon.png';
import GithubIcon from '../assets/icons/github-icon.png';
import ReduxIcon from '../assets/icons/redux-icon.png';
import TailwindIcon from '../assets/icons/tailwind-icon.png';
import NextJsIcon from '../assets/icons/next-icon.png';
import MongoDBIcon from '../assets/icons/mongo-icon.png';
import PHPIcon from '../assets/icons/php-icon.png';
import PosgresIcon from '../assets/icons/postgres-icon.png';
import ExpressJsIcon from '../assets/icons/expressjs-icon.png';
import LaravelIcon from '../assets/icons/laravel-icon.png';

const About = () => {
  const { ref: techRef, inView: techVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <div id='about' className='bg-black text-gray-400'>
      <div
        className={`min-h-screen max-w-2xl flex flex-col mx-auto justify-center x-spacing md:px-0 animate ${
          techVisible ? 'appear' : 'disappear'
        }`}
        ref={techRef}
      >
        <h4 className='heading text-white tracking-widest'>About</h4>
        <h2 className='hero-title sub-heading'>Introduction</h2>
        <p>
          Hi, I’m Brian Karl Sayen, I build web applications that can be helpful
          to the users. The process of building and learning new stuffs is what
          keeps me excited.
        </p>
        <p className='pt-2'>
          This are some of the technologies that i’ve worked with:
        </p>
        <TechStacks />
      </div>
    </div>
  );
};

const TechStacks = () => {
  const stackList = [
    {
      name: 'Javascript',
      src: JsIcon,
    },
    {
      name: 'Typescript',
      src: TsIcon,
    },
    {
      name: 'Reactjs',
      src: ReactjsIcon,
    },
    {
      name: 'Github',
      src: GithubIcon,
    },
    {
      name: 'Redux',
      src: ReduxIcon,
    },
    {
      name: 'Tailwindcss',
      src: TailwindIcon,
    },
    {
      name: 'NextJs',
      src: NextJsIcon,
    },
    {
      name: 'MongoDB',
      src: MongoDBIcon,
    },
    {
      name: 'PHP',
      src: PHPIcon,
    },
    {
      name: 'Laravel',
      src: LaravelIcon,
    },
    {
      name: 'PostgresSQL',
      src: PosgresIcon,
    },
    {
      name: 'ExpressJs',
      src: ExpressJsIcon,
    },
  ];
  return (
    <div>
      <ul className='grid grid-cols-4 pt-6'>
        {stackList.map((item) => (
          <li
            key={item.name}
            className='p-4 items-center flex flex-col justify-center '
          >
            <div className='w-full h-full flex justify-center '>
              <img
                className='h-10 hover:contrast-[.5] invert-[1]'
                src={item.src}
                alt={item.name}
              />
            </div>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
