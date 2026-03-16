import { CaseStudy } from '@/types';

export const libraryVI: CaseStudy = {
  id: '2',
  slug: 'library-vien-dong',
  title: 'Hệ Thống Quản Lý Thư Viện',
  subtitle: 'Số Hóa Quy Trình Thủ Công Cho Trường Cao Đẳng Viễn Đông',
  description: 'Thiết kế hệ thống quản lý thư viện thay thế quy trình Excel thủ công — có khảo sát thực tế, thiết kế đa nền tảng (web + mobile app)',
  thumbnail: 'case-studies/library-thumb',
  coverImage: 'case-studies/library-hero',
  tags: ['Client', 'Web App', 'Mobile App', 'UX Research'],
  year: '2024',
  client: 'Cao Đẳng Viễn Đông',
  role: 'UI/UX Designer',
  duration: '2024',
  problem: 'Thủ thư tại trường Cao Đẳng Viễn Đông đang quản lý toàn bộ việc mượn/trả sách bằng Excel — nhập từng dòng thủ công mỗi khi có giao dịch. Quy trình này tốn thời gian và dễ sai sót. Về phía sinh viên, không có cách nào tra cứu thư viện có những đầu sách gì mà không đến trực tiếp hỏi.',
  solution: 'Thiết kế hệ thống gồm 3 phần: web portal cho sinh viên tra cứu và đặt mượn sách, dashboard desktop cho thủ thư quản lý toàn bộ nghiệp vụ thay thế Excel, và mobile app cho thủ thư xử lý mượn/trả nhanh bằng quét QR trực tiếp tại quầy.',
  impact: [
    'Hệ thống được triển khai thực tế và đang hoạt động tại thư viện',
    'Thủ thư không còn phải nhập liệu thủ công vào Excel',
    'Sinh viên có thể tra cứu đầu sách mà không cần đến thư viện',
    'Quy trình mượn/trả sách qua QR nhanh hơn đáng kể so với trước',
  ],
  research: {
    method: 'Khảo sát thực địa tại thư viện trường',
    findings: [
      'Thủ thư mất nhiều thời gian nhập liệu thủ công vào Excel cho mỗi giao dịch',
      'Không có hệ thống theo dõi sách nào — dễ xảy ra nhầm lẫn khi tra cứu',
      'Sinh viên phải đến thư viện hỏi trực tiếp mới biết sách có hay không',
    ],
  },
  platforms: [
    {
      name: 'Web Portal (Sinh viên)',
      description: 'Tra cứu danh sách sách, xem tình trạng, đặt mượn online',
      screens: ['Trang chủ', 'Danh sách sách', 'Chi tiết sách', 'Lịch sử mượn'],
    },
    {
      name: 'Dashboard Desktop (Thủ thư)',
      description: 'Quản lý toàn bộ nghiệp vụ thay thế Excel',
      screens: ['Dashboard tổng quan', 'Quản lý mượn/trả', 'Quản lý sách', 'Báo cáo thống kê'],
    },
    {
      name: 'Mobile App (Thủ thư)',
      description: 'Xử lý mượn/trả nhanh bằng quét QR tại quầy',
      screens: ['Đăng nhập', 'Dashboard', 'Danh sách sách đang mượn', 'Danh sách sách hiện có', 'Quét QR → Xác nhận thông tin → Hoàn tất'],
    },
  ],
  images: [
    {
      url: 'case-studies/library-student-portal',
      alt: 'Web portal cho sinh viên',
      caption: 'Trang tra cứu và mượn sách online cho sinh viên',
    },
    {
      url: 'case-studies/library-admin-dashboard',
      alt: 'Dashboard desktop cho thủ thư',
      caption: 'Dashboard thay thế quy trình Excel thủ công',
    },
    {
      url: 'case-studies/library-mobile-app',
      alt: 'Mobile app cho thủ thư',
      caption: 'App quét QR mượn/trả sách tại quầy',
    },
    {
      url: 'case-studies/library-qr-flow',
      alt: 'QR flow diagram',
      caption: 'Flow quét QR: Quét → Xác nhận thông tin → Hoàn tất',
    },
  ],
  metrics: [
    { label: 'Nền tảng', value: '3' },
    { label: 'Màn hình chính', value: '15+' },
    { label: 'Trạng thái', value: 'Live' },
  ],
  technologies: ['Figma', 'React', 'Material-UI', 'PostgreSQL', 'React Native'],
};

export const libraryEN: CaseStudy = {
  id: '2',
  slug: 'library-vien-dong',
  title: 'Library Management System',
  subtitle: 'Digitizing Manual Processes for Vien Dong College',
  description: 'Designing a multi-platform library management system to replace manual Excel workflows — with on-site research, web portal, desktop dashboard, and mobile QR app',
  thumbnail: 'case-studies/library-thumb',
  coverImage: 'case-studies/library-hero',
  tags: ['Client', 'Web App', 'Mobile App', 'UX Research'],
  year: '2024',
  client: 'Vien Dong College',
  role: 'UI/UX Designer',
  duration: '2024',
  problem: 'The librarian at Vien Dong College was managing all book borrowing and returns through Excel — manually entering each row for every transaction. The process was time-consuming and error-prone. On the student side, there was no way to know what books were available without physically going to the library to ask.',
  solution: 'Designed a 3-part system: a web portal for students to search and request books, a desktop dashboard for the librarian to manage all operations replacing Excel, and a mobile app for the librarian to handle borrowing and returns quickly via QR scanning at the counter.',
  impact: [
    'System is deployed and actively used at the library',
    'Librarian no longer needs to manually enter data into Excel',
    'Students can search for available books without visiting the library',
    'QR-based borrowing and return process is significantly faster than before',
  ],
  research: {
    method: 'On-site visit and interview at the college library',
    findings: [
      'Librarian spent significant time on manual data entry in Excel for each transaction',
      'No tracking system in place — prone to errors when looking up book availability',
      'Students had no way to check book availability remotely',
    ],
  },
  platforms: [
    {
      name: 'Web Portal (Students)',
      description: 'Search books, check availability, and request borrowing online',
      screens: ['Home', 'Book catalog', 'Book detail', 'Borrowing history'],
    },
    {
      name: 'Desktop Dashboard (Librarian)',
      description: 'Manage all library operations — replaces Excel entirely',
      screens: ['Overview dashboard', 'Borrow/return management', 'Book management', 'Statistics & reports'],
    },
    {
      name: 'Mobile App (Librarian)',
      description: 'Handle borrowing and returns quickly via QR scan at the counter',
      screens: ['Login', 'Dashboard', 'Currently borrowed list', 'Available books list', 'QR Scan → Confirm info → Complete'],
    },
  ],
  images: [
    {
      url: 'case-studies/library-student-portal',
      alt: 'Student web portal',
      caption: 'Online book search and borrowing portal for students',
    },
    {
      url: 'case-studies/library-admin-dashboard',
      alt: 'Desktop dashboard for librarian',
      caption: 'Dashboard replacing the manual Excel workflow',
    },
    {
      url: 'case-studies/library-mobile-app',
      alt: 'Mobile app for librarian',
      caption: 'QR scanning app for borrowing and returns at the counter',
    },
    {
      url: 'case-studies/library-qr-flow',
      alt: 'QR flow diagram',
      caption: 'QR flow: Scan → Confirm info → Complete',
    },
  ],
  metrics: [
    { label: 'Platforms', value: '3' },
    { label: 'Key Screens', value: '15+' },
    { label: 'Status', value: 'Live' },
  ],
  technologies: ['Figma', 'React', 'Material-UI', 'PostgreSQL', 'React Native'],
};