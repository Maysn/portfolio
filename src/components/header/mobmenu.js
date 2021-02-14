function MobMenu({ open, loading }) {
  return (
    <div className={loading? "header__mobmenu has-fade hide-for-desktop" :`header__mobmenu hide-for-desktop  ${open? "fade-in" : "fade-out"}`}>
      <a href="#Home">Home</a>
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </div>
  );
}
export default MobMenu;