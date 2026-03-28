import { Project } from "@/types";

export const projectsVI: Project[] = [
  // {
  //   id: "1",
  //   title: "Hệ thống SaaS quản lý kho (InvoiceAI)",
  //   description:
  //     "Hệ thống quản lý kho tích hợp hóa đơn điện tử, phát triển từ dự án thực tế XTC, đang có người dùng sử dụng",
  //   tags: ["SaaS", "Đã triển khai"],
  //   category: "startup",
  //   detail: {
  //     overview:
  //       "InvoiceAI là hệ thống SaaS quản lý kho tích hợp hóa đơn điện tử, nhắm đến các doanh nghiệp SME tại Việt Nam. Dự án được pivot từ hệ thống XTC — phần mềm quản lý kho cho xưởng sản xuất mà mình từng tham gia xây dựng trước đó. Khi client không tiếp tục, giảng viên hướng dẫn quyết định mở rộng sản phẩm, thêm nghiệp vụ hóa đơn điện tử theo nghị định mới của Việt Nam và chuyển sang mô hình SaaS. Mình đảm nhận toàn bộ mảng UI — từ thiết kế trong Figma đến implement frontend.",

  //     responsibilities: [
  //       "Lead UI/UX cho toàn bộ dự án: từ thiết kế đến review implementation",
  //       "Redesign lại hệ thống cũ (XTC) sang giao diện SaaS mới",
  //       "Tham gia phát triển frontend song song với thiết kế",
  //       "Research các giải pháp hóa đơn điện tử trên thị trường để định hướng UX",
  //       "Phối hợp chặt với backend để đảm bảo thiết kế khả thi",
  //     ],

  //     contributions: [
  //       "Redesign UI từ hệ thống XTC cũ, kế thừa những gì hoạt động tốt",
  //       "Redesign trang tạo đơn hàng — chia lại layout theo block rõ ràng (header, filter, table) để cải thiện khả năng đọc và thao tác",
  //       "Dùng v0.dev để khám phá hướng UI cho các màn hình chính, sau đó tự implement lại bằng code",
  //       "Thiết kế các module chính: dashboard, quản lý kho, hóa đơn điện tử, báo cáo",
  //     ],

  //     impact: [
  //       "Hệ thống đang chạy thực tế và có người dùng sử dụng",
  //       "Hoàn thành design và implement cho 20+ màn hình chính",
  //       "UI mới nhận phản hồi tốt hơn rõ rệt so với phiên bản XTC cũ",
  //     ],

  //     technologies: ["Figma", "React", "TypeScript", "Ant Design"],

  //     teamSize:
  //       "6 (1 Lead/Backend, 1 UI/UX Designer, 2 Frontend Devs, 1 Backend Dev, 1 Tester)",
  //     myRole: "UI/UX Designer & Frontend Developer",

  //     challenges:
  //       "Redesign một hệ thống đang chạy trong khi vẫn phải đảm bảo tiến độ phát triển. Nghiệp vụ hóa đơn điện tử khá phức tạp và đặc thù với quy định Việt Nam — cần thời gian để hiểu đủ sâu trước khi thiết kế. Cân bằng giữa vai trò designer và frontend dev trong cùng một dự án.",

  //     learnings: [
  //       "Hiểu thực tế về domain hóa đơn điện tử và nghiệp vụ kho hàng",
  //       "Cách tích hợp AI tool (v0.dev) vào quy trình redesign thực tế",
  //       "Giá trị của việc phân chia layout — chia block rõ ràng cải thiện đáng kể khả năng sử dụng",
  //       "Làm quen với việc vừa design vừa code trong môi trường startup",
  //       "Xử lý yêu cầu thay đổi liên tục khi sản phẩm đang pivot",
  //     ],

  //     images: [
  //       {
  //         url: "projects/invoiceai-dashboard",
  //         alt: "InvoiceAI Dashboard",
  //         caption: "Dashboard redesign và Quản lý hóa đơn điện tử",
  //       },
  //     ],
  //   },
  // },

  {
    id: "1",
    title: "Quản lý kho (XTC)",
    thumbnail: "projects/xtc-thumb",
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
    id: "2",
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
          url: "projects/library-system1",
          alt: "Library Management System",
          caption: "Student portal và Admin dashboard",
        },
        {
          url: "projects/library-system2",
          alt: "Library Management System",
          caption: "Student portal và Admin dashboard",
        },
        {
          url: "projects/library-system3",
          alt: "Library Management System",
          caption: "Student portal và Admin dashboard",
        },
        {
          url: "projects/library-system4",
          alt: "Library Management System",
          caption: "Student portal và Admin dashboard",
        },
        {
          url: "projects/library-system5",
          alt: "Library Management System",
          caption: "Student portal và Admin dashboard",
        },
        {
          url: "marquee/ui-4",
          alt: "Library Management System",
          caption: "Student portal và Admin dashboard",
        },
      ],
    },
  },

  // {
  //   id: "3",
  //   title: "Khu13 Website",
  //   description:
  //     "Website giới thiệu cho quán bar Khu13 tại TP.HCM — dự án freelance thực tế đầu tiên được khách hàng chốt",
  //   tags: ["Freelance", "Tạm hoãn"],
  //   category: "client",
  //   detail: {
  //     overview:
  //       "Khu13 là một quán bar tại TP.HCM cần website để giới thiệu thương hiệu và không gian. Mình được anh khóa trên — người đang làm PM cho dự án — liên hệ để đảm nhận phần UI/UX. Đây là lần đầu mình tham gia dự án hoàn toàn từ bên ngoài, không qua giảng viên. Hiện tại đã hoàn thành wireframe, được khách hàng chốt và đang chờ nội dung từ phía quán để tiếp tục.",

  //     responsibilities: [
  //       "Nhận brief từ PM và xác định yêu cầu thiết kế",
  //       "Thiết kế wireframe cho toàn bộ website",
  //       "Present phương án thiết kế để PM trình với khách hàng",
  //     ],

  //     contributions: [
  //       "Hoàn thành wireframe được khách hàng approve",
  //       "Xác định cấu trúc nội dung và user flow phù hợp với quán bar",
  //     ],

  //     impact: [
  //       "Wireframe đã được khách hàng chốt và chấp thuận",
  //       "Dự án đang tiếp tục — chờ nội dung từ phía khách hàng",
  //     ],

  //     technologies: ["Figma"],

  //     teamSize: "2 (1 PM, 1 Designer)",
  //     myRole: "UI/UX Designer",

  //     challenges:
  //       "Lần đầu làm việc trong môi trường freelance thật — nhận brief qua PM và phải hiểu đúng yêu cầu khách hàng chỉ qua thông tin được tổng hợp lại, không trực tiếp trao đổi với client.",

  //     learnings: [
  //       "Quy trình làm việc freelance với PM làm cầu nối với khách hàng",
  //       "Cách đọc và khai thác brief để ra quyết định thiết kế",
  //       "Cách thuyết phục quyết định design khi không trực tiếp gặp client",
  //     ],

  //     images: [
  //       {
  //         url: "projects/khu13-feed",
  //         alt: "Khu13 Website",
  //         caption: "Wireframe website quán bar Khu13",
  //       },
  //     ],
  //   },
  // },

  {
    id: "4",
    title: "SmartBox — Hệ thống tủ khóa thông minh",
    thumbnail: "projects/smartbox-thumb",
    description:
      "Hệ thống tủ khóa giao hàng thông minh cho chung cư — shipper bỏ hàng vào tủ, người nhận lấy bằng mã QR. Không cần chờ, không còn giao hàng thất bại.",
    tags: ["Startup", "Tạm hoãn"],
    category: "startup",
    detail: {
      overview:
        "SmartBox là startup xây dựng hệ thống tủ khóa giao hàng tại các chung cư Việt Nam, lấy cảm hứng từ mô hình locker phổ biến ở Trung Quốc — giải quyết bài toán giao hàng thất bại khi người nhận không có nhà. Thay vì shipper phải gọi điện và chờ khách ra lấy, họ chỉ cần bỏ hàng vào đúng ô tủ được chỉ định rồi đi. Người nhận nhận mã QR và ra lấy bất cứ lúc nào tiện. Em đảm nhận toàn bộ UI/UX cho 4 nền tảng: web quản lý cho chủ chung cư và admin, app di động cho shipper và người nhận hàng. Dự án tạm hoãn vô thời hạn sau khi team không tìm được nhà đầu tư.",

      responsibilities: [
        "Lead UI/UX cho toàn bộ sản phẩm: web admin dashboard và mobile app (luồng shipper + người nhận)",
        "Xây dựng user flow cho 3 nhóm người dùng khác nhau: quản trị chung cư, shipper, và người nhận",
        "Thiết kế dashboard quản lý tủ khóa cho chủ chung cư và admin hệ thống",
        "Thiết kế trải nghiệm mobile cho shipper gán tủ và người nhận lấy hàng bằng mã QR",
        "Phối hợp trong team 9 người gồm cả design và development",
      ],

      contributions: [
        "Thiết kế toàn bộ web admin dashboard: trạng thái tủ, quản lý thuê tủ, lịch sử giao dịch, thiết lập giá, quản lý khách hàng",
        "Thiết kế luồng mobile cho shipper: gán tủ, xác nhận bỏ hàng",
        "Thiết kế luồng mobile cho người nhận: lấy hàng bằng QR, lịch sử thuê, trạng thái tủ thời gian thực",
        "Xây dựng design system nhất quán dùng chung cho cả web và mobile",
      ],

      impact: [
        "Hoàn thành UI/UX cho toàn bộ màn hình chính trên cả web và mobile",
        "Dự án dừng ở giai đoạn thiết kế do không tìm được nhà đầu tư",
        "Bộ thiết kế trở thành blueprint sản phẩm hoàn chỉnh cho hướng phát triển sau này",
      ],

      technologies: ["Figma"],

      teamSize: "9 thành viên (Product, Design, Frontend, Backend, Business)",
      myRole: "UI/UX Designer — Toàn bộ nền tảng",

      challenges:
        "Thiết kế cho 3 nhóm người dùng hoàn toàn khác nhau trong cùng một hệ sinh thái sản phẩm — mỗi nhóm có mental model, ngữ cảnh và thiết bị khác nhau. Admin dashboard cần xử lý trạng thái tủ phức tạp, trong khi luồng mobile phải đủ nhanh và trực quan cho shipper đang bận rộn.",

      learnings: [
        "Cách thiết kế sản phẩm đa nền tảng với logic nhất quán nhưng interaction pattern khác nhau",
        "Tư duy về quản lý trạng thái tủ như một bài toán UI — trống, đang thuê, quá hạn, bị khóa",
        "Làm việc trong môi trường startup thật — không có tiền lệ, không có user để test",
        "Làm việc trong team lớn hơn, nơi quyết định thiết kế ảnh hưởng trực tiếp đến scope phát triển",
      ],
    },
  },
  {
    id: "5",
    title: "Website Tuấn Phạm Audio",
    thumbnail: "projects/tuanpham-thumb",
    description:
      "Website giới thiệu sản phẩm thiết bị âm thanh cao cấp — thiết kế với AI-assisted workflow",
    tags: ["Client", "Đã bàn giao"],
    category: "client",
    detail: {
      overview:
        "Tuấn Phạm Audio là đại lý thiết bị âm thanh cao cấp tại TP.HCM, chuyên các dòng loa và ampli premium. Website cần thể hiện đúng định vị thương hiệu và giúp khách hàng tìm hiểu sản phẩm trước khi liên hệ đặt hàng — không phải mua trực tiếp. Em đảm nhận phần thiết kế: định nghĩa layout, màu sắc và component system cho trang chủ, sau đó dùng Figma Make để generate các trang còn lại.",

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

      teamSize: "4 (1 Designer, 2 Developer, 1 Content Creator)",
      myRole: "UI/UX Designer (AI-assisted workflow)",

      challenges:
        "Kiểm soát chất lượng output của AI — Figma Make không phải lúc nào cũng hiểu đúng intent thiết kế, cần review kỹ và điều chỉnh để đảm bảo nhất quán với direction ban đầu.",

      learnings: [
        "Workflow kết hợp AI vào quy trình thiết kế thực tế",
        "Tầm quan trọng của việc định nghĩa rõ direction trước khi dùng AI",
        "Cách thiết kế cho sản phẩm premium với yêu cầu visual cao",
        "UX cho mô hình giới thiệu sản phẩm kết hợp liên hệ đặt hàng",
      ],

      figmaUrl:
        "https://www.figma.com/make/FunfLSANRaqEVqLlfCn744/E-commerce-Website-Structure?fullscreen=1&t=e2PxgBjaP2JdYZOD-1",

      images: [
        {
          url: "projects/tuanpham-audio",
          alt: "Tuấn Phạm Audio",
          caption: "Website giới thiệu sản phẩm âm thanh cao cấp",
        },
      ],
    },
  },
];
