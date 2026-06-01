import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return <div>Project not found</div>;
  }
  return <ProjectCard key={project.id} project={project} />;
};
export default ProjectDetailPage;
