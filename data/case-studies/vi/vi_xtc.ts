import { CaseStudy } from '@/types';

export const xtcVI: CaseStudy = {
  id: '1',
  slug: 'xtc-warehouse',
  title: 'Hệ thống kho XTC',
  subtitle: 'Từ xưởng ví da đến nền tảng SaaS — qua 3 lần tái khởi động.',
  description: 'Hệ thống quản lý kho bắt đầu từ một dự án client, bị từ chối, rồi trở thành nền tảng của một sản phẩm SaaS.',
  thumbnail: 'case-studies/xtc-thumb',
  coverImage: 'case-studies/xtc-hero',
  tags: ['Web App', 'Redesign', '3 Giai đoạn'],
  year: '2025 — Hiện tại',
  client: 'XTC Logistics (GĐ 1) → SaaS nội bộ (GĐ 2–3)',
  role: 'Lead UI/UX Designer & Frontend Developer',
  duration: '2025 — Hiện tại · 3 lần tái khởi động',
  problem: 'Một bạn cùng lớp làm tại XTC — xưởng sản xuất hàng da — đã kết nối dự án với giảng viên, sau đó giảng viên huy động các sinh viên giỏi của lớp. Client cần thay thế quy trình thủ công bằng phần mềm. Em được chọn làm lead designer vì sử dụng Figma tốt nhất lớp.',
  solution: 'Thiết kế UI core dựa trên Sapo POS rồi tinh giản lại. Khi XTC không tiếp tục, dự án pivot sang SaaS. Em rework UI ở GĐ 2 (đồng thời code module thu chi và fix inconsistency do 3 frontend dev làm chung), sau đó rebuild toàn bộ với AI ở GĐ 3 bằng v0.dev.',
  impact: [
    'Hoàn thành 15+ màn hình chính qua 3 giai đoạn',
    'Code module thu chi ở giai đoạn 2',
    'Rework toàn bộ UI với v0.dev ở giai đoạn 3',
    'Design trở thành nền tảng cho sản phẩm SaaS InvoiceAI',
  ],
  images: [
    { url: 'case-studies/xtc-dashboard', alt: 'Dashboard', caption: 'Dashboard — Giai đoạn 1' },
    { url: 'case-studies/xtc-orders', alt: 'Quản lý đơn hàng', caption: 'Quản lý đơn hàng' },
    { url: 'case-studies/xtc-inventory', alt: 'Tồn kho', caption: 'Quản lý tồn kho' },
    { url: 'case-studies/xtc-products', alt: 'Sản phẩm', caption: 'Quản lý sản phẩm' },
    { url: 'case-studies/xtc-finance', alt: 'Tài chính', caption: 'Thu chi — Giai đoạn 2' },
    { url: 'case-studies/xtc-v3', alt: 'Rework GĐ 3', caption: 'Rework với AI — Giai đoạn 3' },
  ],
  metrics: [
    { label: 'Giai đoạn', value: '3' },
    { label: 'Màn hình chính', value: '15+' },
    { label: 'Module', value: '6' },
    { label: 'Thành viên', value: '9' },
  ],
  technologies: ['Figma', 'React', 'TypeScript', 'Ant Design', 'v0.dev'],
};