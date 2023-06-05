import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Contact(params) {
  return (
    <section id="Contact" className="contact">
      <div className="contact__content">
        <h2>Get in touch</h2>
        <div className="contact__links">
          <div className="contact__social">
            <FaGithub />{" "}
            <a href="https://github.com/Maysn" target="_blank">
              Github
            </a>
          </div>
          <div className="contact__social">
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/mazen-abdelmaksoud/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
