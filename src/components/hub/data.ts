export type CourseFile = {
  id: string;
  name: string;
  size: string;
  type: "pdf" | "video" | "doc";
  isPublished: boolean;
};

export type Module = {
  id: string;
  title: string;
  description?: string;
  files: CourseFile[];
};

export type Student = {
  id: string;
  name: string;
  email: string;
};

export type Course = {
  id: string;
  code: string;
  title: string;
  term: string;
  instructor: string;
  students: Student[];
  modules: Module[];
};

export const initialCourses: Course[] = [
  {
    id: "c1",
    code: "CS 101",
    title: "Introduction to Python",
    term: "Fall 2026",
    instructor: "Dr. A. Rivera",
    students: [
      { id: "s1", name: "Maya Chen", email: "maya@uni.edu" },
      { id: "s2", name: "Jordan Patel", email: "jordan@uni.edu" },
      { id: "s3", name: "Sam Okafor", email: "sam@uni.edu" },
    ],
    modules: [
      {
        id: "m1",
        title: "Week 1 — Getting Started",
        description: "Syllabus, setup, and your first script.",
        files: [
          { id: "f1", name: "Syllabus.pdf", size: "1.2 MB", type: "pdf", isPublished: true },
          { id: "f2", name: "Intro-Lecture.mp4", size: "84.3 MB", type: "video", isPublished: true },
        ],
      },
      {
        id: "m2",
        title: "Week 2 — Variables & Types",
        files: [
          { id: "f3", name: "Lecture-Notes.docx", size: "320 KB", type: "doc", isPublished: false },
        ],
      },
    ],
  },
  {
    id: "c2",
    code: "DES 210",
    title: "Design Foundations",
    term: "Fall 2026",
    instructor: "Prof. L. Okumu",
    students: [
      { id: "s4", name: "Avery Kim", email: "avery@uni.edu" },
      { id: "s5", name: "Riley Cohen", email: "riley@uni.edu" },
    ],
    modules: [],
  },
];
