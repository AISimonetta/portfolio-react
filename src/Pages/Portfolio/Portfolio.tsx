import "./Portfolio.scss";
import SideBar from "../../Components/SideBar/SideBar";
import PortfolioProjects from "../../Container/PortfolioProjects/PortfolioProject";
import { projectsData } from "../../Data/Data";

const Portfolio = () => {
  return (
    <div>
      <SideBar />
      <div>
        <PortfolioProjects projects={projectsData} />
      </div>
    </div>
  );
};

export default Portfolio;
