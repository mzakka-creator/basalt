import type { Locale } from '@/lib/i18n/config';

export type AdminMessages = {
  brand: string;
  langSwitch: string;
  nav: {
    dashboard: string;
    blogs: string;
    events: string;
    logout: string;
  };
  login: {
    title: string;
    subtitle: string;
    password: string;
    signIn: string;
    signingIn: string;
    invalidPassword: string;
  };
  dashboard: {
    title: string;
    blogs: string;
    events: string;
    articles: string;
    eventsCount: string;
    manageBlogs: string;
    addBlog: string;
    manageEvents: string;
    addEvent: string;
  };
  blogs: {
    title: string;
    addBlog: string;
    editBlog: string;
    colTitle: string;
    colSlug: string;
    colCategory: string;
    colDate: string;
    colActions: string;
    edit: string;
    delete: string;
    deleting: string;
    deleteConfirm: string;
    deleteFailed: string;
    categoryNews: string;
    categoryIndustry: string;
    categoryTech: string;
  };
  events: {
    title: string;
    addEvent: string;
    editEvent: string;
    colTitle: string;
    colTab: string;
    colDate: string;
    colMedia: string;
    colActions: string;
    images: string;
    video: string;
    edit: string;
  };
  form: {
    slug: string;
    date: string;
    category: string;
    readMin: string;
    featured: string;
    coverImage: string;
    galleryUrls: string;
    galleryHint: string;
    videoUrl: string;
    titleEn: string;
    titleAr: string;
    excerptEn: string;
    excerptAr: string;
    bodyEn: string;
    bodyAr: string;
    bodyHint: string;
    tabLabelEn: string;
    tabLabelAr: string;
    linkedSlug: string;
    descEn: string;
    descAr: string;
    save: string;
    createBlog: string;
    updateBlog: string;
    createEvent: string;
    updateEvent: string;
    saving: string;
    cancel: string;
    saveFailed: string;
    uploadFailed: string;
    uploading: string;
    uploadPlaceholder: string;
  };
  common: {
    delete: string;
    deleting: string;
    deleteConfirm: string;
    deleteFailed: string;
  };
};

const ar: AdminMessages = {
  brand: 'لوحة تحكم بازلت',
  langSwitch: 'English',
  nav: {
    dashboard: 'الرئيسية',
    blogs: 'المدونة',
    events: 'الفعاليات',
    logout: 'تسجيل الخروج',
  },
  login: {
    title: 'لوحة تحكم بازلت',
    subtitle: 'سجّل الدخول لإدارة المقالات والفعاليات.',
    password: 'كلمة المرور',
    signIn: 'تسجيل الدخول',
    signingIn: 'جارٍ تسجيل الدخول...',
    invalidPassword: 'كلمة المرور غير صحيحة',
  },
  dashboard: {
    title: 'الرئيسية',
    blogs: 'المدونة',
    events: 'الفعاليات',
    articles: 'مقالة',
    eventsCount: 'فعالية',
    manageBlogs: 'إدارة المقالات',
    addBlog: 'إضافة مقال',
    manageEvents: 'إدارة الفعاليات',
    addEvent: 'إضافة فعالية',
  },
  blogs: {
    title: 'المدونة',
    addBlog: 'إضافة مقال',
    editBlog: 'تعديل مقال',
    colTitle: 'العنوان',
    colSlug: 'الرابط',
    colCategory: 'التصنيف',
    colDate: 'التاريخ',
    colActions: 'إجراءات',
    edit: 'تعديل',
    delete: 'حذف',
    deleting: 'جارٍ الحذف...',
    deleteConfirm: 'هل أنت متأكد من حذف هذا العنصر؟',
    deleteFailed: 'فشل الحذف',
    categoryNews: 'أخبار',
    categoryIndustry: 'صناعة',
    categoryTech: 'تقنية',
  },
  events: {
    title: 'الفعاليات',
    addEvent: 'إضافة فعالية',
    editEvent: 'تعديل فعالية',
    colTitle: 'العنوان',
    colTab: 'التبويب',
    colDate: 'التاريخ',
    colMedia: 'الوسائط',
    colActions: 'إجراءات',
    images: 'صورة',
    video: 'فيديو',
    edit: 'تعديل',
  },
  form: {
    slug: 'الرابط (slug)',
    date: 'التاريخ',
    category: 'التصنيف',
    readMin: 'وقت القراءة (دقائق)',
    featured: 'مقال مميز',
    coverImage: 'صورة الغلاف',
    galleryUrls: 'روابط معرض الصور (سطر لكل صورة)',
    galleryHint: 'سطر واحد لكل رابط صورة',
    videoUrl: 'رابط الفيديو (اختياري)',
    titleEn: 'العنوان (إنجليزي)',
    titleAr: 'العنوان (عربي)',
    excerptEn: 'المقتطف (إنجليزي)',
    excerptAr: 'المقتطف (عربي)',
    bodyEn: 'المحتوى (إنجليزي) — فقرة فارغة بين كل فقرة',
    bodyAr: 'المحتوى (عربي)',
    bodyHint: 'افصل بين الفقرات بسطر فارغ',
    tabLabelEn: 'اسم التبويب (إنجليزي)',
    tabLabelAr: 'اسم التبويب (عربي)',
    linkedSlug: 'رابط المقال المرتبط (اختياري)',
    descEn: 'الوصف (إنجليزي)',
    descAr: 'الوصف (عربي)',
    save: 'حفظ',
    createBlog: 'إنشاء مقال',
    updateBlog: 'تحديث المقال',
    createEvent: 'إنشاء فعالية',
    updateEvent: 'تحديث الفعالية',
    saving: 'جارٍ الحفظ...',
    cancel: 'إلغاء',
    saveFailed: 'فشل الحفظ',
    uploadFailed: 'فشل الرفع',
    uploading: 'جارٍ الرفع...',
    uploadPlaceholder: '/blog/uploads/example.jpg',
  },
  common: {
    delete: 'حذف',
    deleting: 'جارٍ الحذف...',
    deleteConfirm: 'هل أنت متأكد من حذف هذا العنصر؟',
    deleteFailed: 'فشل الحذف',
  },
};

const en: AdminMessages = {
  brand: 'Basalt Admin',
  langSwitch: 'العربية',
  nav: {
    dashboard: 'Dashboard',
    blogs: 'Blogs',
    events: 'Events',
    logout: 'Logout',
  },
  login: {
    title: 'Basalt Admin',
    subtitle: 'Sign in to manage blogs and events.',
    password: 'Password',
    signIn: 'Sign in',
    signingIn: 'Signing in...',
    invalidPassword: 'Invalid password',
  },
  dashboard: {
    title: 'Dashboard',
    blogs: 'Blogs',
    events: 'Events',
    articles: 'articles',
    eventsCount: 'events',
    manageBlogs: 'Manage blogs',
    addBlog: 'Add blog',
    manageEvents: 'Manage events',
    addEvent: 'Add event',
  },
  blogs: {
    title: 'Blogs',
    addBlog: 'Add blog',
    editBlog: 'Edit blog',
    colTitle: 'Title',
    colSlug: 'Slug',
    colCategory: 'Category',
    colDate: 'Date',
    colActions: 'Actions',
    edit: 'Edit',
    delete: 'Delete',
    deleting: 'Deleting...',
    deleteConfirm: 'Are you sure you want to delete this item?',
    deleteFailed: 'Delete failed',
    categoryNews: 'News',
    categoryIndustry: 'Industry',
    categoryTech: 'Tech',
  },
  events: {
    title: 'Events',
    addEvent: 'Add event',
    editEvent: 'Edit event',
    colTitle: 'Title',
    colTab: 'Tab',
    colDate: 'Date',
    colMedia: 'Media',
    colActions: 'Actions',
    images: 'images',
    video: 'video',
    edit: 'Edit',
  },
  form: {
    slug: 'Slug',
    date: 'Date',
    category: 'Category',
    readMin: 'Read time (minutes)',
    featured: 'Featured article',
    coverImage: 'Cover image',
    galleryUrls: 'Gallery image URLs (one per line)',
    galleryHint: 'One URL per line',
    videoUrl: 'Video URL (optional)',
    titleEn: 'Title (English)',
    titleAr: 'Title (Arabic)',
    excerptEn: 'Excerpt (English)',
    excerptAr: 'Excerpt (Arabic)',
    bodyEn: 'Body (English) — blank line between paragraphs',
    bodyAr: 'Body (Arabic)',
    bodyHint: 'Separate paragraphs with a blank line',
    tabLabelEn: 'Tab label (English)',
    tabLabelAr: 'Tab label (Arabic)',
    linkedSlug: 'Linked blog slug (optional)',
    descEn: 'Description (English)',
    descAr: 'Description (Arabic)',
    save: 'Save',
    createBlog: 'Create blog',
    updateBlog: 'Update blog',
    createEvent: 'Create event',
    updateEvent: 'Update event',
    saving: 'Saving...',
    cancel: 'Cancel',
    saveFailed: 'Save failed',
    uploadFailed: 'Upload failed',
    uploading: 'Uploading...',
    uploadPlaceholder: '/blog/uploads/example.jpg',
  },
  common: {
    delete: 'Delete',
    deleting: 'Deleting...',
    deleteConfirm: 'Are you sure you want to delete this item?',
    deleteFailed: 'Delete failed',
  },
};

export const adminMessages: Record<Locale, AdminMessages> = { ar, en };
