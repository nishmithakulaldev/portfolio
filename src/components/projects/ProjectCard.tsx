import { Link } from "react-router-dom";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
        {project.learnings.map((learning) => (
          <li key={learning}>{learning}</li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Link
          to={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          GitHub
        </Link>
        {project.liveUrl && (
          <Link
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
