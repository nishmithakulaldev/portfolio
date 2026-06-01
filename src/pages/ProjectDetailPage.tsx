import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/projects"
          className="text-blue-500 hover:underline font-medium"
        >
          Back to Projects
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link
        to="/projects"
        className="text-blue-500 hover:underline text-sm mb-6 inline-block"
      >
        Back to Projects
      </Link>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        Completed: {project.completedDate}
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        {project.longDescription || project.description}
      </p>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Key Learnings</h2>
        <div className="flex flex-col gap-3">
          {project.learnings.map((learning) => (
            <div
              key={learning}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
            >
              <span className="text-blue-500 mt-0.5">✦</span>
              <span className="text-gray-700">{learning}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          View on GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectDetailPage;
