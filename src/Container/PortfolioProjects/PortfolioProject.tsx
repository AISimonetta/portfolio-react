import "./PortfolioProjects.scss";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { ProjectData } from "../../Data/Data"; // Correct import statement

type PortfolioProjectsProps = {
  projects: ProjectData[];
};

const PortfolioProjects = ({ projects }: PortfolioProjectsProps) => {
  return (
    <div className="portfolioProjects">
      <h1 className="portfolioProjects__title">PROJECTS.</h1>
      <div className="portfolioProjects__container">
        <div className="portfolioProjects__cards">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
