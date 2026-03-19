import type { Experience, Skill } from "@/types";

export const aboutDataEn = {
  bio: {
    greeting: "About Me",
    tagline: "Developer Background,\nDesigner Mindset.",
    paragraphs: [
      "I'm a UI/UX Designer with a frontend development background — currently a 3rd-year student at Vien Dong College, graduating late 2025. Since my 2nd year, I've been involved in real-world projects through faculty connections, which means I've shipped work that actually lives in production.",
      "Because I started as a dev, I design with code in mind. Every layout I create is component-ready, every spacing decision is intentional, and every interaction is technically feasible — so your team spends less time re-speccing and more time shipping.",
    ],
  },
  stats: [
    { value: "9+", label: "Projects" },
    { value: "3+", label: "Real Clients" },
    { value: "8.2", label: "GPA / 10" },
  ],
};

export const experiencesEn: Experience[] = [
  {
    id: "vnmentors",
    title: "UI/UX Designer",
    company: "VNMentors",
    period: "Oct 2025 – Jan 2026",
    description:
      "Joined the core team as a Designer for 3 months. Designed 2D marketing assets for the 990TOEIC product and created brand identities including logos for both 990TOEIC and VNMentors.",
  },
];

export const skillsEn: Skill[] = [
  {
    id: "design",
    title: "Design",
    items:
      "Figma · UX Research · Wireframing · Prototyping · Design Systems · Usability Testing",
  },
  {
    id: "frontend",
    title: "Frontend",
    items:
      "React · Next.js · Tailwind CSS · Node.js · MySQL · Component Libraries",
  },
  {
    id: "creative",
    title: "Creative Tools",
    items: "Illustrator · Photoshop · Premiere Pro (basic)",
  },
  {
    id: "ai",
    title: "AI & Modern Tools",
    items: "Cursor · v0 · Claude · Midjourney · Prompt Engineering",
  },
];