import { Project } from "@/types";

export const projectsEN: Project[] = [
  {
    id: "1",
    title: "SaaS Warehouse Management System (InvoiceAI)",
    description:
      "Warehouse management system integrated with e-invoicing, built on top of a real-world project (XTC), currently live with active users",
    tags: ["SaaS", "In Development"],
    category: "startup",
    detail: {
      overview:
        "InvoiceAI is a SaaS warehouse management system integrated with e-invoicing, targeting SMEs in Vietnam. The project was pivoted from XTC — a warehouse management system I previously helped build for a manufacturing workshop. When the client discontinued, my lecturer decided to expand the product by adding e-invoicing features aligned with Vietnam's new regulations and restructuring it as a SaaS platform. I owned the entire UI layer — from Figma designs to frontend implementation.",

      responsibilities: [
        "Led UI/UX for the entire project: from design to implementation review",
        "Redesigned the legacy XTC system into a new SaaS interface",
        "Contributed to frontend development alongside design work",
        "Researched existing e-invoice solutions on the market to guide UX decisions",
        "Collaborated closely with the backend team to ensure design feasibility",
      ],

      contributions: [
        "Redesigned the full UI from the legacy XTC system, preserving what worked well",
        "Built a basic design system: color palette, typography, and component library",
        "Redesigned the order creation page — restructured the layout into clear sections (header, filters, table) to improve readability",
        "Used v0.dev to explore UI directions for key screens, then self-implemented the chosen designs in code",
        "Designed core modules: dashboard, warehouse management, e-invoicing, and reporting",
      ],

      impact: [
        "System is live and being used by real users",
        "Completed design and implementation for 20+ core screens",
        "New UI received noticeably better feedback compared to the legacy XTC version",
      ],

      technologies: ["Figma", "React", "TypeScript", "Ant Design"],

      teamSize:
        "6 (1 Lead/Backend, 1 UI/UX Designer, 2 Frontend Devs, 1 Backend Dev, 1 Tester)",
      myRole: "UI/UX Designer & Frontend Developer",

      challenges:
        "Redesigning a live system while development was still running in parallel. The e-invoicing domain is complex and highly specific to Vietnamese regulations — it took time to understand deeply enough to design well. Balancing the designer and frontend developer roles within the same project.",

      learnings: [
        "Hands-on understanding of the e-invoicing domain and warehouse business logic",
        "How to use AI tools (v0.dev) as part of a real redesign workflow",
        "The value of layout structure — grouping content into clear blocks significantly improves usability",
        "Getting comfortable with designing and coding simultaneously in a startup environment",
        "Handling constantly changing requirements during a product pivot",
      ],

      images: [
        {
          url: "projects/invoiceai-dashboard",
          alt: "InvoiceAI Dashboard",
          caption: "Dashboard redesign and E-invoice Management",
        },
      ],
    },
  },

  {
    id: "2",
    title: "Warehouse Management System (XTC)",
    description:
      "Warehouse management system for a leather wallet manufacturing workshop, covering order management, inventory, and products",
    tags: ["Client", "Not Deployed"],
    category: "client",
    detail: {
      overview:
        "XTC is a warehouse management system built for Xuong Truong Chinh — a leather wallet manufacturing workshop in Ho Chi Minh City. The problem was straightforward: replace manual tracking with a proper system for orders, inventory, and products. I took on both the UI/UX design and frontend development roles. The project was completed but the client did not proceed with deployment; the design and codebase were later reused as the foundation for InvoiceAI.",

      responsibilities: [
        "Designed UI/UX for core screens: dashboard, orders, inventory, products, and customers",
        "Referenced design patterns from Sapo POS and adapted them to fit actual requirements",
        "Developed frontend for multiple modules across the system",
        "Maintained UI consistency throughout the implementation process",
      ],

      contributions: [
        "Designed wireframes and mockups in Figma for all core screens",
        "Built a basic component library to keep team implementation consistent",
        "Coded frontend for order and product management pages",
        "Reviewed and provided UI/UX feedback during development",
      ],

      impact: [
        "Completed design and implementation for all core screens",
        "Project was not deployed due to client change of plans",
        "Design and codebase were inherited by the InvoiceAI project",
      ],

      technologies: ["Figma", "React", "TypeScript", "Ant Design"],

      teamSize:
        "8 (1 Lead/Backend, 1 UI/UX Designer, 3 Frontend Devs, 2 Backend Devs, 1 Tester)",
      myRole: "UI/UX Designer & Frontend Developer",

      challenges:
        "First time working with a real client — had to understand warehouse business logic while balancing referencing existing designs with customizing for specific needs. Managing both design and development responsibilities within the same project.",

      learnings: [
        "How to reference and adapt design patterns from established products",
        "Real-world workflow from design to handoff and implementation",
        "The importance of early client validation",
        "First experience combining the designer and frontend developer roles",
      ],

      images: [
        {
          url: "projects/xtc-warehouse",
          alt: "XTC Warehouse System",
          caption: "Overview dashboard and order management screen",
        },
      ],
    },
  },

  {
    id: "3",
    title: "Library Management System (Vien Dong College)",
    description:
      "Digitizing the library management system for Vien Dong College — my first real-world project, currently live",
    tags: ["Client", "Shipped"],
    category: "client",
    detail: {
      overview:
        "The library at Vien Dong College was running entirely on manual processes — book borrowing and returning was handled on paper with no tracking system. My lecturer proposed a digitization project that was approved by the college principal. I was the lead UI/UX designer, responsible for all desktop interfaces covering two user groups: students and lecturers for searching and borrowing, and librarians for daily operations. The system is currently deployed and in active use at the library.",

      responsibilities: [
        "Researched the existing book borrowing and returning process at the library",
        "Designed user flows for 2 groups: end users (students, lecturers) and admin (librarians)",
        "Created wireframes and high-fidelity designs for all desktop screens",
        "Collaborated with the dev team throughout the implementation process",
      ],

      contributions: [
        "Designed the book search and borrowing portal for students and lecturers",
        "Designed the admin dashboard for librarians to manage borrowing operations",
        "Built a basic design system to ensure visual consistency",
        "Designed the statistics and reporting screens for management",
      ],

      impact: [
        "System is deployed and actively used at the library",
        "Fully replaced the previous manual process",
        "Usage is limited due to students' low habit of visiting the physical library",
      ],

      technologies: ["Figma", "React", "Material-UI", "PostgreSQL"],

      teamSize:
        "5 (1 Designer, 2 Frontend Devs, 1 Backend Dev, 1 Librarian Lead)",
      myRole: "UI/UX Designer",

      challenges:
        "Designing for two very different user groups: tech-savvy students and older librarians with limited software experience. Being my first real-world project, there was also a learning curve in working with actual stakeholders and navigating institutional requirements.",

      learnings: [
        "First experience working with real clients and stakeholders",
        "How to design for multiple user personas with different needs and skill levels",
        "Understanding the process of digitizing a traditional manual workflow",
        "Working on a project with real accountability — approved by the college principal",
      ],

      images: [
        {
          url: "projects/library-system",
          alt: "Library Management System",
          caption: "Student portal and Admin dashboard",
        },
      ],
    },
  },

  {
    id: "4",
    title: "Khu13 Website",
    description:
      "Website for Khu13 bar in Ho Chi Minh City — my first freelance project, wireframe approved by client",
    tags: ["Freelance", "In Development"],
    category: "client",
    detail: {
      overview:
        "Khu13 is a bar in Ho Chi Minh City that needed a website to present their brand and space. I was brought in by a senior student acting as PM on the project to handle the UI/UX side. This was the first time I joined a project entirely outside of my university network. The wireframe has been completed and approved by the client — currently waiting on content from their side to continue.",

      responsibilities: [
        "Received and interpreted the brief from the PM",
        "Designed wireframes for the full website",
        "Presented the design direction for the PM to relay to the client",
      ],

      contributions: [
        "Completed wireframes that were approved by the client",
        "Defined content structure and user flow suited to a bar's context",
      ],

      impact: [
        "Wireframe signed off and approved by the client",
        "Project ongoing — waiting on content from the client to proceed",
      ],

      technologies: ["Figma"],

      teamSize: "2 (1 PM, 1 Designer)",
      myRole: "UI/UX Designer",

      challenges:
        "First time working in a real freelance setup — receiving the brief through a PM meant interpreting client needs without direct communication. Had to make design decisions based on second-hand information.",

      learnings: [
        "Freelance workflow with a PM acting as the client bridge",
        "How to extract design direction from an indirect brief",
        "Presenting and justifying design decisions without direct client access",
      ],

      images: [
        {
          url: "projects/khu13-feed",
          alt: "Khu13 Website",
          caption: "Website wireframe for Khu13 bar",
        },
      ],
    },
  },

  {
    id: "5",
    title: "Tuan Pham Audio Website",
    description:
      "Product showcase website for a premium audio equipment brand — designed with an AI-assisted workflow",
    tags: ["Client", "Shipped"],
    category: "client",
    detail: {
      overview:
        "Tuan Pham Audio is a premium audio equipment dealer in Ho Chi Minh City specializing in high-end speakers and amplifiers. The website needed to reflect the brand's premium positioning and help customers explore products before reaching out to place an order — not a direct e-commerce purchase flow. I handled the design side: defining the layout, color direction, and component system for the homepage, then used Figma Make to generate the remaining pages.",

      responsibilities: [
        "Defined the visual direction to match the brand's premium positioning",
        "Designed the homepage layout and component system",
        "Used Figma Make to extend the design across remaining pages",
        "Reviewed and adjusted AI output to maintain consistency with the initial direction",
      ],

      contributions: [
        "Designed homepage layout, primary color palette, and detailed components",
        "Used Figma Make to generate designs for product and contact pages",
        "Reviewed and refined AI-generated screens to align with the original direction",
        "Designed the product detail and contact-to-order flow",
      ],

      impact: [
        "Website delivered and live",
        "Visual presentation accurately reflects the brand's premium positioning",
      ],

      technologies: ["Figma", "Figma Make", "Next.js", "Tailwind CSS"],

      teamSize: "4 (1 Designer, 2 Developers, 1 Content Creator)",
      myRole: "UI/UX Designer (AI-assisted workflow)",

      challenges:
        "Maintaining quality control over AI output — Figma Make doesn't always interpret design intent correctly, requiring careful review and adjustments to keep everything consistent with the initial direction.",

      learnings: [
        "Integrating AI tools into a real design workflow",
        "The importance of defining clear direction before handing off to AI",
        "Designing for a premium product with high visual expectations",
        "UX for a product showcase model with a contact-to-order flow instead of direct purchase",
      ],

      images: [
        {
          url: "projects/tuanpham-audio",
          alt: "Tuan Pham Audio",
          caption: "Premium product showcase website",
        },
      ],
    },
  },

  {
    id: "6",
    title: "Parcel Locker System (Smart Box)",
    description:
      "UI/UX design for the admin dashboard of a smart parcel locker system at residential buildings",
    tags: ["IoT", "On Hold"],
    category: "startup",
    detail: {
      overview:
        "Smart Box is a startup idea building a smart parcel locker system for residential buildings — inspired by the parcel locker model widely used in China, addressing the problem of failed deliveries when recipients aren't home. I designed the admin dashboard on desktop, serving the team responsible for managing the locker system operations. The project is on hold due to a lack of investment.",

      responsibilities: [
        "Researched the parcel locker model and similar systems",
        "Designed the admin dashboard for desktop",
        "Built user flows for locker management and transaction tracking operations",
        "Collaborated with the team to align design with the product direction",
      ],

      contributions: [
        "Designed the locker management dashboard with compartment status tracking",
        "Built screens for monitoring and managing transactions",
        "Designed user management and permission screens",
        "Created wireframes and mockups for all core admin screens",
      ],

      impact: [
        "Completed design for all core admin screens",
        "Project put on hold at the design stage due to lack of investment",
      ],

      technologies: ["Figma"],

      teamSize: "8 members",
      myRole: "UI/UX Designer",

      challenges:
        "First time designing for an IoT system — needed to understand real operational workflows before jumping into design. Working in a pre-investment startup environment meant unclear product direction and frequent requirement changes.",

      learnings: [
        "Approaching design for IoT systems and physical operations",
        "How to research an unfamiliar domain from scratch",
        "Experience working in a startup at the pre-investment stage",
      ],

      images: [
        {
          url: "projects/smartbox-system",
          alt: "Smart Box System",
          caption: "Admin dashboard for locker system management",
        },
      ],
    },
  },
];
