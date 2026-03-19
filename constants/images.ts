// ============================================================
// IMAGES.TS — Quản lý tất cả link ảnh tập trung
// Chỉ cần sửa ở đây, tự động cập nhật toàn bộ project
// ============================================================

export const IMAGES = {
  // ── Avatar ──
  avatar: 'avatar/son-ha',

  // ── Marquee gallery — ảnh UI chạy ngang ở Hero ──
  // Thêm Cloudinary public ID vào đây
  marquee: [
    'marquee/ui-1',
    'marquee/ui-2',
    'marquee/ui-3',
    'marquee/ui-4',
    'marquee/ui-5',
    'marquee/ui-6',
    'marquee/ui-7',
    'marquee/ui-8',
  ],

  // ── Project thumbnails ──
  projects: {
    invoiceai:  'projects/invoiceai-thumb',
    xtcWarehouse: 'projects/xtc-thumb',
    library:    'projects/library-thumb',
    khu13:      'projects/khu13-thumb',
    tuanPham:   'projects/tuanpham-thumb',
    smartbox:   'projects/smartbox-thumb',
  },

  // ── Case study images ──
  caseStudies: {
    invoiceai: {
      cover:  'case-studies/invoiceai-hero',
      before: 'case-studies/invoiceai-before',
      after:  'case-studies/invoiceai-after',
    },
    library: {
      cover:      'case-studies/library-hero',
      portal:     'case-studies/library-portal',
      dashboard:  'case-studies/library-dashboard',
      mobile:     'case-studies/library-mobile',
      qrFlow:     'case-studies/library-qr-flow',
    },
  },
} as const;