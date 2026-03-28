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
          url: "projects/smartbox-thumb",
          alt: "SmartBox System",
          caption: "Hệ sinh thái ứng dụng di động và bảng điều khiển quản trị",
        },
      ],
    },
  },
  {
    id: "5",
    title: "Website Tuấn Phạm Audio",
    thumbnail: "projects/tuanpham-thumb",
    description:
      "Website trưng bày thiết bị âm thanh cao cấp, được thực hiện với quy trình thiết kế tối ưu hóa bằng AI.",
    tags: ["Dự án Khách hàng", "AI-Assisted"],
    category: "client",
    detail: {
      overview:
        "Tuấn Phạm Audio là đơn vị kinh doanh thiết bị âm thanh Premium tại TP.HCM. Website được thiết kế để nâng tầm thương hiệu và hỗ trợ khách hàng tìm hiểu sản phẩm chuyên sâu. Em đã áp dụng quy trình làm việc mới: tự tay thiết kế các trang cốt lõi và hệ thống component, sau đó sử dụng công cụ AI (Figma Make) để hỗ trợ mở rộng các trang phụ, giúp tăng tốc độ bàn giao dự án.",
      responsibilities: [
        "Định hướng phong cách hình ảnh (Visual Direction) sang trọng, đẳng cấp",
        "Thiết kế bố cục trang chủ và xây dựng hệ thống Component chuẩn",
        "Ứng dụng AI để tối ưu hóa thời gian thiết kế các trang thứ cấp",
        "Kiểm soát và tinh chỉnh sản phẩm cuối cùng để đảm bảo độ chỉn chu cao nhất",
      ],
      contributions: [
        "Xây dựng giao diện trang chủ với phong cách tối giản nhưng tinh tế",
        "Tích hợp quy trình AI-assisted vào thiết kế để tăng 40% hiệu suất công việc",
        "Thiết kế luồng trải nghiệm từ xem sản phẩm đến liên hệ tư vấn trực tiếp",
        "Tối ưu hóa hiển thị trên các thiết bị di động cho phân khúc khách hàng cao cấp",
      ],
      impact: [
        "Website đã bàn giao và nhận được phản hồi rất tích cực từ khách hàng",
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
    },
  },
];