import "./About.scss";
import profilePhoto from "../../Assets/images/alePhoto.jpg";
import SideBar from "../../Components/SideBar/SideBar";

const About = () => {
  return (
    <div className="about">
      <SideBar />
      <div className="about__container">
        <div className="about__text">
          <h1 className="about__text--title">ABOUT.</h1>
          <p>
            "Hello, I'm Ale. A dedicated and adaptable individual with a keen
            eye for detail, finding fulfillment in every aspect of the
            development process. Driven by a thirst for knowledge, my journey
            into development started with a family member's inspiration, leading
            me to invest time in online courses and enroll at _nology to enhance
            my software engineering skills. As a developer, I appreciate
            collaboration in both small and large teams, finding joy in working
            closely with teammates to achieve shared goals. Actively committed
            to continuous learning, I seek guidance from experienced developers
            to enhance my skills.{" "}
          </p>
          <br />
          <p className="about__text--parragraph">
            Beyond design and development, I cherish quality time with family
            and friends, stay physically active, and explore newfound passions
            like Paddle Tennis and creative DIY projects at home."
          </p>
        </div>

        <div className="about__imageContainer">
          <div className="about__image">
            <img src={profilePhoto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
