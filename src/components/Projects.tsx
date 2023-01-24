import projectsArr from "../projects.json";
import ParallaxProj from "./ParallaxProj";

const Projects = () => {
  return (
    <div id="project" className="bg-primary">
      <div className="min-h-screen mx-auto flex flex-col gap-10 py-20 lg:px-0">
        <div className="-mb-16">
          <h4 className="text-violet-primary tracking-widest heading">
            Projects
          </h4>
          <h2 className="sub-heading font-bold hero-title">Sample Projects</h2>
        </div>
        {projectsArr.map((project, id) => {
          return <ParallaxProj key={id} id={id} data={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
