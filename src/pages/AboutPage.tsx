const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["C#", ".NET", "REST APIs", "Entity Framework"],
  },
  { category: "Database", items: ["PostgreSQL", "SQL", "JSON"] },
  { category: "DevOps & Tools", items: ["AWS", "Git", "Docker", "VS Code"] },
];

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-3xl">
        I'm a software engineer focused on building full-stack applications
        using modern technologies. I enjoy solving complex problems and writing
        clean, maintainable code that follows solid engineering principles.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl">
        I'm currently working through a structured learning roadmap covering
        everything from OOP and design patterns to cloud infrastructure and
        system design — learning by building real projects.
      </p>

      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skills.map((group) => (
          <div key={group.category} className="bg-gray-50 rounded-lg p-5">
            <h3 className="font-semibold text-blue-500 mb-3">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((skill) => (
                <li key={skill} className="text-gray-600 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6">Currently Learning</h2>
      <div className="flex flex-wrap gap-3">
        {[
          "Clean Architecture",
          "Docker",
          "AWS ECS",
          "System Design",
          "Microservices",
        ].map((topic) => (
          <span
            key={topic}
            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
export default AboutPage;
