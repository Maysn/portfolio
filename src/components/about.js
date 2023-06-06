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
            to code journey; patience, paying attention to details, reacting to
            problems as they emerge, and figuring out how to solve them. These
            skills have all been great to help me with this ongoing journey so
            far.. And I am still on my way to learn more and more every day.
          </p>
        </div>
      </div>
    </section>
  );
}
