export default function About(params) {
  const age = () => {
    return new Date().getFullYear() - 1997;
  };
  return (
    <section id="About" className="about">
      <div className="about_cont">
        <h2 className="about_cont__title">About me</h2>
        <div className="about_cont__text">
          <p>
            I have always been fascinated by everything about websites; starting
            with their animations, all the way down to how they function under
            the hood, And so I decided to learn how to build those websites
            myself. Being strategy games enjoyer helped a lot with my learning
            to code journey; patience, paying attention to details, observing
            and reacting to problems as they emerge, and figuring out how to fix
            them. These skills have all proven to be exactly what a frontend
            developer needs to meet their desired results.
          </p>
        </div>
      </div>
    </section>
  );
}
