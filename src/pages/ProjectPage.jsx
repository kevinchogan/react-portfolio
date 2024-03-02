import { useParams, Link } from "react-router-dom";
import Projects from "../data/cards.js";

export default function ProjectPage() {
  const { id } = useParams();
  const projectList = Projects();
  const project = projectList[id - 1];

  return (
    <section className="project">
        <div className="card-column">
        <figure className="project-card">
            <h3 className="card-header">{project.title}</h3>
            <img className="card-image" src={project.image} alt={project.altText} />
            <div className="card-body">{project.description}</div>
        </figure>
        </div>
        <div className="projectBtn">
            <Link to="/portfolio">← Go Back</Link>
        </div>
    </section>
  );
}
