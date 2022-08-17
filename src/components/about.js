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
            My name is Mazen, I'm a {age()} years old guy from Egypt. I'm
            currently at the beginning of my journey as a frontend developer.
            Getting into this career was a complete coincedence, when a friend
            talked to me about it, then I thought to give it a try since I
            wasn't really sure about what I wanted to do with my career, and I
            fell in love with coding ever since.
          </p>
        </div>
      </div>
    </section>
  );
}
