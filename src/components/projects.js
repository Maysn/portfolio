import ninja from "../assets/zed.png";
export default function Projects(params) {
  return (
    <section id="Projects" className="projects">
      <div className="project__content">
        <h2>My projects</h2>
        <div className="project__grid">
          <div className="project__item">
            <figure className="figure">
              <img src={ninja} alt="" />
              <figcaption><a href="">Github</a> <a href="">Netlify</a></figcaption>
            </figure>
            <div className="project__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="project__item">
            <figure className="figure">
              <img src={ninja} alt="" />
              <figcaption><a href="">Github</a> <a href="">Netlify</a></figcaption>
            </figure>
            <div className="project__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="project__item">
            <figure className="figure">
              <img src={ninja} alt="" />
              <figcaption><a href="">Github</a> <a href="">Netlify</a></figcaption>
            </figure>
            <div className="project__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </section>
  );
}

// <div className="project__item">
//             <div className="project__image">
//               <img src={ninja} alt="" />
//             </div>
//             <div className="project__desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
//               consequuntur corporis ducimus tempore consequatur minima natus
//               voluptates, omnis enim facere libero temporibus impedit sit
//               asperiores ipsam error eos tenetur! Voluptas.
//             </div>
//           </div>
