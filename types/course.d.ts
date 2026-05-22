type Course = {
  id: string;
  code: string;
  name: string;
  lecturer: string;
  lecturerInitials: string;
  cat1: CourseScore;
  cat2: CourseScore;
  exam: CourseScore;
  trend: "up" | "down" | "stable" | null;
  published: boolean;
  creditHours: number;
  description: string;
  resources: { label: string; type: "pdf" | "video" | "link" }[];
  assessmentHistory: { label: string; score: number; max: number }[];
};
