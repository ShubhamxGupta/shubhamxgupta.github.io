export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags?: string[];
  techStack?: string[];
  problem?: string;
  outcome?: string;
}

export const projectsData: Project[] = [
  {
    id: "giftbound",
    title: "GiftBound",
    description: "A modern Secret Santa event management application designed to simplify holiday gifting circles.",
    image: "/images/projects/giftbound.png",
    link: "https://giftbound.vercel.app/",
    github: "https://github.com/ShubhamxGupta/giftbound",
    tags: ["Event Management", "Next.js", "Full Stack"],
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    problem: "Organizing Secret Santa events manually is chaotic and lacks privacy.",
    outcome: "Streamlined event creation and participant assignment with a polished UI."
  },
  {
    id: "wifi-card",
    title: "Wifi-Card Generator",
    description: "A secure, client-side utility for generating WiFi QR codes, eliminating the need to share plain-text passwords.",
    image: "/images/projects/wifi-card.png",
    link: "/projects/wifi-card-generator/index.html",
    github: "https://github.com/ShubhamxGupta/wifi-card-generator",
    tags: ["Utility", "Security", "Web Tool"],
    techStack: ["HTML5 Canvas", "QR Code Generation", "Vanilla JS"],
    problem: "Sharing complex WiFi passwords manually is error-prone and insecure.",
    outcome: "Created a pure client-side solution that ensures credentials never leave the user's device."
  },
  {
    id: "rubiks-cube",
    title: "Rubik's Cube Simulator",
    description: "Interactive 3D puzzle engine featuring realistic physics and solver algorithms.",
    image: "/images/projects/rubiks-cube.png",
    link: "/projects/the-cube/index.html",
    tags: ["3D", "Game Dev", "Interactive"],
    techStack: ["Three.js", "WebGL", "Physics Engine"],
    problem: "Building a performant 3D puzzle in the browser requires low-level optimization.",
    outcome: "Achieved 60fps rendering on mobile devices with smooth touch controls."
  },
  {
    id: "hug-bunny",
    title: "Hug Bunny AI Fitness",
    description: "Adaptive workout platform that personalizes plans based on user feedback loops.",
    image: "/images/projects/hug-bunny.png",
    link: "/projects/hug-bunny-game/hug-bunny-game.html",
    tags: ["Health", "AI", "Personalization"],
    techStack: ["Rest API", "React", "Node.js"],
    problem: "Generic workout apps fail to account for daily equipment variability.",
    outcome: "Developed dynamic plan generation that adapts to available equipment in real-time."
  },
  {
    id: "claw-machine",
    title: "Physics-Based Claw Machine",
    description: "A realistic arcade simulation focusing on physics fidelity and collision detection.",
    image: "/images/projects/claw-machine.png",
    link: "/projects/claw-machine/claw-machine.html",
    tags: ["Simulation", "Physics"],
    techStack: ["Matter.js", "Canvas API", "Game Logic"],
    problem: "Simulating realistic grip physics in a browser environment.",
    outcome: "Implemented custom collision constraints to mimic arcade mechanisim."
  }
];
