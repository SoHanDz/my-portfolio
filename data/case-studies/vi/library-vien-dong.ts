import { CaseStudy } from '@/types';

export const libraryVI: CaseStudy = {
  id: '2',
  slug: 'library-vien-dong',
  title: 'Hệ Thống Quản Lý Thư Viện',
  subtitle: 'Số Hóa Quy Trình Thủ Công Cho Trường Cao Đẳng Viễn Đông',
  description: 'Thiết kế hệ thống quản lý thư viện thay thế quy trình Excel thủ công — dự án thực tế đầu tiên có khảo sát người dùng thực tế',
  thumbnail: 'case-studies/library-thumb',
  coverImage: 'case-studies/library-hero',
  tags: ['Client', 'Web App', 'UX Research'],
  year: '2024',
  client: 'Cao Đẳng Viễn Đông',
  role: 'UI/UX Designer',
  duration: '2024',
  problem: 'Thủ thư tại trường Cao Đẳng Viễn Đông đang quản lý toàn bộ việc mượn/trả sách bằng Excel — nhập từng dòng thủ công mỗi khi có sinh viên mượn hoặc trả. Quy trình này tốn thời gian và dễ xảy ra sai sót. Về phía sinh viên, không có cách nào để biết thư viện đang có những đầu sách nào mà không đến trực tiếp hỏi.',
  solution: 'Trước khi thiết kế, mình trực tiếp đến khảo sát thư viện và lắng nghe cô thủ thư mô tả quy trình làm việc hàng ngày và những khó khăn gặp phải. Từ đó xác định được 2 nhóm người dùng với nhu cầu khác nhau: sinh viên cần tra cứu sách, và thủ thư cần quản lý mượn/trả nhanh hơn. Mình đảm nhận thiết kế cả hai: web portal cho sinh viên tra cứu và mượn sách online, và dashboard desktop cho thủ thư quản lý toàn bộ nghiệp vụ thay thế Excel.',
  impact: [
    'Hệ thống được triển khai thực tế và đang hoạt động tại thư viện',
    'Thủ thư không còn phải nhập liệu thủ công vào Excel',
    'Sinh viên có thể tra cứu đầu sách mà không cần đến thư viện',
    'Thay thế hoàn toàn quy trình giấy tờ trước đây',
  ],
  images: [
    {
      url: 'case-studies/library-student-portal',
      alt: 'Giao diện tra cứu sách cho sinh viên',
      caption: 'Portal tra cứu và mượn sách online cho sinh viên'
    },
    {
      url: 'case-studies/library-admin-dashboard',
      alt: 'Dashboard quản lý cho thủ thư',
      caption: 'Dashboard thay thế quy trình Excel thủ công'
    },
    {
      url: 'case-studies/library-survey',
      alt: 'Khảo sát thực tế tại thư viện',
      caption: 'Khảo sát và phỏng vấn thủ thư tại trường'
    },
  ],
  metrics: [
    { label: 'Nhóm người dùng', value: '2' },
    { label: 'Màn hình chính', value: '10+' },
    { label: 'Trạng thái', value: 'Live' },
  ],
  technologies: ['Figma', 'React', 'Material-UI', 'PostgreSQL'],
};