// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'how-to-prepare-for-moving-day',
    title:    'How to Prepare for Moving Day in Waco: A Practical Timeline',
    excerpt:  'From eight weeks out to load-day morning — a clear checklist so your local or long-distance move stays on schedule and stress stays low.',
    category: 'Planning',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/home/services/service-1.jpg',
    imageAlt: 'How to prepare for moving day in Waco TX',
    featured: true,
  },
  {
    slug:     'packing-checklist-texas-summer',
    title:    'Packing Checklist for a Texas Summer Move',
    excerpt:  'Heat, humidity, and long days change how you pack. Use this Texas-specific packing checklist to protect belongings and keep your crew efficient.',
    category: 'Packing',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Texas summer packing checklist for movers',
  },
  {
    slug:     'local-vs-long-distance-movers',
    title:    'Local vs Long-Distance Movers: What Central Texas Families Should Know',
    excerpt:  'Pricing models, timelines, and paperwork differ. Here is how to choose the right type of mover for your Waco-area move.',
    category: 'Guides',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'Local vs long-distance movers comparison Central Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }