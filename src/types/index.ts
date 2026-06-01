export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  learnings: string[];
  completedDate: string;
}
