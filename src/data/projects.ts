export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export const projectsData: Project[] = [
  {
    id: "wifi-card",
    title: "Wifi-Card Generator",
    description: "A web-based tool designed to create QR codes and printable cards containing WiFi credentials. Simplifies sharing WiFi network details by allowing users to scan a QR code.",
    image: "/images/wifi-card.png",
    link: "/projects/wifi-card-generator/index.html",
    tags: ["HTML", "CSS", "JS", "QR Code"]
  },
  {
    id: "rubiks-cube",
    title: "Rubik's Cube",
    description: "An interactive mobile or web application that simulates a 3D Rubik's Cube puzzle. Offers users an engaging and realistic experience of solving the classic cube.",
    image: "/images/cube.png",
    link: "/projects/the-cube/index.html",
    tags: ["Three.js", "3D", "Game"]
  },
  {
    id: "hug-bunny",
    title: "Hug Bunny",
    description: "A personalized workout platform using API integration to customize fitness plans based on user goals and equipment.",
    image: "/images/bear.png",
    link: "/projects/hug-bunny-game/hug-bunny-game.html",
    tags: ["API", "Health", "Fitness"]
  },
  {
    id: "lost-found",
    title: "Lost and Found",
    description: "A community-driven initiative that aims to help individuals who have lost items, pets, or belongings by providing a simple platform to post information.",
    image: "/images/lost_and_found.png",
    link: "/projects/Lost-And-Found-1-main/index.html",
    tags: ["Community", "Platform"]
  },
  {
    id: "claw-machine",
    title: "Claw Machine",
    description: "A realistic arcade simulation that lets users control a virtual claw to grab prizes. Features physics-based mechanics.",
    image: "/images/claw-machine.png",
    link: "/projects/claw-machine/claw-machine.html",
    tags: ["Game", "Simulation"]
  }
];
