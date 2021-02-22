import {FaLinkedin, FaGithub} from 'react-icons/fa'
import Footer from './footer'
export default function Contact(params) {
  return (
    <section id="Contact" className="contact">
      <div className="contact__content">
        <h2>Get in touch</h2>
      <div className="contact__links">
        <div className="contact__social"><FaGithub/> <a href="http://">Github</a></div>
        <div className="contact__social"><FaLinkedin/> <a href="http://">LinkedIn</a></div>
      </div>
      </div>
      <Footer/>
    </section>
  );
}
