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
            myself. Being an avid strategy gamer has taught me skills such as;
            patience, paying attention to details, reacting to problems as they
            emerge, and figuring out how to solve them. These skills have all
            been of great use to me with my journey of learning so far, And I am
            still learning more and more every day, for I believe one should
            never stop learning.
          </p>
        </div>
      </div>
    </section>
  );
}
