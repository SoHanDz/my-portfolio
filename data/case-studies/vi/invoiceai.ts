// invoiceai.ts
import { CaseStudy } from '@/types';

export const invoiceaiVI: CaseStudy = {
  id: '1',
  slug: 'invoiceai-saas-redesign',
  title: 'InvoiceAI - Thiết Kế Lại SaaS',
  subtitle: 'Từ Công Cụ Quản Lý Kho Đến Nền Tảng SaaS Hóa Đơn Điện Tử',
  description: 'Thiết kế lại hệ thống quản lý kho bị từ chối thành nền tảng SaaS đáp ứng quy định hóa đơn điện tử mới của Việt Nam',
  thumbnail: 'case-studies/invoiceai-thumb',
  coverImage: 'case-studies/invoiceai-hero',
  tags: ['Startup', 'Web App', 'Redesign'],
  year: '2024 - Hiện tại',
  client: 'Bảo mật',
  role: 'UI/UX Designer & Frontend Developer',
  duration: 'Tháng 5/2024 - Hiện tại',
  problem: 'Hệ thống quản lý kho XTC — được xây dựng cho một xưởng sản xuất ví da — đã hoàn thành nhưng bị client từ chối. Thay vì bỏ dự án, team quyết định pivot: rework lại thành nền tảng SaaS nhắm đến các doanh nghiệp SME cần tuân thủ quy định hóa đơn điện tử bắt buộc mới của Việt Nam.',
  solution: 'Redesign UI từ đầu trong khi giữ lại những phần hoạt động tốt từ XTC. Cơ cấu lại các màn hình chính — bao gồm trang tạo đơn hàng — thành layout theo block rõ ràng (header, filter, table). Dùng v0.dev để khám phá hướng UI cho 3 màn hình chính, sau đó tự implement lại bằng code. Xây dựng design system cơ bản để đảm bảo tính nhất quán.',
  impact: [
    'Hệ thống đang chạy thực tế và có người dùng sử dụng',
    'Hoàn thành design và implement cho 20+ màn hình chính',
    'Layout theo block cải thiện khả năng đọc và thao tác so với phiên bản cũ',
    'UI mới nhận phản hồi tốt hơn rõ rệt so với phiên bản XTC',
  ],
  images: [
    {
      url: 'case-studies/invoiceai-dashboard',
      alt: 'Tổng quan Dashboard InvoiceAI',
      caption: 'Dashboard được redesign cho nền tảng SaaS'
    },
    {
      url: 'case-studies/invoiceai-invoice-form',
      alt: 'Trang tạo đơn hàng sau redesign',
      caption: 'Trang tạo đơn hàng với layout block rõ ràng'
    },
    {
      url: 'case-studies/invoiceai-before-after',
      alt: 'So sánh Trước và Sau',
      caption: 'UI từ XTC đến InvoiceAI'
    }
  ],
  metrics: [
    { label: 'Màn hình chính', value: '20+' },
    { label: 'Trạng thái', value: 'Live' },
    { label: 'Giai đoạn', value: '2' },
  ],
  technologies: ['Figma', 'v0.dev', 'React', 'TypeScript', 'Ant Design'],
};