import HeroGif from "../assets/cube.gif";
const Hero = () => {
  return (
    <section
      id="hero"
      className="x-spacing flex h-[calc(100vh-4rem)] bg-primary items-center"
    >
      <div className="flex flex-col justify-center word-wrap md:basis-2/3">
        <p className="text-violet-primary pb-4 pl-1 heading">say hi</p>
        <h1 className="hero-title hero-text pb-2">Brian Karl Sayen.</h1>
        <h3 className="hero-title hero-text text-black-custom">
          I'm a web developer.
        </h3>
        <p className="pt-8 pl-1">
          I build useful web apps that human beings want to use, or not.
        </p>
      </div>
      <div className="md:block hidden basis-1/3">
        <img className="object-none" src={HeroGif} />
      </div>
    </section>
  );
};

export default Hero;
