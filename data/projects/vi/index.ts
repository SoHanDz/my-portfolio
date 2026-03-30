import { Project } from "@/types";

export const projectsVI: Project[] = [
  {
    id: "1",
    title: "Hệ thống Quản lý kho (XTC)",
    thumbnail: "projects/xtc-thumb",
    description:
      "Hệ thống quản lý kho cho xưởng sản xuất đồ da, bao gồm quản lý đơn hàng, tồn kho và sản phẩm.",
    tags: ["Dự án Khách hàng", "Redesign", "3 Giai đoạn"],
    category: "client",
    detail: {
      overview:
        "XTC là hệ thống quản lý kho được xây dựng cho Xưởng Trường Chinh — một đơn vị sản xuất ví da tại TP.HCM. Mục tiêu là thay thế quy trình quản lý thủ công bằng phần mềm để theo dõi đơn hàng và tồn kho chính xác hơn. Em tham gia với vai trò vừa thiết kế UI/UX vừa lập trình frontend. Dù khách hàng không tiếp tục triển khai, toàn bộ thiết kế và mã nguồn này đã trở thành nền tảng quan trọng để phát triển sản phẩm SaaS InvoiceAI sau này.",
      responsibilities: [
        "Thiết kế UI/UX cho các màn hình cốt lõi: dashboard, đơn hàng, tồn kho, sản phẩm",
        "Tham khảo các mẫu thiết kế từ Sapo POS và tùy chỉnh theo nhu cầu thực tế của xưởng",
        "Trực tiếp lập trình Frontend cho các module trong hệ thống",
        "Đảm bảo tính nhất quán của giao diện trong suốt quá trình phát triển",
      ],
      contributions: [
        "Xây dựng wireframe và mockup hoàn chỉnh trên Figma cho các màn hình chính",
        "Thiết kế bộ thư viện component cơ bản để đội ngũ phát triển sử dụng đồng bộ",
        "Lập trình giao diện cho các trang quản lý đơn hàng và danh mục sản phẩm",
        "Kiểm duyệt và tối ưu trải nghiệm người dùng (UX) trong giai đoạn thực thi",
      ],
      impact: [
        "Hoàn thành trọn vẹn thiết kế và lập trình cho hơn 15 màn hình chính",
        "Tạo ra bộ khung thiết kế chuẩn mực, được kế thừa hoàn toàn cho dự án InvoiceAI",
        "Giúp đội ngũ kỹ thuật có quy trình làm việc chuyên nghiệp từ thiết kế đến code",
      ],
      technologies: ["Figma", "React", "TypeScript", "Ant Design"],
      teamSize: "9 thành viên (1 Lead, 1 UI/UX, 3 Frontend, 2 Backend, 1 Tester)",
      myRole: "Lead UI/UX Designer & Frontend Developer",
      challenges:
        "Đây là lần đầu em làm việc với khách hàng thực tế, đòi hỏi việc vừa phải hiểu sâu nghiệp vụ kho vận phức tạp, vừa phải cân bằng giữa việc tham khảo các mẫu có sẵn và tùy biến theo đặc thù riêng của xưởng.",
      learnings: [
        "Cách phân tích và áp dụng các mẫu thiết kế thành công vào sản phẩm thực tế",
        "Quy trình phối hợp nhịp nhàng từ khâu ý tưởng đến bàn giao thiết kế (handoff)",
        "Tầm quan trọng của việc xác nhận yêu cầu (validate) sớm với khách hàng",
        "Kinh nghiệm quý báu khi đảm nhận song song hai vai trò Designer và Developer",
      ],
      figmaUrl:
        "https://www.figma.com/design/svUoZBkgXBlCkiuOlVqOLo/XTC?node-id=429-8248&t=iLoBuDmYsxI6bZZe-1",
      images: [
        {
          url: "marquee/ui-1",
          alt: "XTC Warehouse System",
          caption: "Dashboard tổng quan và quản lý đơn hàng",
        },
        {
          url: "projects/xtc-warehouse2",
          alt: "XTC Warehouse System",
          caption: "Chi tiết phiếu nhập hàng",
        },
        {
          url: "projects/xtc-warehouse3",
          alt: "XTC Warehouse System",
          caption: "Giao diện tạo phiếu xuất hàng",
        },
        {
          url: "projects/xtc-warehouse4",
          alt: "XTC Warehouse System",
          caption: "Danh sách quản lý nhân viên",
        },
        {
          url: "projects/xtc-warehouse5",
          alt: "XTC Warehouse System",
          caption: "Thiết lập phân quyền chi tiết cho nhân viên",
        },
        {
          url: "projects/xtc-warehouse6",
          alt: "XTC Warehouse System",
          caption: "Giao diện tạo phiếu nhập hàng mới",
        },
      ],
    },
  },

  {
    id: "2",
    title: "Quản lý thư viện (Cao đẳng Viễn Đông)",
    thumbnail: "projects/library-thumb",
    description:
      "Số hóa hệ thống quản lý thư viện cho trường Cao đẳng Viễn Đông. Đây là dự án thực tế đầu tiên và hiện đang được đưa vào sử dụng.",
    tags: ["Dự án Khách hàng", "Đã hoàn thành"],
    category: "client",
    detail: {
      overview:
        "Thư viện Cao đẳng Viễn Đông trước đây vận hành hoàn toàn thủ công bằng giấy tờ. Em đảm nhận vai trò Designer chính để thiết kế hệ thống số hóa, phục vụ hai nhóm đối tượng: sinh viên/giảng viên (tra cứu, mượn sách) và thủ thư (quản lý vận hành). Hệ thống đã được nhà trường phê duyệt và hiện đang hoạt động thực tế tại thư viện.",
      responsibilities: [
        "Nghiên cứu thực địa quy trình mượn/trả sách trực tiếp tại thư viện",
        "Xây dựng luồng người dùng (User Flow) cho cả sinh viên và quản trị viên",
        "Thiết kế giao diện chi tiết (High-fidelity) cho toàn bộ hệ thống trên Desktop",
        "Hỗ trợ đội ngũ lập trình đảm bảo giao diện thực tế đúng với thiết kế",
      ],
      contributions: [
        "Thiết kế cổng thông tin tra cứu sách hiện đại cho sinh viên và giảng viên",
        "Xây dựng bảng điều khiển (Dashboard) tối ưu cho thủ thư quản lý mượn/trả",
        "Thiết kế hệ thống báo cáo thống kê trực quan cho ban giám hiệu",
        "Thiết kế bộ quy chuẩn giao diện (Design System) cơ bản cho dự án",
      ],
      impact: [
        "Hệ thống đã được triển khai thực tế và thay thế hoàn toàn quy trình giấy tờ",
        "Giúp việc quản lý sách trở nên khoa học, chính xác và nhanh chóng hơn",
        "Dự án đạt được sự tin tưởng và phê duyệt từ ban giám hiệu nhà trường",
      ],
      technologies: ["Figma", "React", "Material-UI", "PostgreSQL"],
      teamSize: "5 thành viên (1 Designer, 2 Frontend, 1 Backend, 1 Librarian)",
      myRole: "UI/UX Designer",
      challenges:
        "Phải thiết kế giao diện phù hợp cho hai đối tượng đối lập: sinh viên trẻ yêu thích sự hiện đại và các thủ thư lớn tuổi cần sự đơn giản, rõ ràng, dễ thao tác.",
      learnings: [
        "Kỹ năng làm việc với các bên liên quan (stakeholders) trong một dự án thực tế",
        "Cách thiết kế đa dạng hóa theo từng đặc điểm người dùng (User Persona)",
        "Tư duy chuyển đổi từ quy trình thủ công sang quy trình số hóa",
      ],
      figmaUrl:
        "https://www.figma.com/design/ZBiYMRQm34xQjg0kN516kk/VD-Library?node-id=0-1&t=SoJ71L0kNNZJIBDB-1",
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

  {
    id: "4",
    title: "SmartBox — Tủ khóa thông minh",
    thumbnail: "projects/smartbox-thumb",
    description:
      "Giải pháp tủ khóa giao hàng thông minh cho chung cư, giúp shipper và người nhận chủ động hơn trong việc giao nhận hàng hóa.",
    tags: ["Startup", "Đa nền tảng"],
    category: "startup",
    detail: {
      overview:
        "SmartBox là một dự án khởi nghiệp nhằm giải quyết vấn đề giao hàng thất bại tại các chung cư. Em đảm nhiệm thiết kế toàn bộ hệ sinh thái sản phẩm trên 4 nền tảng: Ứng dụng di động (cho Shipper & Người nhận) và Hệ thống quản lý Web (cho Admin & Chủ chung cư). Dự án hiện đang tạm dừng ở giai đoạn hoàn thiện thiết kế.",
      responsibilities: [
        "Lead UI/UX cho toàn bộ hệ sinh thái: Web Admin và Mobile App",
        "Xây dựng luồng vận hành phức tạp giữa 3 bên: Shipper - Người nhận - Quản trị viên",
        "Thiết kế trải nghiệm nhận diện mã QR và quản lý trạng thái tủ thời gian thực",
        "Đảm bảo sự đồng bộ về trải nghiệm trên cả môi trường Web và Di động",
      ],
      contributions: [
        "Thiết kế Web Admin: quản lý trạng thái tủ, lịch sử giao dịch và cấu hình giá thuê",
        "Thiết kế App Shipper: tối ưu hóa quy trình gán đơn hàng và mở tủ nhanh",
        "Thiết kế App Người nhận: nhận thông báo, quét mã QR lấy hàng và quản lý đơn",
        "Xây dựng Design System dùng chung cho toàn bộ các nền tảng của SmartBox",
      ],
      impact: [
        "Hoàn thành bộ blueprint thiết kế hoàn chỉnh cho một sản phẩm công nghệ đa nền tảng",
        "Tối ưu hóa quy trình giao nhận từ 10 phút xuống còn chưa đầy 2 phút trong kịch bản giả định",
        "Bộ thiết kế được đánh giá cao về tính khả thi và thẩm mỹ chuyên nghiệp",
      ],
      technologies: ["Figma", "Mobile App Design", "Admin Dashboard"],
      teamSize: "9 thành viên (Product, Design, Frontend, Backend, Business)",
      myRole: "Lead UI/UX Designer",
      challenges:
        "Thiết kế cho 3 nhóm người dùng có ngữ cảnh sử dụng khác nhau: Admin cần xử lý dữ liệu lớn, trong khi Shipper cần thao tác cực nhanh khi đang di chuyển ngoài trời.",
      learnings: [
        "Tư duy thiết kế sản phẩm đa nền tảng với logic thống nhất",
        "Cách quản lý và hiển thị trạng thái thiết bị phần cứng (tủ khóa) trên giao diện phần mềm",
        "Làm việc trong môi trường Startup đòi hỏi sự linh hoạt và tốc độ",
      ],
      images: [
        {
          url: "projects/smb-1",
          alt: "SmartBox System",
          caption: "Admin dashboard — trạng thái tủ và tổng quan hệ thống",
        },
        {
          url: "projects/smb-2",
          alt: "SmartBox System",
          caption: "Quản lý cho thuê và lịch sử giao dịch",
        },
        {
          url: "projects/smb-3",
          alt: "SmartBox System",
          caption: "App Shipper — luồng gán tủ và xác nhận giao hàng",
        },
        {
          url: "projects/smb-4",
          alt: "SmartBox System",
          caption: "App Người nhận — nhận hàng bằng mã QR",
        },
        {
          url: "projects/smb-5",
          alt: "SmartBox System",
          caption: "Cấu hình giá thuê và quản lý khách hàng",
        },
      ],
    },
  },

  // ─── UPDATED: Tuan Pham — "Đã hoàn thành" → "Đang phát triển" ────────────
  {
    id: "5",
    title: "Website Tuấn Phạm Audio",
    thumbnail: "projects/tuanpham-thumb",
    description:
      "Website trưng bày thiết bị âm thanh cao cấp, được thực hiện với quy trình thiết kế tối ưu hóa bằng AI. Thiết kế hoàn thiện, team dev đang triển khai.",
    tags: ["Dự án Khách hàng", "AI-Assisted", "Đang phát triển"],
    category: "client",
    detail: {
      overview:
        "Tuấn Phạm Audio là đơn vị kinh doanh thiết bị âm thanh Premium tại TP.HCM. Website được thiết kế để nâng tầm thương hiệu và hỗ trợ khách hàng tìm hiểu sản phẩm chuyên sâu. Em đã áp dụng quy trình làm việc mới: tự tay thiết kế các trang cốt lõi và hệ thống component, sau đó sử dụng công cụ AI (Figma Make) để hỗ trợ mở rộng các trang phụ. Thiết kế đã hoàn thiện và bàn giao — team dev đang tiến hành xây dựng.",
      responsibilities: [
        "Định hướng phong cách hình ảnh (Visual Direction) sang trọng, đẳng cấp",
        "Thiết kế bố cục trang chủ và xây dựng hệ thống Component chuẩn",
        "Ứng dụng AI để tối ưu hóa thời gian thiết kế các trang thứ cấp",
        "Kiểm soát và tinh chỉnh sản phẩm cuối cùng để đảm bảo độ chỉn chu cao nhất",
      ],
      contributions: [
        "Xây dựng giao diện trang chủ với phong cách tối giản nhưng tinh tế",
        "Tích hợp quy trình AI-assisted vào thiết kế để tăng hiệu suất công việc",
        "Thiết kế luồng trải nghiệm từ xem sản phẩm đến liên hệ tư vấn trực tiếp",
        "Tối ưu hóa hiển thị trên các thiết bị di động cho phân khúc khách hàng cao cấp",
      ],
      impact: [
        "Thiết kế hoàn thiện và đã bàn giao cho team phát triển",
        "Team dev đang triển khai — dự án đang trong giai đoạn xây dựng",
        "Giao diện thể hiện đúng tinh thần sản phẩm cao cấp, giúp tăng uy tín thương hiệu",
      ],
      technologies: ["Figma", "Figma Make", "Next.js", "Tailwind CSS"],
      teamSize: "4 thành viên (1 Designer, 2 Developers, 1 Content)",
      myRole: "UI/UX Designer (AI-assisted Workflow)",
      challenges:
        "Việc kiểm soát chất lượng từ AI đòi hỏi sự khắt khe; em phải liên tục điều chỉnh các kết quả do AI tạo ra để đảm bảo chúng không bị lệch khỏi định hướng thương hiệu ban đầu.",
      learnings: [
        "Cách tích hợp công cụ AI vào quy trình thiết kế chuyên nghiệp",
        "Kỹ năng tư duy thiết kế cho phân khúc khách hàng cao cấp (Luxury Retail)",
        "Tầm quan trọng của việc chuẩn bị 'nguyên liệu' thiết kế tốt trước khi dùng AI",
      ],
      figmaUrl:
        "https://www.figma.com/make/FunfLSANRaqEVqLlfCn744/E-commerce-Website-Structure?fullscreen=1&t=e2PxgBjaP2JdYZOD-1",
    },
  },

  // ─── NEW: Poster Marketing 990TOEIC ───────────────────────────────────────
  {
    id: "6",
    title: "990TOEIC — Poster Marketing",
    thumbnail: "projects/990toeic-poster-thumb",
    description:
      "Thiết kế ấn phẩm marketing 2D trong thời gian thực tập tại VNMentors — poster quảng bá cho 990TOEIC, ứng dụng luyện thi TOEIC.",
    tags: ["Thực tập", "Thiết kế đồ họa"],
    category: "internship",
    detail: {
      overview:
        "Trong thời gian thực tập tại VNMentors (10/2025 – 01/2026), em thiết kế series poster marketing 2D cho 990TOEIC — ứng dụng web luyện thi TOEIC. Công việc bao gồm banner mạng xã hội, chiến dịch quảng bá và visual ra mắt khóa học. Mỗi ấn phẩm phải cân bằng giữa nhận diện thương hiệu và thông điệp truyền thông rõ ràng đến đúng đối tượng mục tiêu.",
      responsibilities: [
        "Thiết kế ấn phẩm marketing 2D cho mạng xã hội và các chiến dịch digital",
        "Duy trì brand consistency xuyên suốt các định dạng và kích thước poster khác nhau",
        "Chỉnh sửa theo phản hồi của team marketing trong từng chiến dịch",
      ],
      contributions: [
        "Bộ poster marketing hoàn thiện được sử dụng trong các chiến dịch thực tế",
        "Visual identity nhất quán trên toàn bộ tài liệu quảng bá 990TOEIC",
      ],
      impact: [
        "Ấn phẩm được sử dụng trong các chiến dịch marketing đang chạy thực tế",
        "Hỗ trợ độ nhận diện thương hiệu 990TOEIC trên các nền tảng mạng xã hội",
      ],
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
      teamSize: "Team core tại VNMentors",
      myRole: "Graphic Designer",
      challenges:
        "Thiết kế ấn phẩm đủ thu hút để dừng scroll của người dùng trong khi vẫn phải bám sát brand guidelines — đòi hỏi sự cân bằng giữa sáng tạo và tuân thủ hệ thống nhận diện.",
      learnings: [
        "Quy trình sản xuất ấn phẩm marketing trong môi trường công ty thực tế",
        "Thiết kế trong khuôn khổ một hệ thống thương hiệu đã được định hình sẵn",
        "Khả năng iterate nhanh dựa trên phản hồi của team trong deadline ngắn",
      ],
      images: [
        {
          url: "projects/990toeic-poster-1",
          alt: "990TOEIC Marketing Poster",
          caption: "Poster quảng bá trên mạng xã hội",
        },
        {
          url: "projects/990toeic-poster-2",
          alt: "990TOEIC Marketing Poster",
          caption: "Visual ra mắt khóa học",
        },
        {
          url: "projects/990toeic-poster-3",
          alt: "990TOEIC Marketing Poster",
          caption: "Banner chiến dịch quảng bá",
        },
        {
          url: "projects/990toeic-poster-4",
          alt: "990TOEIC Marketing Poster",
          caption: "Poster quảng bá trên mạng xã hội",
        },
        {
          url: "projects/990toeic-poster-5",
          alt: "990TOEIC Marketing Poster",
          caption: "Visual chiến dịch",
        },
        {
          url: "projects/990toeic-poster-6",
          alt: "990TOEIC Marketing Poster",
          caption: "Banner chiến dịch quảng bá",
        },
      ],
    },
  },

  // ─── NEW: Logo 990TOEIC ───────────────────────────────────────────────────
  {
    id: "7",
    title: "990TOEIC — Thiết kế Logo",
    thumbnail: "projects/990toeic-logo-thumb",
    description:
      "Thiết kế nhận diện thương hiệu cho 990TOEIC — ứng dụng luyện thi TOEIC của VNMentors. Thực hiện trong thời gian thực tập, phục vụ mục đích làm mới bộ nhận diện.",
    tags: ["Thực tập", "Thiết kế Logo", "Brand Identity"],
    category: "internship",
    detail: {
      overview:
        "Thiết kế logo và nhận diện thương hiệu cho 990TOEIC, ứng dụng luyện thi TOEIC của VNMentors. Thiết kế hướng đến phong cách mạnh mẽ, học thuật và dễ nhận diện — sử dụng logo hình tròn kết hợp hình ảnh mũ tốt nghiệp tích hợp vào kiểu chữ số. Thực hiện trong khuôn khổ chiến dịch làm mới bộ nhận diện thương hiệu khi em đang thực tập.",
      responsibilities: [
        "Phát triển concept logo và định hướng visual",
        "Tạo các biến thể logo: full lockup, icon-only, phiên bản sáng và tối",
        "Đảm bảo brand consistency trong hệ sinh thái thương hiệu VNMentors",
      ],
      contributions: [
        "Bàn giao logo chính thức và brand mark hoàn chỉnh",
        "Asset package đầy đủ cho cả digital lẫn print",
      ],
      impact: [
        "Logo được áp dụng làm brand mark chính thức của 990TOEIC",
        "Được sử dụng xuyên suốt web, mạng xã hội và tài liệu marketing",
      ],
      technologies: ["Adobe Illustrator"],
      teamSize: "Team core tại VNMentors",
      myRole: "Graphic Designer",
      challenges:
        "Thiết kế logo vừa truyền tải được tinh thần học thuật và đặc thù TOEIC, vừa phải gọn gàng và linh hoạt trên các định dạng digital khác nhau.",
      learnings: [
        "Thiết kế logo cho sản phẩm edtech với định vị score-target cụ thể",
        "Tạo brand mark hoạt động tốt ở nhiều kích thước và ngữ cảnh khác nhau",
        "Phối hợp trong quy trình làm mới thương hiệu tại môi trường công ty",
      ],
      images: [
        {
          url: "projects/990toeic-logo-1",
          alt: "990TOEIC Logo",
          caption: "Logo chính thức — phiên bản full color",
        },
        {
          url: "projects/990toeic-logo-2",
          alt: "990TOEIC Logo",
          caption: "Các biến thể logo và hướng dẫn sử dụng",
        },
        {
          url: "projects/990toeic-logo-3",
          alt: "990TOEIC Logo",
          caption: "Logo trong ngữ cảnh thương hiệu",
        },
      ],
    },
  },

  // ─── NEW: Logo VNMentors Academy ──────────────────────────────────────────
  {
    id: "8",
    title: "VNMentors Academy — Thiết kế Logo",
    thumbnail: "projects/vnmentors-logo-thumb",
    description:
      "Thiết kế nhận diện thương hiệu cho VNMentors Academy — hệ sinh thái giáo dục của VNMentors. Thực hiện trong thời gian thực tập. Thương hiệu đã đổi tên thành IELTS9S.",
    tags: ["Thực tập", "Thiết kế Logo", "Brand Identity"],
    category: "internship",
    detail: {
      overview:
        "Thiết kế logo cho VNMentors Academy, nhánh giáo dục của VNMentors. Logomark — chữ V cách điệu từ các lớp hình thoi kết hợp dây mũ tốt nghiệp — thể hiện chuyên môn và thành tựu học thuật. Thực hiện trong khuôn khổ chiến dịch làm mới bộ nhận diện thương hiệu. Lưu ý: VNMentors Academy đã đổi tên thành IELTS9S.",
      responsibilities: [
        "Phát triển brand identity concept cho VNMentors Academy",
        "Thiết kế logomark và wordmark",
        "Tạo hướng dẫn sử dụng thương hiệu và các biến thể asset",
      ],
      contributions: [
        "Bàn giao logo chính thức của VNMentors Academy",
        "Asset package đầy đủ cho digital và print",
      ],
      impact: [
        "Logo được dùng làm brand mark chính thức trong giai đoạn VNMentors Academy",
        "Thương hiệu đã phát triển — hiện hoạt động với tên IELTS9S",
      ],
      technologies: ["Adobe Illustrator"],
      teamSize: "Team core tại VNMentors",
      myRole: "Graphic Designer",
      challenges:
        "Tạo ra một brand mark vừa toát lên sự học thuật và đáng tin cậy, vừa phải đủ nổi bật trong thị trường edtech cạnh tranh. Cân bằng giữa độ phức tạp của logomark và khả năng scale ở kích thước nhỏ trên digital.",
      learnings: [
        "Thiết kế brand identity cho một tổ chức giáo dục",
        "Brand mark cần được thiết kế với tầm nhìn dài hạn — linh hoạt cho sự thay đổi",
        "Tham gia vào quy trình rebrand thương hiệu trong môi trường công ty",
      ],
      images: [
        {
          url: "projects/vnmentors-logo-1",
          alt: "VNMentors Academy Logo",
          caption: "Logo chính thức — full lockup",
        },
        {
          url: "projects/vnmentors-logo-2",
          alt: "VNMentors Academy Logo",
          caption: "Các biến thể logomark",
        },
        {
          url: "projects/vnmentors-logo-3",
          alt: "VNMentors Academy Logo",
          caption: "Logo trong ngữ cảnh thương hiệu",
        },
      ],
    },
  },
];