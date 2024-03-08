import SideBar from "../../Components/SideBar/SideBar";
import { Linkedin, Github, Mail } from "lucide-react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <SideBar />
      <div className="contact__container">
        <p className="contact__title">GET IN TOUCH.</p>
        <div className="contact__links">
          <a
            className="link"
            href="https://www.linkedin.com/in/alejandrasimonetta/"
            target="_blank"
          >
            <Linkedin className="linkedin" />
          </a>
          <a href="https://github.com/AISimonetta" target="_blank">
            <Github className="github" />
          </a>
          <a href="mailto:info@simonettaalejandra.com">
            <Mail className="mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
