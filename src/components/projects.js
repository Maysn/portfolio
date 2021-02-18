import ninja from '../assets/zed.png';
export default function Projects(params) {
  return (
    <div id="Projects" className="projects">
        <div className="projects__title">
            <h2>My projects</h2>
        </div>
      <div className="projects__wrapper">
        <div className="project">
          <figure className="project__preview">
              <img src={ninja} alt=""/>
              <figcaption className="project__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur corporis ducimus tempore consequatur minima natus voluptates, omnis enim facere libero temporibus impedit sit asperiores ipsam error eos tenetur! Voluptas.</figcaption>
          </figure>
        </div>
        <div className="project">
          <figure className="project__preview">
              <img src={ninja} alt=""/>
              <figcaption className="project__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur corporis ducimus tempore consequatur minima natus voluptates, omnis enim facere libero temporibus impedit sit asperiores ipsam error eos tenetur! Voluptas.</figcaption>
          </figure>
        </div>
        <div className="project">
          <figure className="project__preview">
              <img src={ninja} alt=""/>
              <figcaption className="project__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur corporis ducimus tempore consequatur minima natus voluptates, omnis enim facere libero temporibus impedit sit asperiores ipsam error eos tenetur! Voluptas.</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
