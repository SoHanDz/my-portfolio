import { Project } from '@/types';

export const projectsVI: Project[] = [
  {
    id: '1',
    title: 'Hệ thống SaaS quản lý kho (InvoiceAI)',
    description: 'Thiết kế và phát triển nền tảng SaaS quản lý kho hàng thông minh với AI tích hợp, phục vụ 200+ doanh nghiệp SME',
    tags: ['SaaS', 'Đã hoàn thành'],
    category: 'startup',
    detail: {
      overview: 'Dẫn dắt thiết kế hệ thống quản lý kho hàng toàn diện với tích hợp AI để tự động hóa quy trình nhập xuất, dự báo tồn kho và tạo báo cáo. Sản phẩm phục vụ 200+ doanh nghiệp SME tại Việt Nam với 1000+ người dùng hoạt động hàng ngày.',
      
      responsibilities: [
        'Thiết kế toàn bộ hệ thống từ wireframe đến high-fidelity prototype cho 15+ modules chính',
        'Nghiên cứu người dùng qua phỏng vấn 30+ chủ kho và nhân viên quản lý',
        'Xây dựng design system và component library cho consistency',
        'Hợp tác với AI team để thiết kế dashboard dự báo và insights',
        'Dẫn dắt usability testing với 50+ người dùng thực tế'
      ],
      
      contributions: [
        'Thiết kế dashboard tổng quan với real-time inventory tracking',
        'Xây dựng luồng nhập/xuất hàng tối ưu giảm 60% thời gian xử lý',
        'Tạo hệ thống báo cáo tự động với data visualization phong phú',
        'Thiết kế mobile app cho nhân viên kho quét barcode/QR',
        'Implement responsive design cho tablet và desktop',
        'Tích hợp AI chatbot hỗ trợ người dùng 24/7'
      ],
      
      impact: [
        'Giảm 70% sai sót trong quản lý tồn kho',
        'Tăng 45% hiệu suất xử lý đơn hàng',
        'Tiết kiệm 30% chi phí vận hành kho cho khách hàng',
        'Đạt NPS score 72 (Very Good)',
        'Retention rate 85% sau 6 tháng đầu'
      ],
      
      technologies: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'React Native'],
      
      teamSize: '8 (2 Designers, 3 Frontend Devs, 2 Backend Devs, 1 PM)',
      myRole: 'Lead Product Designer',
      
      challenges: 'Thiết kế hệ thống phức tạp nhưng vẫn đảm bảo dễ sử dụng cho người dùng không am hiểu công nghệ. Giải quyết bằng cách áp dụng progressive disclosure và onboarding từng bước có hướng dẫn chi tiết.',
      
      learnings: [
        'Thiết kế hệ thống enterprise-level với nhiều vai trò người dùng',
        'Tích hợp AI/ML insights vào UI một cách trực quan',
        'Xây dựng và maintain design system quy mô lớn',
        'Cân bằng giữa tính năng phong phú và trải nghiệm đơn giản'
      ],
      
      images: [
        {
          url: 'projects/invoiceai-dashboard',
          alt: 'Dashboard InvoiceAI',
          caption: 'Dashboard tổng quan với real-time analytics'
        }
      ]
    }
  },

  {
    id: '2',
    title: 'Hệ thống Parcel Locker (Smart Box)',
    description: 'Thiết kế UX/UI cho hệ thống tủ giao hàng thông minh phục vụ 10,000+ giao dịch mỗi ngày tại các chung cư cao cấp',
    tags: ['IoT', 'Đã hoàn thành'],
    category: 'client',
    detail: {
      overview: 'Thiết kế trải nghiệm đầu-cuối cho hệ thống parcel locker thông minh, bao gồm ứng dụng mobile cho người nhận hàng, dashboard web cho shipper, và giao diện màn hình cảm ứng trên tủ. Hệ thống được triển khai tại 50+ tòa nhà chung cư cao cấp tại TP.HCM và Hà Nội.',
      
      responsibilities: [
        'Thiết kế user flow cho 3 nhóm người dùng: người nhận, shipper, và quản lý tòa nhà',
        'Tạo prototype tương tác cho mobile app và kiosk interface',
        'Nghiên cứu ergonomics và accessibility cho màn hình tủ locker',
        'Phối hợp với hardware team về kích thước màn hình và vị trí đặt',
        'Testing thực tế tại 5 tòa nhà pilot'
      ],
      
      contributions: [
        'Thiết kế quy trình mở tủ đơn giản với QR code hoặc OTP',
        'Xây dựng notification system thông minh (push, SMS, email)',
        'Tạo dashboard cho shipper theo dõi và quản lý giao hàng',
        'Thiết kế giao diện kiosk 15 inch với UX tối ưu cho người cao tuổi',
        'Implement dark mode cho ứng dụng mobile',
        'Xây dựng analytics dashboard cho BQL tòa nhà'
      ],
      
      impact: [
        'Giảm 95% giao hàng thất bại do không застать nhà',
        'Tăng 80% sự hài lòng của cư dân',
        'Tiết kiệm 40% thời gian giao hàng cho shipper',
        'Xử lý 10,000+ giao dịch mỗi ngày',
        'Rating 4.7/5 trên App Store và Play Store'
      ],
      
      technologies: ['Figma', 'React Native', 'React', 'Node.js', 'Socket.io'],
      
      teamSize: '10 (2 Designers, 3 Mobile Devs, 2 Backend Devs, 2 Hardware Engineers, 1 PM)',
      myRole: 'UX/UI Designer',
      
      challenges: 'Thiết kế cho nhiều touchpoints khác nhau (mobile, web, kiosk) với hardware constraints. Đảm bảo trải nghiệm nhất quán và đơn giản cho người cao tuổi.',
      
      learnings: [
        'Thiết kế cho IoT và hệ thống hardware-software tích hợp',
        'Multi-platform design với brand consistency',
        'Accessibility và inclusive design',
        'Working với cross-functional teams (hardware + software)'
      ],
      
      images: [
        {
          url: 'projects/smartbox-system',
          alt: 'Smart Box System',
          caption: 'Multi-platform experience: Mobile app, Web dashboard, và Kiosk interface'
        }
      ]
    }
  },

  {
    id: '3',
    title: 'Quản lý kho (XTC)',
    description: 'Hệ thống quản lý kho nội bộ cho công ty logistics, xử lý 5000+ đơn hàng mỗi ngày',
    tags: ['Client', 'Đã hoàn thành'],
    category: 'client',
    detail: {
      overview: 'Thiết kế hệ thống quản lý kho toàn diện cho công ty logistics XTC, tối ưu hóa quy trình từ nhập hàng, phân loại, lưu kho đến xuất hàng. Hệ thống phục vụ 100+ nhân viên kho tại 3 chi nhánh miền Nam.',
      
      responsibilities: [
        'Phân tích quy trình làm việc hiện tại và xác định pain points',
        'Thiết kế wireframes và mockups cho 12 modules chính',
        'Tạo interactive prototype để demo với stakeholders',
        'Hợp tác với development team trong suốt quá trình phát triển',
        'Conduct UAT với nhân viên kho thực tế'
      ],
      
      contributions: [
        'Thiết kế dashboard real-time theo dõi tình trạng kho',
        'Xây dựng hệ thống quét barcode tối ưu cho mobile',
        'Tạo luồng nhập/xuất hàng đơn giản với validation thông minh',
        'Thiết kế báo cáo tự động theo ngày/tuần/tháng',
        'Implement role-based access control UI',
        'Tối ưu UX cho tablet 10 inch (thiết bị chính)'
      ],
      
      impact: [
        'Giảm 50% thời gian xử lý mỗi đơn hàng',
        'Tăng 65% độ chính xác trong kiểm kho',
        'Giảm 40% sai sót trong xuất hàng',
        'Tiết kiệm 25% nhân lực xử lý giấy tờ',
        'Tăng 30% năng suất tổng thể'
      ],
      
      technologies: ['Figma', 'React', 'TypeScript', 'Ant Design', 'Recharts'],
      
      teamSize: '6 (1 Designer, 2 Frontend Devs, 2 Backend Devs, 1 PM)',
      myRole: 'UI/UX Designer',
      
      challenges: 'Thiết kế cho môi trường kho bãi với điều kiện ánh sáng khác nhau, màn hình cảm ứng có thể bị bẩn/ướt. Giải quyết bằng high contrast design và nút bấm kích thước lớn.',
      
      learnings: [
        'Thiết kế cho môi trường công nghiệp và blue-collar workers',
        'Tầm quan trọng của field research và contextual inquiry',
        'Optimization cho thiết bị có performance hạn chế',
        'Change management khi digitize quy trình thủ công'
      ],
      
      images: [
        {
          url: 'projects/xtc-warehouse',
          alt: 'XTC Warehouse System',
          caption: 'Dashboard và mobile interface cho nhân viên kho'
        }
      ]
    }
  },

  {
    id: '4',
    title: 'Quản lý thư viện (Cao đẳng Viễn Đông)',
    description: 'Số hóa hệ thống quản lý thư viện phục vụ 5000+ sinh viên và 200+ giảng viên',
    tags: ['Client', 'Đã hoàn thành'],
    category: 'client',
    detail: {
      overview: 'Thiết kế và triển khai hệ thống quản lý thư viện hiện đại cho trường Cao đẳng Viễn Đông, thay thế quy trình thủ công bằng giải pháp số hóa toàn diện. Hệ thống bao gồm web portal cho sinh viên/giảng viên và dashboard quản trị cho thư viện.',
      
      responsibilities: [
        'Nghiên cứu quy trình mượn/trả sách hiện tại tại thư viện',
        'Thiết kế user flow cho sinh viên, giảng viên, và thủ thư',
        'Tạo wireframes và high-fidelity designs cho 10+ màn hình',
        'Xây dựng design system cho tính nhất quán',
        'User testing với 30+ sinh viên và 5 thủ thư'
      ],
      
      contributions: [
        'Thiết kế catalog tìm kiếm sách với filter và sort nâng cao',
        'Xây dựng hệ thống đặt sách online và quản lý hàng chờ',
        'Tạo dashboard cho thủ thư quản lý mượn/trả',
        'Thiết kế mobile app cho sinh viên scan barcode tự mượn',
        'Implement notification system cho hạn trả sách',
        'Tạo báo cáo thống kê cho ban giám hiệu'
      ],
      
      impact: [
        'Giảm 70% thời gian xử lý mượn/trả sách',
        'Tăng 90% tỷ lệ trả sách đúng hạn nhờ notification',
        'Tăng 150% lượt truy cập thư viện',
        'Tiết kiệm 60% thời gian làm báo cáo',
        'Satisfaction score: 4.4/5 từ sinh viên'
      ],
      
      technologies: ['Figma', 'React', 'Material-UI', 'PostgreSQL'],
      
      teamSize: '5 (1 Designer, 2 Frontend Devs, 1 Backend Dev, 1 Librarian Lead)',
      myRole: 'UI/UX Designer',
      
      challenges: 'Thiết kế cho nhiều nhóm người dùng với trình độ công nghệ khác nhau (từ sinh viên tech-savvy đến thủ thư lớn tuổi). Phải đảm bảo hệ thống đơn giản nhưng đầy đủ chức năng.',
      
      learnings: [
        'Thiết kế cho giáo dục và quản lý tài nguyên học tập',
        'Research và design cho nhiều user personas khác nhau',
        'Digitalization của quy trình truyền thống',
        'Importance of training và documentation trong adoption'
      ],
      
      images: [
        {
          url: 'projects/library-system',
          alt: 'Library Management System',
          caption: 'Student portal và Admin dashboard'
        }
      ]
    }
  },

  {
    id: '5',
    title: 'Quản lý phòng khám ClinicAI',
    description: 'Nền tảng quản lý phòng khám nha khoa tích hợp AI, phục vụ 30+ phòng khám',
    tags: ['Healthcare', 'Đã hoàn thành'],
    category: 'startup',
    detail: {
      overview: 'Thiết kế hệ thống quản lý phòng khám nha khoa toàn diện với tích hợp AI để hỗ trợ chẩn đoán, lập kế hoạch điều trị và quản lý bệnh nhân. Sản phẩm SaaS phục vụ 30+ phòng khám với 200+ bác sĩ và 5000+ bệnh nhân.',
      
      responsibilities: [
        'Research quy trình làm việc tại 10+ phòng khám nha khoa',
        'Thiết kế patient journey từ booking đến follow-up',
        'Tạo dashboard cho bác sĩ, lễ tân, và quản lý',
        'Phối hợp với AI team để tích hợp dental image analysis',
        'Testing với bác sĩ nha khoa thực tế'
      ],
      
      contributions: [
        'Thiết kế hệ thống đặt lịch online với calendar tối ưu',
        'Xây dựng EMR (Electronic Medical Record) cho nha khoa',
        'Tạo treatment planning tool với visual tooth chart',
        'Thiết kế AI-powered X-ray analysis interface',
        'Implement patient portal để xem kết quả và lịch hẹn',
        'Tạo billing và insurance management system'
      ],
      
      impact: [
        'Giảm 60% no-show rate nhờ reminder system',
        'Tăng 40% số bệnh nhân có thể phục vụ mỗi ngày',
        'Tiết kiệm 50% thời gian làm hồ sơ bệnh án',
        'Tăng 35% revenue cho phòng khám nhờ tối ưu lịch hẹn',
        'Rating 4.6/5 từ bác sĩ và lễ tân'
      ],
      
      technologies: ['Figma', 'React', 'TypeScript', 'Ant Design', 'TensorFlow.js'],
      
      teamSize: '9 (2 Designers, 3 Frontend Devs, 2 Backend Devs, 1 AI Engineer, 1 PM)',
      myRole: 'Product Designer',
      
      challenges: 'Thiết kế cho ngành y tế với yêu cầu bảo mật cao và quy định HIPAA-like. Cần hiển thị thông tin y tế phức tạp một cách dễ hiểu cho cả bác sĩ và bệnh nhân.',
      
      learnings: [
        'Healthcare UX và medical data visualization',
        'Compliance và privacy-first design',
        'Designing cho AI-assisted workflows',
        'Balancing clinician efficiency với patient experience'
      ],
      
      images: [
        {
          url: 'projects/clinicai-dashboard',
          alt: 'ClinicAI Dashboard',
          caption: 'Doctor dashboard với AI-powered insights'
        }
      ]
    }
  },

  {
    id: '6',
    title: 'Quản lý tour du lịch (Du Lịch Cờ Hoa)',
    description: 'Hệ thống quản lý booking và vận hành tour du lịch cho công ty du lịch 15 năm kinh nghiệm',
    tags: ['Client', 'Đã hoàn thành'],
    category: 'client',
    detail: {
      overview: 'Thiết kế nền tảng quản lý tour du lịch toàn diện cho Du Lịch Cờ Hoa, bao gồm website booking cho khách hàng và hệ thống quản trị nội bộ cho nhân viên. Xử lý 500+ tour/tháng với 2000+ khách hàng.',
      
      responsibilities: [
        'Phân tích quy trình booking và vận hành tour hiện tại',
        'Thiết kế customer-facing website và admin dashboard',
        'Tạo mobile app cho hướng dẫn viên quản lý tour',
        'Testing với khách hàng và nhân viên công ty',
        'Tạo marketing materials và landing pages'
      ],
      
      contributions: [
        'Thiết kế tour catalog với filter theo điểm đến/giá/ngày',
        'Xây dựng booking flow đơn giản với multi-step form',
        'Tạo dashboard cho sales team quản lý bookings',
        'Thiết kế itinerary builder cho tour operator',
        'Implement payment integration với VNPay và Momo',
        'Tạo review system và rating cho tours'
      ],
      
      impact: [
        'Tăng 120% online bookings trong 6 tháng đầu',
        'Giảm 45% thời gian xử lý mỗi booking',
        'Tăng 80% repeat customers nhờ CRM tốt hơn',
        'Tăng 50% conversion rate so với website cũ',
        'Average rating 4.8/5 từ 500+ reviews'
      ],
      
      technologies: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Mapbox'],
      
      teamSize: '6 (1 Designer, 2 Frontend Devs, 1 Backend Dev, 1 Marketing, 1 PM)',
      myRole: 'UI/UX Designer',
      
      challenges: 'Thiết kế cho cả B2C (khách hàng) và B2B (đại lý du lịch). Cần tối ưu conversion rate trong khi vẫn cung cấp đủ thông tin chi tiết cho quyết định.',
      
      learnings: [
        'E-commerce UX cho ngành du lịch',
        'Dual-sided marketplace design',
        'Payment integration và trust building',
        'SEO-friendly design và content structure'
      ],
      
      images: [
        {
          url: 'projects/travel-booking',
          alt: 'Travel Booking System',
          caption: 'Customer booking flow và Tour management dashboard'
        }
      ]
    }
  },

  {
    id: '7',
    title: 'Website tìm kiếm văn phòng (OfficefinderVN)',
    description: 'Nền tảng marketplace kết nối người tìm văn phòng với chủ tòa nhà, 1000+ listings',
    tags: ['Marketplace', 'Đã hoàn thành'],
    category: 'startup',
    detail: {
      overview: 'Thiết kế platform giúp doanh nghiệp tìm kiếm và thuê văn phòng, coworking space tại TP.HCM và Hà Nội. Kết nối 500+ chủ tòa nhà với 2000+ doanh nghiệp tìm văn phòng.',
      
      responsibilities: [
        'Research nhu cầu của cả người tìm và cho thuê văn phòng',
        'Thiết kế search và filter experience tối ưu',
        'Tạo listing pages với property details',
        'Phối hợp với marketing team về SEO và conversion',
        'A/B testing các elements quan trọng'
      ],
      
      contributions: [
        'Thiết kế advanced search với map-based interface',
        'Xây dựng comparison tool để so sánh nhiều văn phòng',
        'Tạo inquiry system và lead management cho landlords',
        'Thiết kế virtual tour feature với 360° photos',
        'Implement filtering theo amenities, giá, diện tích',
        'Tạo landlord dashboard để quản lý listings'
      ],
      
      impact: [
        'Tăng 200% số lượng inquiries trong 3 tháng',
        'Conversion rate 12% từ visit sang inquiry',
        'Giảm 50% thời gian tìm văn phòng cho clients',
        'GMV 2 tỷ VNĐ trong 6 tháng đầu',
        'Average session duration: 8 phút'
      ],
      
      technologies: ['Figma', 'Next.js', 'React', 'Mapbox', 'Algolia Search'],
      
      teamSize: '7 (2 Designers, 2 Frontend Devs, 1 Backend Dev, 1 SEO, 1 PM)',
      myRole: 'Senior UI/UX Designer',
      
      challenges: 'Cân bằng giữa cung cấp đủ thông tin chi tiết mà không làm người dùng quá tải. Tối ưu search UX cho dataset lớn với nhiều filters.',
      
      learnings: [
        'Marketplace và two-sided platform design',
        'Map-based search interface patterns',
        'Real estate specific UX requirements',
        'SEO-driven design decisions'
      ],
      
      images: [
        {
          url: 'projects/officefinder-search',
          alt: 'OfficeFinder Search',
          caption: 'Map-based search và Property comparison tool'
        }
      ]
    }
  },

  {
    id: '8',
    title: 'Khu13 Website',
    description: 'Website cộng đồng chia sẻ review nhà hàng, quán ăn phong cách Gen Z',
    tags: ['Community', 'Đang phát triển'],
    category: 'client',
    detail: {
      overview: 'Thiết kế nền tảng review ẩm thực cho Gen Z với giao diện trẻ trung, tập trung vào ảnh đẹp và short-form content. Mục tiêu tạo cộng đồng foodie năng động tại TP.HCM.',
      
      responsibilities: [
        'Research xu hướng social media và food content của Gen Z',
        'Thiết kế brand identity và visual system',
        'Tạo user flow cho posting và discovery',
        'Design Instagram-like feed với focus on visuals',
        'Testing với target audience 18-25 tuổi'
      ],
      
      contributions: [
        'Thiết kế Instagram-style feed với swipe gestures',
        'Xây dựng filter system theo món ăn, giá, location',
        'Tạo story-like format cho quick reviews',
        'Implement hashtag và trending system',
        'Design gamification với badges và leaderboard',
        'Tạo recommendation algorithm UI'
      ],
      
      impact: [
        '5000+ users trong 2 tháng soft launch',
        'Average 15 posts per active user',
        'Engagement rate 25% (rất cao)',
        '40% daily active users',
        'Viral trên social media với 50K+ mentions'
      ],
      
      technologies: ['Figma', 'React Native', 'Next.js', 'Tailwind CSS', 'Firebase'],
      
      teamSize: '4 (1 Designer, 2 Developers, 1 Community Manager)',
      myRole: 'Product Designer & Co-founder',
      
      challenges: 'Differentiate từ các platform hiện có (Foursquare, Google Maps). Tạo viral loop để organic growth mà không có marketing budget lớn.',
      
      learnings: [
        'Social media và community product design',
        'Gen Z user behavior và preferences',
        'Growth hacking và viral mechanics',
        'Building MVP với resource constraints'
      ],
      
      images: [
        {
          url: 'projects/khu13-feed',
          alt: 'Khu13 Feed',
          caption: 'Instagram-style feed và Discovery interface'
        }
      ]
    }
  },

  {
    id: '9',
    title: 'Tuấn Phạm Audio Website',
    description: 'Website thương mại điện tử cho thương hiệu thiết bị âm thanh cao cấp',
    tags: ['E-commerce', 'Đã hoàn thành'],
    category: 'client',
    detail: {
      overview: 'Thiết kế website bán hàng cho Tuấn Phạm Audio, đại lý chính thức các thương hiệu loa, ampli cao cấp. Tập trung vào showcase sản phẩm premium và education cho audiophiles.',
      
      responsibilities: [
        'Research đối tượng khách hàng audiophile',
        'Thiết kế product pages với thông tin kỹ thuật chi tiết',
        'Tạo showroom virtual tour experience',
        'Design consultation booking flow',
        'Optimize cho high-value B2C sales'
      ],
      
      contributions: [
        'Thiết kế premium product pages với technical specs',
        'Xây dựng comparison tool cho các model',
        'Tạo video integration để demo âm thanh',
        'Design appointment booking cho audition',
        'Implement wish list và inquiry system',
        'Tạo education content về audio systems'
      ],
      
      impact: [
        'Tăng 85% online inquiries',
        'Average order value: 50 triệu VNĐ',
        'Conversion rate 8% cho high-ticket items',
        'Tăng 60% showroom visits qua online bookings',
        'Customer satisfaction: 4.9/5'
      ],
      
      technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'WooCommerce'],
      
      teamSize: '4 (1 Designer, 2 Developers, 1 Content Creator)',
      myRole: 'UI/UX Designer',
      
      challenges: 'Thiết kế cho niche market (audiophiles) với high expectations về chất lượng. Trình bày technical information một cách attractive mà không overwhelming.',
      
      learnings: [
        'Luxury e-commerce design principles',
        'Technical product presentation',
        'High-value consultation-based sales UX',
        'Content-heavy design với video và specs'
      ],
      
      images: [
        {
          url: 'projects/tuanpham-audio',
          alt: 'Tuấn Phạm Audio',
          caption: 'Premium product page và Comparison tool'
        }
      ]
    }
  },
];