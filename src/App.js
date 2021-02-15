import React, {useState, useEffect} from 'react';
import zed from "./assets/zed.png";
import "./App.scss";
import "./components/header/header";
import Header from './components/header/header';
import logo from "./assets/logo2t.png"

function App() {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {if (open === true) {
    setLoading(false);
  }},[open]);
  
  return (
    <div className="container">
      <Header open={open} setOpen={setOpen} loading={loading}/>
      <div className="wrapper">
      <div className="container__logo">
      <div className={loading? "container__light" : `${open? "has-fade" : "delay-light container__light"}`} style={{backgroundImage: `url(${logo})`}}></div>
      </div>
      </div>
    </div>
  );
}

export default App;

