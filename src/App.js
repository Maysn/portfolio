import React, {useState} from 'react';
import zed from "./assets/zed.png";
import "./App.scss";
import Hamburger from "./components/Hamburger";
import NavLinks from "./components/navlinks";

function App() {

  const [open, SetOpen] = useState(false);
  // const opened = () => Setopen(!open);
  return (
    <div className="container">
      <header className="header">
        <div className={`overlay ${open? "fade-in" : "fade-out"}`}></div>

        <nav className="flex flex-js-sb flex-ai-c">
          <div className="header__logo">
            <a href="/">
              <img src={zed} alt="Maysn" />
            </a>
          </div>
          <Hamburger open={open} setOpen={SetOpen}/>
          <NavLinks open={open} setOpen={SetOpen}/>
          </nav>
          <div className="header__mobmenu"></div>
      </header>
      <div className="body">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default App;

// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
