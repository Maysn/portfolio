import NavLinks from "./navlinks";
import Hamburger from "./Hamburger";
import MobMenu from "./mobmenu";


function Header({open, setOpen, loading}) {
    return(
        <header className="header">
        <div className={loading? "overlay has-fade hide-for-desktop" : `overlay hide-for-desktop ${open? "fade-in" : "fade-out"}`}></div>

        <nav className="flex flex-js-sb flex-ai-c">
          <div className="header__logo">
            <a href="/">
              {/* <img src={zed} alt="Maysn" /> */}
              Maysn
            </a>
          </div>
          <Hamburger open={open} setOpen={setOpen} loading={loading}/>
          <NavLinks open={open} setOpen={setOpen} loading={loading} />
          </nav>
          <MobMenu open={open} loading={loading} />
      </header>
    );
}
export default Header;