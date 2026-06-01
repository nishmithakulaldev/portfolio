// pages/HomePage.tsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Nishmitha Kulal</h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-3 max-w-2xl">
          Software Engineer
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-xl">
          I build full-stack applications with React, C# .NET, PostgreSQL, and
          AWS. Focused on clean architecture and scalable systems.
        </p>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* What I'm working with */}
      <div className="py-12 border-t">
        <h2 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Tech I work with
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "TypeScript",
            "C#",
            ".NET",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Recent projects */}
      <div className="py-12 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recent Projects</h2>
          <Link
            to="/projects"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
