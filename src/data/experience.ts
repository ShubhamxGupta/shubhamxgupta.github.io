export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  achievements?: string[];
  type: "work" | "education";
}

export const experienceData: ExperienceItem[] = [
  {
    id: "samsung",
    role: "Team Lead - Research Intern",
    company: "Samsung PRISM Remote",
    period: "Aug 2025 - Present",
    type: "work",
    description: "Leading a 4-person team in developing a secure XML-to-Jetpack Compose migration tool.",
    achievements: [
      "Reduced UI modernization efforts by approximately 40%",
      "Engineered static analysis rules in Kotlin to preemptively detect insecure XML patterns (e.g., hardcoded secrets) prior to conversion",
      "Conducting bi-weekly code reviews and enforcing secure coding guidelines, resulting in zero critical vulnerabilities in the beta release"
    ]
  },
  {
    id: "bluestocks",
    role: "Software Developer Intern",
    company: "BlueStocks Fintech",
    period: "May 2025 - June 2025",
    type: "work",
    description: "Worked with high-quality standards and best practices in Software Development.",
    achievements: [
      "Built a secure user authentication system with JWT",
      "Developed responsive frontend components using React, Tailwind CSS, and Vite",
      "Designed and implemented RESTful APIs using Django and Django REST Framework",
      "Managed PostgreSQL database schema and enabled document upload features"
    ]
  },
  {
    id: "sparks",
    role: "Web Developer",
    company: "The Sparks Foundation",
    period: "Aug 2024 - Sep 2024",
    type: "work",
    description: "Established expertise in Web Development during the internship program.",
    achievements: [
      "Consistently delivered high-quality and efficient solutions codes",
      "Effectively communicated complex concepts to co-workers",
      "Developed valuable projects and experience in website making"
    ]
  },
  {
    id: "vit",
    role: "Bachelor of Technology",
    company: "Vellore Institute of Technology, Chennai",
    period: "2023 - Present",
    type: "education",
    description: "CGPA: 8.2 (4 sem). Active member of Robotics Club."
  },
  {
    id: "mps",
    role: "Higher Secondary School",
    company: "Maheshwari Public School, Jaipur",
    period: "2011 - 2023",
    type: "education",
    description: "CGPA: 8"
  }
];
