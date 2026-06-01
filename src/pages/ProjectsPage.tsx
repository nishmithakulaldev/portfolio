import ProjectList from "../components/projects/ProjectList";
import { projects } from "../data/projects";

const ProjectsPage = () => {
  return <ProjectList projects={projects} />;
};
export default ProjectsPage;
