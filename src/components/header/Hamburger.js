import React, { useState } from "react";

function Hamburger({open, setOpen, loading}) {
  return (
    <div onClick={() => setOpen(!open)}  className={loading? "hamburger hide-for-desktop" : `hamburger hide-for-desktop ${open? "open" : "close"}`}>
      <a>
      <span></span>
      <span></span>
      <span></span>
    </a>
    </div>
  );
}
export default Hamburger;
