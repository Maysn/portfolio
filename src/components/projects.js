import todo from "../assets/todo-app.png";
import weather from "../assets/weather-app.png";
import list from "../assets/repo-list.png";
import pokemon from "../assets/pokemon.png";
import calculator from "../assets/calculator.png";
import news from "../assets/news.png";
import ecommerce from "../assets/ecommerce.jpg";
export default function Projects(params) {
  return (
    <section id="Projects" className="projects">
      <div className="project__content">
        <h2>My projects</h2>
        <div className="project__grid">
          <div className="project__item">
            <figure className="figure">
              <img src={ecommerce} alt="ecommerce" />
              <figcaption>
                <a
                  href="https://github.com/Maysn/ecommerce-product-page"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https://majestic-ecommerce.netlify.app/"
                  target="_blank"
                >
                  Live preview
                </a>
                <a
                  href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
                  target="_blank"
                >
                  Original design
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>A Ecommerce store with cart functionality made using React.</p>
            </div>
          </div>

          <div className="project__item">
            <figure className="figure">
              <img src={pokemon} alt="pokemon" />
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
                A pokemon browser game made using React, Redux,
                styled-components, and PokeAPI.
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
                A project in which I exercised implementing infinite scrolling
                feature.
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
              <img src={calculator} alt="Calculator app" />
              <figcaption>
                <a
                  href="https://github.com/Maysn/Calculator-app"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https://majestic-calculator.netlify.app/"
                  target="_blank"
                >
                  Live preview
                </a>
                <a
                  href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"
                  target="_blank"
                >
                  Original design
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>A calculator app with 3 different themes.</p>
            </div>
          </div>

          <div className="project__item">
            <figure className="figure">
              <img src={news} alt="news homepage mockup" />
              <figcaption>
                <a
                  href="https://github.com/Maysn/News-Homepage"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https://news-homepage-mockup.netlify.app/"
                  target="_blank"
                >
                  Live preview
                </a>
                <a
                  href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
                  target="_blank"
                >
                  Original design
                </a>
              </figcaption>
            </figure>
            <div className="project__desc">
              <p>A news homepage mockup.</p>
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
                A simple weather app that has a search feature and renders
                dynamic backgrounds based on weather state.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// to easily add a new project

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
