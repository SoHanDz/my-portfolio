import type { Experience, Skill } from "@/types";

export const aboutDataVi = {
  bio: {
    greeting: "Về Tôi",
    tagline: "Gốc Dev,\nTư Duy Designer.",
    paragraphs: [
      "Tôi là UI/UX Designer với nền tảng lập trình frontend — hiện là sinh viên năm 3 tại Cao đẳng Viễn Đông, dự kiến tốt nghiệp cuối năm 2025. Từ năm 2, tôi đã tham gia các dự án thực tế thông qua giảng viên, tức là tôi đã có sản phẩm thật được triển khai thực tế.",
      "Vì xuất phát từ dev, tôi thiết kế với tư duy code. Mỗi layout đều sẵn sàng để component hóa, mỗi khoảng cách đều có chủ đích, mỗi tương tác đều khả thi về mặt kỹ thuật — để team bạn tốn ít thời gian re-spec hơn và ship nhanh hơn.",
    ],
  },
  stats: [
    { value: "9+", label: "Dự Án" },
    { value: "3+", label: "Khách Hàng Thật" },
    { value: "8.2", label: "GPA / 10" },
  ],
};

export const experiencesVi: Experience[] = [
  {
    id: "vnmentors",
    title: "UI/UX Designer",
    company: "VNMentors",
    period: "Tháng 10/2025 – 01/2026",
    description:
      "Tham gia team chính với vị trí Designer trong 3 tháng. Thiết kế các ấn phẩm marketing 2D cho sản phẩm 990TOEIC và xây dựng nhận diện thương hiệu, bao gồm logo cho cả 990TOEIC và VNMentors.",
  },
];

export const skillsVi: Skill[] = [
  {
    id: "design",
    title: "Thiết Kế",
    items:
      "Figma · UX Research · Wireframing · Prototyping · Design Systems · Usability Testing",
  },
  {
    id: "frontend",
    title: "Frontend",
    items:
      "React · Next.js · Tailwind CSS · Node.js · MySQL · Thư viện Component",
  },
  {
    id: "creative",
    title: "Công Cụ Sáng Tạo",
    items: "Illustrator · Photoshop · Premiere Pro (cơ bản)",
  },
  {
    id: "ai",
    title: "AI & Công Cụ Hiện Đại",
    items: "Cursor · v0 · Claude · Midjourney · Prompt Engineering",
  },
];