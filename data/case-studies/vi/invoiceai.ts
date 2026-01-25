import { CaseStudy } from '@/types';

export const invoiceaiVI: CaseStudy = {
  id: '1',
  slug: 'invoiceai-saas-redesign',
  title: 'InvoiceAI - Thiết Kế Lại SaaS',
  subtitle: 'Từ Logistics Đến Fintech Tuân Thủ',
  description: 'Thiết kế lại hệ thống kho bãi thành nền tảng SaaS hóa đơn điện tử hiện đại theo quy định tuân thủ số của Việt Nam',
  thumbnail: 'case-studies/invoiceai-thumb',
  coverImage: 'case-studies/invoiceai-hero',
  tags: ['Client', 'Web App', 'UX-heavy', 'Redesign'],
  year: '2024 - Hiện tại',
  client: 'Bảo mật',
  role: 'Lead UI/UX Designer',
  duration: 'Tháng 5/2024 - Hiện tại (Nhiều giai đoạn)',
  problem: 'Hệ thống quản lý kho ban đầu cho XTC Logistics không được nghiệm thu. Dự án cần chuyển hướng để giải quyết cơ hội thị trường mới: Quy định hóa đơn điện tử bắt buộc của Việt Nam yêu cầu doanh nghiệp áp dụng giải pháp hóa đơn số.',
  solution: 'Thiết kế lại nền tảng từ công cụ logistics đơn mục đích thành hệ thống SaaS hóa đơn điện tử linh hoạt. Tập trung vào tạo hóa đơn trực quan, quy trình tuân thủ, và dashboard hiện đại hấp dẫn các doanh nghiệp vừa và nhỏ đang thích ứng với quy định mới.',
  impact: [
    'Chuyển đổi dự án bị từ chối thành sản phẩm SaaS khả thi',
    'Thiết kế cho khả năng mở rộng và kiến trúc đa thuê bao',
    'Giải quyết nhu cầu thị trường cấp thiết (Quy định hóa đơn điện tử VN)',
    'UI hiện đại cải thiện tính chuyên nghiệp và tin cậy'
  ],
  images: [
    {
      url: 'case-studies/invoiceai-dashboard',
      alt: 'Tổng quan Dashboard InvoiceAI',
      caption: 'Dashboard SaaS hiện đại với các chỉ số chính'
    },
    {
      url: 'case-studies/invoiceai-invoice-form',
      alt: 'Luồng tạo hóa đơn',
      caption: 'Quy trình tạo hóa đơn được tối ưu hóa'
    },
    {
      url: 'case-studies/invoiceai-before-after',
      alt: 'So sánh Trước và Sau',
      caption: 'Sự phát triển từ hệ thống logistics sang nền tảng SaaS'
    }
  ],
  metrics: [
    { label: 'Giai đoạn dự án', value: '2' },
    { label: 'Màn hình chính', value: '15+' },
    { label: 'Tuân thủ', value: '100%' }
  ],
  technologies: ['Figma', 'Design System', 'User Flows'],
};