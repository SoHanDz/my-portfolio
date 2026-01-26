import { Project } from '@/types';

export const projectsVI: Project[] = [
  {
    id: '1',
    title: 'Nền Tảng E-commerce',
    description: 'Thiết kế lại hoàn toàn luồng thanh toán, giảm tỷ lệ bỏ giỏ hàng 23%',
    tags: ['Client', 'Đã hoàn thành'],
    category: 'client',
    detail: {
      overview: 'Dẫn dắt thiết kế lại UI/UX cho luồng thanh toán của nền tảng e-commerce quy mô trung bình phục vụ 50K+ người dùng hàng tháng. Tập trung vào giảm ma sát và cải thiện tỷ lệ chuyển đổi.',
      
      responsibilities: [
        'Thực hiện nghiên cứu người dùng và xác định điểm đau trong luồng thanh toán hiện tại',
        'Tạo wireframes và mockups chi tiết cho 8 màn hình chính',
        'Hợp tác với các frontend developers để đảm bảo triển khai chính xác',
        'Chạy A/B tests để xác thực các quyết định thiết kế'
      ],
      
      contributions: [
        'Thiết kế lại quy trình thanh toán 3 bước với thanh tiến trình',
        'Triển khai xác thực form thông minh để giảm lỗi người dùng',
        'Tạo layouts responsive mobile-first',
        'Thiết kế luồng thanh toán khách để giảm rào cản',
        'Xây dựng thư viện component tái sử dụng trong Figma'
      ],
      
      impact: [
        'Giảm tỷ lệ bỏ giỏ hàng 23%',
        'Tăng chuyển đổi mobile 35%',
        'Giảm thời gian hoàn tất thanh toán 40%',
        'Cải thiện điểm hài lòng người dùng từ 3.2 lên 4.5/5'
      ],
      
      technologies: ['Figma', 'Adobe XD', 'React', 'Tailwind CSS'],
      
      teamSize: '5 (1 Designer, 2 Frontend Devs, 1 Backend Dev, 1 PM)',
      myRole: 'Lead UI/UX Designer',
      
      challenges: 'Cân bằng giữa yêu cầu kinh doanh (upselling) với trải nghiệm người dùng (đơn giản). Giải quyết bằng cách triển khai các add-ons tùy chọn không làm gián đoạn luồng chính.',
      
      learnings: [
        'Tầm quan trọng của thiết kế mobile-first trong e-commerce',
        'Cách cộng tác hiệu quả với developers sử dụng design tokens',
        'Phương pháp A/B testing và ý nghĩa thống kê'
      ],
      
      images: [
        {
          url: 'projects/ecommerce-checkout-flow',
          alt: 'Thiết kế lại luồng thanh toán',
          caption: 'So sánh Trước & Sau các bước thanh toán'
        }
      ]
    }
  },
  
  {
    id: '2',
    title: 'Ứng Dụng Fintech Mobile',
    description: 'Trải nghiệm onboarding và dashboard quản lý tài chính cá nhân',
    tags: ['Startup', 'Đã hoàn thành'],
    category: 'startup',
    detail: {
      overview: 'Thiết kế luồng onboarding và dashboard chính cho ứng dụng quản lý tài chính cá nhân hướng đến millennials. Tập trung vào việc làm cho quản lý tài chính trở nên dễ tiếp cận và hấp dẫn.',
      
      responsibilities: [
        'Thiết kế trải nghiệm onboarding hoàn chỉnh (6 màn hình)',
        'Tạo dashboard chính với data visualization',
        'Làm việc chặt chẽ với product team về ưu tiên tính năng'
      ],
      
      contributions: [
        'Gamified onboarding với phần thưởng tiến độ',
        'Theo dõi ngân sách trực quan với phân loại màu sắc',
        'Cử chỉ vuốt cho các hành động nhanh',
        'Hỗ trợ dark mode từ ngày đầu'
      ],
      
      impact: [
        'Tỷ lệ hoàn thành onboarding: 78% (trung bình ngành: 40%)',
        'Người dùng hoạt động hàng ngày tăng 45%',
        'Đánh giá App Store: 4.6/5 sao'
      ],
      
      technologies: ['Figma', 'Principle', 'React Native'],
      
      teamSize: '3 (1 Designer, 2 Mobile Devs)',
      myRole: 'Product Designer',
      
      challenges: 'Hiển thị dữ liệu tài chính phức tạp theo định dạng đơn giản, thân thiện với mobile mà không làm người dùng quá tải.',
      
      learnings: [
        'Các pattern thiết kế cử chỉ mobile',
        'Data visualization cho màn hình nhỏ',
        'Làm việc trong môi trường startup nhịp độ nhanh'
      ]
    }
  },
  
  {
    id: '3',
    title: 'Công Cụ CRM Nội Bộ',
    description: 'Công cụ doanh nghiệp để tối ưu hóa quy trình làm việc của đội ngũ sales',
    tags: ['Client', 'Đã hoàn thành'],
    category: 'client',
  },
  
  {
    id: '4',
    title: 'Website Marketing',
    description: 'Landing pages và tài liệu marketing cho sản phẩm B2B SaaS',
    tags: ['Thực tập'],
    category: 'internship',
  },
];