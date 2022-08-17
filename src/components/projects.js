import ninja from "../assets/zed.png";
import todo from "../assets/todo-app.png";
import weather from "../assets/weather-app.png";
import portfolio from "../assets/portfolio.png";
import list from "../assets/repo-list.png";
import pokemon from "../assets/pokemon.png";
import mia from "../assets/mia.png";
export default function Projects(params) {
  return (
    <section id="Projects" className="projects">
      <div className="project__content">
        <h2>My projects</h2>
        <div className="project__grid">
          <div className="project__item">
            <figure className="figure">
              <img src={pokemon} alt="Pokimane" />
              <figcaption>
                <a href="https://github.com/Maysn/pokemon-app" target="_blank">
                  Github
                </a>
                <a href="https://maysn-pokemon.netlify.app/" target="_blank">
                  Live preview
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>
                A pokemon browser game that I made using React, Redux, Styled
                Components, and the Pokemon API.
              </p>
            </div>
          </div>

          <div className="project__item">
            <figure className="figure">
              <img src={list} alt="Github repositories list" />
              <figcaption>
                <a
                  href="https://github.com/Maysn/Gemography-Github-list"
                  target="_blank"
                >
                  Github
                </a>
                <a href="https://maysn-repo-list.netlify.app/" target="_blank">
                  Live preview
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>
                Used Github API to view most starred repositories, added
                pagination feature to fetch and render more repositories as you
                scroll down to the bottom of the page.
              </p>
            </div>
          </div>

          <div className="project__item">
            <figure className="figure">
              <img src={todo} alt="Todo App" />
              <figcaption>
                <a href="https://github.com/Maysn/todo-app" target="_blank">
                  Github
                </a>
                <a href="https://todo-maysn.netlify.app/" target="_blank">
                  Live preview
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>A simple todo app, with basic CRUD functionality.</p>
            </div>
          </div>

          <div className="project__item">
            <figure className="figure">
              <img src={weather} alt="Weather app" />
              <figcaption>
                <a href="https://github.com/Maysn/weather-app" target="_blank">
                  Github
                </a>
                <a href="https://maysn-weather.netlify.app/" target="_blank">
                  Live preview
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>
                A API based project, that tells you the weather & contains
                dynamic backgrounds based on the weather state.
              </p>
            </div>
          </div>

          <div className="project__item">
            <figure className="figure">
              <img src={portfolio} alt="My portfolio" />
              <figcaption>
                <a href="https://github.com/Maysn/portfolio" target="_blank">
                  Github
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>
                This very portfolio, which i designed -If it looks good,
                otherwise it's not mine!-
              </p>
            </div>
          </div>
        </div>
      </div>
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
