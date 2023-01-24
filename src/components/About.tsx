import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref: techRef, inView: techVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <div id="about" className="bg-secondary">
      <div
        className={`min-h-screen max-w-2xl flex flex-col mx-auto justify-center x-spacing md:px-0 animate ${
          techVisible ? "appear" : "disappear"
        }`}
        ref={techRef}
      >
        <h4 className="heading text-white tracking-widest">About</h4>
        <h2 className="hero-title sub-heading">Introduction</h2>
        <p>
          Hi, I’m Brian Karl Sayen, I build web applications that can be helpful
          to the users. The process of building and learning new stuffs is what
          keeps me excited.
        </p>
        <p className="pt-2">
          This are some of the technologies that i’ve worked with:
        </p>
        <ul className="flex flex-row flex-wrap pt-6">
          <li className="tech-list list-disc ml-4">Javascript</li>
          <li className="tech-list list-disc ml-4">Typescript</li>
          <li className="tech-list list-disc ml-4">ReactJs</li>
          <li className="tech-list list-disc ml-4">NextJs</li>
          <li className="tech-list list-disc ml-4">PostgresSQL</li>
          <li className="tech-list list-disc ml-4">MongoDB</li>
          <li className="tech-list list-disc ml-4">ExpressJs</li>
          <li className="tech-list list-disc ml-4">PHP</li>
          <li className="tech-list list-disc ml-4">Laravel</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
