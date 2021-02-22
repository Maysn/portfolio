import logo from "../assets/logo2t.png";


function Home({open, loading}){
    
    return(
        <section id="Home" className="home">
        <div
          className={
            loading
              ? "home__light"
              : `${open ? "has-fade" : "home__light delay-light"}`
          }
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className={loading? "home__introduction" : `${open? "has-fade" : "home__introduction"}`}>
          <h1>Hey , I'm Mazen,</h1>
          <p> a self-taught frontend developer based in Egypt.
          </p>
        </div>
      </section>
    );
}

export default Home;