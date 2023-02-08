import GithubIcon from "../assets/icons/github.svg";
import LinkIcon from "../assets/icons/link.svg";

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
}

const ProjectCard = ({ id, data }: ProductCardProps) => {
  return (
    <div
      className={`flex items-center flex-col md:gap-0 gap-4 ${
        id % 2 >= 1 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="drop-shadow-md basis-2/3 w-full h-screen bg-gray-600 items-center flex">
        <div
          className={`image-bg bg-left md:h-screen h-[50vh] md:bg-auto bg-cover ${
            id % 2 >= 1 ? "md:bg-right" : "bg-left"
          }`}
          style={{
            backgroundImage: `url(${
              import.meta.env.DEV ? data.devImage : data.image
            })`,
          }}
        ></div>
      </div>
      <div
        id="project-text"
        className="flex flex-col flex-wrap md:py-10 pb-10 basis-1/3 px-4"
      >
        <h4 className="uppercase text-sm text-violet-primary tracking-widest">
          Featured
        </h4>
        <h2 className="title pb-8">{data.name}</h2>
        <p>{data.description}</p>
        <div className="mt-auto pt-6">
          <ul className="flex flex-row gap-2">
            {data.techStack.map((tech) => {
              return (
                <li key={tech} className="text-sm">
                  {tech}
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-row gap-2">
            <span className="p-1 cursor-pointer">
              <a href={data.github} target="_blank">
                <img className="icon" src={GithubIcon} alt="github-icon" />
              </a>
            </span>
            <span className="p-1 cursor-pointer">
              <a href={data.website} target="_blank">
                <img className="icon" src={LinkIcon} alt="link-icon" />
              </a>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
