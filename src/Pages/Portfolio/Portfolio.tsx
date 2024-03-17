import "./Portfolio.scss";
import SideBar from "../../Components/SideBar/SideBar";
import PortfolioProjects from "../../Container/PortfolioProjects/PortfolioProject";
import { projectsData } from "../../Data/Data";
import Footer from "../../Components/Footer/Footer";

const Portfolio = () => {
  return (
    <div>
      <SideBar />
      <div>
        <PortfolioProjects projects={projectsData} />
      </div>
      <Footer/>
    </div>
  );
};

export default Portfolio;
