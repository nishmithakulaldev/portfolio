import type { Project } from "../types";
export const projects: Project[] = [
  {
    id: 1,
    title: "TaskManager CLI",
    description: "A command-line task management app built with C# and .NET.",
    longDescription:
      "A full-featured CLI task manager built from scratch to learn OOP and SOLID principles. Supports adding, completing, deleting, filtering, and sorting tasks. Tasks persist to a local JSON file using System.Text.Json. The architecture follows Clean Architecture with a service layer, repository pattern for data access, and the Command Pattern for extensible CLI commands. Every command is its own class, making it easy to add new features without modifying existing code.",
    techStack: ["C#", ".NET9", "System.Text.Json"],
    githubUrl: "https://github.com/nishmithakulaldev/TaskManager",
    learnings: [
      "SOLID principles — Single Responsibility, Open/Closed, Dependency Inversion applied to real code",
      "Command Pattern — Each CLI command is a self-contained class with its own parsing and execution",
      "Repository Pattern — Data access abstracted behind an interface, making storage swappable",
      "Custom Exceptions — TaskNotFoundException and InvalidTaskDataException for granular error handling",
      "Encapsulation — Used private set and init to control property mutability",
    ],
    completedDate: "2026-05",
  },
];
