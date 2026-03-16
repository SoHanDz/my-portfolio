import { Project } from "@/types";

export const projectsVI: Project[] = [
  {
    id: "1",
    title: "Hệ thống SaaS quản lý kho (InvoiceAI)",
    description:
      "Hệ thống quản lý kho tích hợp hóa đơn điện tử, phát triển từ dự án thực tế XTC, đang có người dùng sử dụng",
    tags: ["SaaS", "Đã triển khai"],
    category: "startup",
    detail: {
      overview:
        "InvoiceAI là hệ thống SaaS quản lý kho tích hợp hóa đơn điện tử, nhắm đến các doanh nghiệp SME tại Việt Nam. Dự án được pivot từ hệ thống XTC — phần mềm quản lý kho cho xưởng sản xuất mà mình từng tham gia xây dựng trước đó. Khi client không tiếp tục, giảng viên hướng dẫn quyết định mở rộng sản phẩm, thêm nghiệp vụ hóa đơn điện tử theo nghị định mới của Việt Nam và chuyển sang mô hình SaaS. Mình đảm nhận toàn bộ mảng UI — từ thiết kế trong Figma đến implement frontend.",

      responsibilities: [
        "Lead UI/UX cho toàn bộ dự án: từ thiết kế đến review implementation",
        "Redesign lại hệ thống cũ (XTC) sang giao diện SaaS mới",
        "Tham gia phát triển frontend song song với thiết kế",
        "Research các giải pháp hóa đơn điện tử trên thị trường để định hướng UX",
        "Phối hợp chặt với backend để đảm bảo thiết kế khả thi",
      ],

      contributions: [
        "Redesign UI từ hệ thống XTC cũ, kế thừa những gì hoạt động tốt",
        "Redesign trang tạo đơn hàng — chia lại layout theo block rõ ràng (header, filter, table) để cải thiện khả năng đọc và thao tác",
        "Dùng v0.dev để khám phá hướng UI cho các màn hình chính, sau đó tự implement lại bằng code",
        "Thiết kế các module chính: dashboard, quản lý kho, hóa đơn điện tử, báo cáo",
      ],

      impact: [
        "Hệ thống đang chạy thực tế và có người dùng sử dụng",
        "Hoàn thành design và implement cho 20+ màn hình chính",
        "UI mới nhận phản hồi tốt hơn rõ rệt so với phiên bản XTC cũ",
      ],

      technologies: ["Figma", "React", "TypeScript", "Ant Design"],

      teamSize:
        "6 (1 Lead/Backend, 1 UI/UX Designer, 2 Frontend Devs, 1 Backend Dev, 1 Tester)",
      myRole: "UI/UX Designer & Frontend Developer",

      challenges:
        "Redesign một hệ thống đang chạy trong khi vẫn phải đảm bảo tiến độ phát triển. Nghiệp vụ hóa đơn điện tử khá phức tạp và đặc thù với quy định Việt Nam — cần thời gian để hiểu đủ sâu trước khi thiết kế. Cân bằng giữa vai trò designer và frontend dev trong cùng một dự án.",

      learnings: [
        "Hiểu thực tế về domain hóa đơn điện tử và nghiệp vụ kho hàng",
        "Cách tích hợp AI tool (v0.dev) vào quy trình redesign thực tế",
        "Giá trị của việc phân chia layout — chia block rõ ràng cải thiện đáng kể khả năng sử dụng",
        "Làm quen với việc vừa design vừa code trong môi trường startup",
        "Xử lý yêu cầu thay đổi liên tục khi sản phẩm đang pivot",
      ],

      images: [
        {
          url: "projects/invoiceai-dashboard",
          alt: "InvoiceAI Dashboard",
          caption: "Dashboard redesign và Quản lý hóa đơn điện tử",
        },
      ],
    },
  },

  {
    id: "2",
    title: "Quản lý kho (XTC)",
    description:
      "Hệ thống quản lý kho hàng cho xưởng sản xuất ví da, bao gồm quản lý đơn hàng, tồn kho và sản phẩm",
    tags: ["Client", "Không triển khai"],
    category: "client",
    detail: {
      overview:
        "XTC là hệ thống quản lý kho được xây dựng cho Xưởng Trường Chinh — một xưởng sản xuất ví da tại TP.HCM. Bài toán đặt ra là giúp xưởng thay thế quy trình quản lý thủ công bằng phần mềm, theo dõi được đơn hàng, tồn kho và sản phẩm. Mình tham gia với vai trò vừa thiết kế UI/UX vừa code frontend. Dự án hoàn thành nhưng client không tiếp tục triển khai; sau đó toàn bộ design và codebase được tái sử dụng làm nền tảng cho InvoiceAI.",

      responsibilities: [
        "Thiết kế UI/UX cho các màn hình chính: dashboard, đơn hàng, tồn kho, sản phẩm, khách hàng",
        "Tham khảo design patterns từ Sapo POS và adapt theo yêu cầu thực tế",
        "Phát triển frontend cho các modules trong hệ thống",
        "Đảm bảo tính nhất quán UI trong quá trình implement",
      ],

      contributions: [
        "Thiết kế wireframe và mockup trong Figma cho toàn bộ màn hình chính",
        "Xây dựng component library cơ bản để team implement nhất quán",
        "Code frontend cho các trang quản lý đơn hàng và sản phẩm",
        "Review và góp ý UI/UX trong quá trình phát triển",
      ],

      impact: [
        "Hoàn thành thiết kế và implement cho các màn hình chính",
        "Dự án không được triển khai do client thay đổi kế hoạch",
        "Codebase và design được kế thừa lại cho dự án InvoiceAI",
      ],

      technologies: ["Figma", "React", "TypeScript", "Ant Design"],

      teamSize:
        "8 (1 Lead/Backend, 1 UI/UX Designer, 3 Frontend Devs, 2 Backend Devs, 1 Tester)",
      myRole: "UI/UX Designer & Frontend Developer",

      challenges:
        "Lần đầu làm việc với client thực tế — vừa phải hiểu nghiệp vụ kho hàng, vừa cân bằng giữa tham khảo design có sẵn và customize theo đúng nhu cầu. Đồng thời xử lý cả thiết kế lẫn code trong cùng một dự án.",

      learnings: [
        "Cách tiếp cận và adapt design từ các sản phẩm có sẵn trên thị trường",
        "Quy trình làm việc thực tế từ design đến handoff và implement",
        "Tầm quan trọng của việc validate sớm với client",
        "Kinh nghiệm đầu tiên kết hợp vai trò designer và frontend developer",
      ],

      images: [
        {
          url: "projects/xtc-warehouse",
          alt: "XTC Warehouse System",
          caption: "Dashboard tổng quan và màn hình quản lý đơn hàng",
        },
      ],
    },
  },

  {
    id: "3",
    title: "Quản lý thư viện (Cao đẳng Viễn Đông)",
    description:
      "Số hóa hệ thống quản lý thư viện cho trường Cao đẳng Viễn Đông — dự án thực tế đầu tiên, hiện đang được sử dụng",
    tags: ["Client", "Đã hoàn thành"],
    category: "client",
    detail: {
      overview:
        "Thư viện Cao đẳng Viễn Đông đang vận hành hoàn toàn thủ công — mượn/trả sách bằng giấy tờ, không có hệ thống theo dõi. Giảng viên hướng dẫn đề xuất dự án số hóa và được hiệu trưởng phê duyệt. Mình là UI/UX designer chính, thiết kế toàn bộ giao diện desktop cho hai nhóm người dùng: sinh viên/giảng viên tra cứu và mượn sách, và thủ thư quản lý vận hành. Hệ thống hiện đang được triển khai và sử dụng thực tế tại thư viện.",

      responsibilities: [
        "Nghiên cứu quy trình mượn/trả sách thực tế tại thư viện",
        "Thiết kế user flow cho 2 nhóm: người dùng (sinh viên, giảng viên) và admin (thủ thư)",
        "Tạo wireframes và high-fidelity designs cho toàn bộ màn hình desktop",
        "Phối hợp với dev team trong suốt quá trình implement",
      ],

      contributions: [
        "Thiết kế portal tra cứu và mượn sách cho sinh viên/giảng viên",
        "Thiết kế dashboard admin cho thủ thư quản lý mượn/trả",
        "Xây dựng design system cơ bản đảm bảo tính nhất quán",
        "Thiết kế màn hình báo cáo thống kê cho ban quản lý",
      ],

      impact: [
        "Hệ thống được triển khai thực tế và đang hoạt động tại thư viện",
        "Thay thế hoàn toàn quy trình thủ công trước đây",
        "Lượng sử dụng còn hạn chế do thói quen mượn sách của sinh viên",
      ],

      technologies: ["Figma", "React", "Material-UI", "PostgreSQL"],

      teamSize:
        "5 (1 Designer, 2 Frontend Devs, 1 Backend Dev, 1 Librarian Lead)",
      myRole: "UI/UX Designer",

      challenges:
        "Thiết kế cho hai nhóm người dùng rất khác nhau: sinh viên quen công nghệ và thủ thư lớn tuổi ít tiếp xúc với phần mềm. Đây cũng là dự án thực tế đầu tiên nên còn nhiều bỡ ngỡ trong việc làm việc với stakeholder thật.",

      learnings: [
        "Trải nghiệm đầu tiên làm việc với client và stakeholder thực tế",
        "Cách thiết kế cho nhiều user persona với nhu cầu khác nhau",
        "Hiểu quy trình số hóa một nghiệp vụ truyền thống",
        "Làm việc trong dự án có áp lực thật — được duyệt bởi ban giám hiệu",
      ],

      images: [
        {
          url: "projects/library-system",
          alt: "Library Management System",
          caption: "Student portal và Admin dashboard",
        },
      ],
    },
  },

  {
    id: "4",
    title: "Khu13 Website",
    description:
      "Website giới thiệu cho quán bar Khu13 tại TP.HCM — dự án freelance thực tế đầu tiên được khách hàng chốt",
    tags: ["Freelance", "Tạm hoãn"],
    category: "client",
    detail: {
      overview:
        "Khu13 là một quán bar tại TP.HCM cần website để giới thiệu thương hiệu và không gian. Mình được anh khóa trên — người đang làm PM cho dự án — liên hệ để đảm nhận phần UI/UX. Đây là lần đầu mình tham gia dự án hoàn toàn từ bên ngoài, không qua giảng viên. Hiện tại đã hoàn thành wireframe, được khách hàng chốt và đang chờ nội dung từ phía quán để tiếp tục.",

      responsibilities: [
        "Nhận brief từ PM và xác định yêu cầu thiết kế",
        "Thiết kế wireframe cho toàn bộ website",
        "Present phương án thiết kế để PM trình với khách hàng",
      ],

      contributions: [
        "Hoàn thành wireframe được khách hàng approve",
        "Xác định cấu trúc nội dung và user flow phù hợp với quán bar",
      ],

      impact: [
        "Wireframe đã được khách hàng chốt và chấp thuận",
        "Dự án đang tiếp tục — chờ nội dung từ phía khách hàng",
      ],

      technologies: ["Figma"],

      teamSize: "2 (1 PM, 1 Designer)",
      myRole: "UI/UX Designer",

      challenges:
        "Lần đầu làm việc trong môi trường freelance thật — nhận brief qua PM và phải hiểu đúng yêu cầu khách hàng chỉ qua thông tin được tổng hợp lại, không trực tiếp trao đổi với client.",

      learnings: [
        "Quy trình làm việc freelance với PM làm cầu nối với khách hàng",
        "Cách đọc và khai thác brief để ra quyết định thiết kế",
        "Cách thuyết phục quyết định design khi không trực tiếp gặp client",
      ],

      images: [
        {
          url: "projects/khu13-feed",
          alt: "Khu13 Website",
          caption: "Wireframe website quán bar Khu13",
        },
      ],
    },
  },

  {
    id: "5",
    title: "Tuấn Phạm Audio Website",
    description:
      "Website giới thiệu sản phẩm thiết bị âm thanh cao cấp — thiết kế với AI-assisted workflow",
    tags: ["Client", "Đang phát triển"],
    category: "client",
    detail: {
      overview:
        "Tuấn Phạm Audio là đại lý thiết bị âm thanh cao cấp tại TP.HCM, chuyên các dòng loa và ampli premium. Website cần thể hiện đúng định vị thương hiệu và giúp khách hàng tìm hiểu sản phẩm trước khi liên hệ đặt hàng — không phải mua trực tiếp. Mình đảm nhận phần thiết kế: định nghĩa layout, màu sắc và component system cho trang chủ, sau đó dùng Figma Make để generate các trang còn lại.",

      responsibilities: [
        "Xác định visual direction phù hợp với định vị thương hiệu cao cấp",
        "Thiết kế layout trang chủ và định nghĩa component system",
        "Dùng Figma Make để mở rộng design cho các trang còn lại",
        "Review và điều chỉnh output AI để đảm bảo nhất quán",
      ],

      contributions: [
        "Thiết kế layout trang chủ, màu chủ đạo và các component chi tiết",
        "Sử dụng Figma Make để generate design cho các trang sản phẩm và liên hệ",
        "Review và tinh chỉnh output của AI theo đúng direction ban đầu",
        "Thiết kế flow xem chi tiết sản phẩm và liên hệ đặt hàng",
      ],

      impact: [
        "Website được bàn giao và đưa vào sử dụng",
        "Giao diện phản ánh đúng định vị cao cấp của thương hiệu",
      ],

      technologies: ["Figma", "Figma Make", "Next.js", "Tailwind CSS"],

      teamSize: "3 (1 Designer, 2 Developers)",
      myRole: "UI/UX Designer (AI-assisted workflow)",

      challenges:
        "Kiểm soát chất lượng output của AI — Figma Make không phải lúc nào cũng hiểu đúng intent thiết kế, cần review kỹ và điều chỉnh để đảm bảo nhất quán với direction ban đầu.",

      learnings: [
        "Workflow kết hợp AI vào quy trình thiết kế thực tế",
        "Tầm quan trọng của việc định nghĩa rõ direction trước khi dùng AI",
        "Cách thiết kế cho sản phẩm premium với yêu cầu visual cao",
        "UX cho mô hình giới thiệu sản phẩm kết hợp liên hệ đặt hàng",
      ],

      images: [
        {
          url: "projects/tuanpham-audio",
          alt: "Tuấn Phạm Audio",
          caption: "Website giới thiệu sản phẩm âm thanh cao cấp",
        },
      ],
    },
  },

  {
    id: "6",
    title: "Hệ thống Parcel Locker (Smart Box)",
    description:
      "Thiết kế UI/UX cho hệ thống admin quản lý tủ giao hàng thông minh tại các chung cư",
    tags: ["IoT", "Không triển khai"],
    category: "startup",
    detail: {
      overview:
        "Smart Box là ý tưởng startup xây dựng hệ thống tủ giao hàng thông minh tại các chung cư — lấy cảm hứng từ mô hình parcel locker phổ biến tại Trung Quốc, giải quyết bài toán giao hàng thất bại khi người nhận không có nhà. Mình tham gia thiết kế admin dashboard trên desktop, phục vụ nhóm quản lý vận hành hệ thống tủ. Dự án tạm hoãn do chưa tìm được nhà đầu tư.",

      responsibilities: [
        "Nghiên cứu mô hình parcel locker và các hệ thống tương tự",
        "Thiết kế admin dashboard cho desktop",
        "Xây dựng user flow cho các nghiệp vụ quản lý tủ và giao dịch",
        "Phối hợp với team để đảm bảo thiết kế phù hợp với hướng phát triển sản phẩm",
      ],

      contributions: [
        "Thiết kế dashboard quản lý tủ locker và trạng thái ô tủ",
        "Xây dựng màn hình theo dõi và quản lý giao dịch",
        "Thiết kế giao diện quản lý người dùng và phân quyền",
        "Tạo wireframes và mockups cho các màn hình admin chính",
      ],

      impact: [
        "Hoàn thành design cho các màn hình admin chính",
        "Dự án tạm hoãn ở giai đoạn thiết kế do chưa có đầu tư",
      ],

      technologies: ["Figma"],

      teamSize: "8 thành viên",
      myRole: "UI/UX Designer",

      challenges:
        "Lần đầu thiết kế cho hệ thống IoT — cần hiểu nghiệp vụ vận hành thực tế trước khi thiết kế. Khó khăn khi làm việc trong môi trường startup chưa có product rõ ràng, yêu cầu thay đổi liên tục.",

      learnings: [
        "Tiếp cận thiết kế cho hệ thống IoT và vận hành thực địa",
        "Cách research domain mới khi chưa có kinh nghiệm thực tế",
        "Trải nghiệm làm việc trong startup giai đoạn pre-investment",
      ],

      images: [
        {
          url: "projects/smartbox-system",
          alt: "Smart Box System",
          caption: "Admin dashboard quản lý hệ thống tủ locker",
        },
      ],
    },
  },
];
