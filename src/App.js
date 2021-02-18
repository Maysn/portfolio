import React, { useState, useEffect } from "react";
import "./App.scss";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header/header";
import Home from "./components/home";
import Projects from "./components/projects";

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   if (open === true) {
  //     body.classList.add('noscroll');
  //   }
  //   else {
  //     body.classList.remove('noscroll');
  //   }
  // },[open])

  useEffect(() => {
    if (open === true) {
      setLoading(false);
    }
  }, [open]);

  return (
    <div className="site-wrapper">
      <Header open={open} setOpen={setOpen} loading={loading} />

      <div className="container">
       <Home open={open} loading={loading}/>
       <About/>
       <Projects/>
       <Contact/>
      </div>
    </div>
  );
}

export default App;
