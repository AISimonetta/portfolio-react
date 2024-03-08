import "./ProjectCard.scss";
import { ProjectData } from "../../Data/Data";
import { Eye, Code } from "lucide-react";

type ProjectCardProps = {
  project: ProjectData;
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project">
      <div className="project__card">
        <div id="cardId">{project.id}</div>
        <div>
          <img
            className="project__img"
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className="project__card--container">
          <h3 className="project__title">{project.title}</h3>
          <div className="project__card--links">
            <a
              className="project__link"
              href={project.githubPages}
              target="_blank"
            >
              <Eye className="eye" />
            </a>
            <a
              className="project__link"
              href={project.githubRepository}
              target="_blank"
            >
              <Code className="code" />
            </a>
          </div>
        </div>
        <p className="project__tech">Tech: {project.techUsed.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
