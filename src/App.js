import React, {useState, useEffect} from 'react';
import zed from "./assets/zed.png";
import "./App.scss";
import "./components/header/header";
import Header from './components/header/header';
function App() {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {if (open === true) {
    setLoading(false);
  }},[open]);
  
  return (
    <div className="container">
      <Header open={open} setOpen={setOpen} loading={loading}/>
    </div>
  );
}

export default App;

