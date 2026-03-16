import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "1",
    title: "Design",
    items:
      "UX Research · Wireframing · Prototyping · Design Systems · Usability Testing · Information Architecture",
    icon: "design",
  },
  {
    id: "2",
    title: "Frontend Development",
    items:
      "HTML/CSS · JavaScript · React · Tailwind · Component Libraries · Responsive Design",
    icon: "frontend",
  },
  {
    id: "3",
    title: "System Understanding",
    items:
      "API Design · Backend Logic · Database Basics · State Management · Performance Optimization",
    icon: "system",
  },
  {
    id: "ai",
    title: "AI & Tools", // hoặc hardcode
    items:
      "ChatGPT · Claude · Cursor · v0 · Midjourney · Prompt Engineering · AI-assisted Design",
    icon: "ai",
  },
];
