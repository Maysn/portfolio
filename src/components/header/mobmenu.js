function MobMenu({ open, loading,setOpen }) {
  return (
    <div className={loading? "mobmenu has-fade hide-for-desktop" :`mobmenu hide-for-desktop  ${open? "fade-in" : "fade-out"}`}>
      <a href="#Home" onClick={() => setOpen(!open)}>Home</a>
      <a href="#About" onClick={() => setOpen(!open)}>About</a>
      <a href="#Projects" onClick={() => setOpen(!open)}>Projects</a>
      <a href="#Contact" onClick={() => setOpen(!open)}>Contact</a>
    </div>
  );
}
export default MobMenu;