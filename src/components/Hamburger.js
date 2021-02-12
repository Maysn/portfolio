import React, { useState } from "react";
import './Hamburger.scss'

function Hamburger({open, setOpen}) {
  return (
    <div onClick={() => setOpen(!open)} className= {`hamburger hide-for-desktop ${open? "open" : "close"}`}>
      <a href="#" >
      <span></span>
      <span></span>
      <span></span>
    </a>
    </div>
  );
}
export default Hamburger;
