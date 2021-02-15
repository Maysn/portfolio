import React, { useState, useEffect } from "react";
import zed from "./assets/zed.png";
import "./App.scss";
import "./components/header/header";
import Header from "./components/header/header";
import logo from "./assets/logo2t.png";

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open === true) {
      setLoading(false);
    }
  }, [open]);

  return (
    <div className="site-wrapper">
      <Header open={open} setOpen={setOpen} loading={loading} />

      <div className="container">
        <section id="Home" className="home">
          <div
            className={
              loading
                ? "home__light"
                : `${open ? "has-fade" : "delay-light home__light"}`
            }
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          <div className="home__introduction">
            <p>I'm Mazen, a self-taught frontend developer based in Egypt. I find an unparalleled enjoyment while working on projects, and trying to solve problems
              encountered in the process.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
