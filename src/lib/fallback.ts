/**
 * Static fallback data used when DATABASE_URL is not set.
 * Images are served from the /public/assets/ directory — replace the
 * placeholder files there with your own photos.
 *
 * This lets the site run cost-free without any database while still
 * showing real-looking content to visitors. The admin panel is disabled
 * entirely in this mode.
 */

// ─── Shared types ────────────────────────────────────────────────────────────

export interface FallbackGalleryImage {
  id: string;
  url: string;
  alt_text: string;
  caption: string;
  category: string;
}

export interface FallbackStory {
  id: string;
  name: string;
  story: string;
  location: string;
  image_url: string;
  is_featured: boolean;
  sort_order: number;
}

export interface FallbackEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  end_date: string | null;
  location: string;
  image_url: string;
  registration_url: string;
  status: 'upcoming' | 'past';
  is_featured: boolean;
}

export interface FallbackBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  author: string;
  created_at: string;
  published: boolean;
  content: string;
}

// ─── Site settings ──────────────────────────────────────────────────────────

export const FALLBACK_SETTINGS: Record<string, string> = {
  // Hero
  hero_title: 'Empowering Vulnerable Women\nAcross Nigeria',
  hero_subtitle:
    'A catalyst for economic independence, social inclusion, and community advancement — walking alongside widows, single mothers, and young women to build lasting change.',
  hero_image_url: '/assets/hero/hero.jpeg',
  hero_cta_text: 'Support Our Work',
  hero_cta_url: 'https://dashboard.flutterwave.com/donate/obcebpoam3cu',
  hero_secondary_cta_text: 'Learn More',
  hero_secondary_cta_url: '/about',

  // Stats
  stat_1_number: '5,000+',
  stat_1_label: 'Women Empowered',
  stat_2_number: '1,500+',
  stat_2_label: 'Skills Trained',
  stat_3_number: '4,800+',
  stat_3_label: 'Grants Awarded',
  stat_4_number: '11+',
  stat_4_label: 'Years of Impact',

  // Mission
  mission_title: 'Our Mission',
  mission_body:
    'To empower vulnerable women, widows, single mothers, and young ladies by providing access to practical skills training, entrepreneurship development, financial support, mentorship, healthcare support, and holistic community-based programs that foster long-term stability and self-reliance. We are also committed to strengthening families through education support initiatives, including parental empowerment programs, back-to-school interventions, and scholarship opportunities for vulnerable children.',
  mission_image_url: '/assets/about/mission.jpeg',

  // Pillars
  pillar_1_title: 'Financial Empowerment',
  pillar_1_body:
    'We provide grants and microloans to women entrepreneurs, supporting business start-ups and expansions so women can achieve lasting economic independence.',
  pillar_2_title: 'Entrepreneurship Development',
  pillar_2_body:
    'Through business training, capacity-building, and mentorship from experienced professionals, we connect women to networks and market opportunities that grow their enterprises.',
  pillar_3_title: 'Healthcare & Wellness',
  pillar_3_body:
    'We run health awareness campaigns and wellness outreach programmes to ensure women and their communities have access to the care and knowledge they need to thrive.',
  pillar_4_title: 'Skill Acquisition',
  pillar_4_body:
    'Our vocational training programmes equip women with practical, income-generating skills — from tailoring and baking to digital literacy — creating pathways to self-reliance.',

  // CTA
  cta_title: 'Join Our Mission',
  cta_body:
    'Every contribution, large or small, helps us reach more women and children across Nigeria. Partner with us today.',
  donate_url: 'https://dashboard.flutterwave.com/donate/obcebpoam3cu',
};

// ─── Gallery images ──────────────────────────────────────────────────────────
// Place your images in public/assets/gallery/ using these filenames,
// or update the urls below to match your actual filenames.

export const FALLBACK_GALLERY: FallbackGalleryImage[] = [
  {
    id: 'g1',
    url: '/assets/gallery/gallery-1.svg',
    alt_text: 'Women at a vocational training workshop',
    caption: 'Vocational Training',
    category: 'Vocational Training',
  },
  {
    id: 'g2',
    url: '/assets/gallery/gallery-2.svg',
    alt_text: 'Children receiving school supplies',
    caption: 'Scholarship Programme',
    category: 'Education',
  },
  {
    id: 'g3',
    url: '/assets/gallery/gallery-3.svg',
    alt_text: 'Community gathering and outreach',
    caption: 'Community Outreach',
    category: 'Community Outreach',
  },
  {
    id: 'g4',
    url: '/assets/gallery/gallery-4.svg',
    alt_text: 'Parenting workshop session',
    caption: 'Parenting Workshop',
    category: 'Community Outreach',
  },
  {
    id: 'g5',
    url: '/assets/gallery/gallery-5.svg',
    alt_text: 'Women entrepreneurs at a microfinance event',
    caption: 'Microfinance Programme',
    category: 'Vocational Training',
  },
  {
    id: 'g6',
    url: '/assets/gallery/gallery-6.svg',
    alt_text: 'Career development seminar for young women',
    caption: 'Career Development',
    category: 'Education',
  },
];

// ─── Impact stories ──────────────────────────────────────────────────────────

export const FALLBACK_STORIES: FallbackStory[] = [
  {
    id: 's1',
    name: 'Adaeze Okonkwo',
    story:
      'Before joining the Brisa vocational training programme, I had no way to support my three children after my husband passed. Within six months I learned tailoring, received a starter grant, and today I run my own small clothing business. Brisa gave me back my dignity.',
    location: 'Enugu State',
    image_url: '/assets/stories/story-1.svg',
    is_featured: true,
    sort_order: 1,
  },
  {
    id: 's2',
    name: 'Fatimah Bello',
    story:
      'The scholarship programme changed everything for my daughter. She was about to drop out of secondary school, but Brisa covered her fees for two years. She is now studying nursing and wants to give back to her community.',
    location: 'Kano State',
    image_url: '/assets/stories/story-2.svg',
    is_featured: true,
    sort_order: 2,
  },
];

// ─── Events ──────────────────────────────────────────────────────────────────

export const FALLBACK_EVENTS: FallbackEvent[] = [
  {
    id: 'e1',
    title: 'Flavours of Empowerment',
    description:
      'She Cooks, She Creates, She Conquers: A potluck experience like no other. Come with a dish. Name it. Own it. Share the story behind it.',
    date: '2025-09-20T09:00:00.000Z',
    end_date: '2026-06-27T10:00:00.000Z',
    location: 'Falomi, Ikoyi, Lagos',
    image_url: '/assets/events/event1.jpeg',
    registration_url: 'https://forms.gle/BygtsEiz461gVSSH8',
    status: 'upcoming',
    is_featured: true,
  },
  // {
  //   id: 'e2',
  //   title: 'Annual Scholarship Awards Ceremony',
  //   description:
  //     'Celebrating our scholars and welcoming 50 new scholarship recipients into the Brisa family. Parents and guardians are welcome.',
  //   date: '2025-10-11T10:00:00.000Z',
  //   end_date: null,
  //   location: 'Lagos Cultural Centre, Lagos Island',
  //   image_url: '/assets/events/event-2.svg',
  //   registration_url: '/contact',
  //   status: 'upcoming',
  //   is_featured: false,
  // },
  // {
  //   id: 'e3',
  //   title: 'Digital Literacy for Rural Women',
  //   description:
  //     'A 3-day free workshop teaching basic smartphone skills, mobile banking, and social media for business to women in Ogun State.',
  //   date: '2025-08-05T08:00:00.000Z',
  //   end_date: '2025-08-07T16:00:00.000Z',
  //   location: 'Abeokuta Community Hall, Ogun State',
  //   image_url: '/assets/events/event-3.svg',
  //   registration_url: '/contact',
  //   status: 'past',
  //   is_featured: false,
  // },
];

// ─── Blog posts ──────────────────────────────────────────────────────────────

export const FALLBACK_BLOG_POSTS: FallbackBlogPost[] = [
  // {
  //   id: 'b1',
  //   title: '5 Years of Impact: How Brisa Has Grown',
  //   slug: '5-years-of-impact',
  //   excerpt:
  //     'From a small gathering of volunteers in Lagos to a nationally recognised NGO, we look back at the milestones that shaped Brisa Women\'s Foundation.',
  //   image_url: '/assets/blog/blog-1.svg',
  //   author: 'Brisa Editorial Team',
  //   created_at: '2025-03-15T00:00:00.000Z',
  //   published: true,
  //   content: '',
  // },
  // {
  //   id: 'b2',
  //   title: 'Why Vocational Training Changes Everything',
  //   slug: 'why-vocational-training-changes-everything',
  //   excerpt:
  //     'Economic independence is the single most powerful lever for lifting women out of poverty. Here is what our data shows after three years of skills programmes.',
  //   image_url: '/assets/blog/blog-2.svg',
  //   author: 'Programme Team',
  //   created_at: '2025-01-28T00:00:00.000Z',
  //   published: true,
  //   content: '',
  // },
  // {
  //   id: 'b3',
  //   title: 'Introducing Our New Microloan Programme',
  //   slug: 'new-microloan-programme',
  //   excerpt:
  //     'Starting this quarter, eligible graduates of our vocational training cohorts can apply for interest-free microloans of up to ₦150,000 to launch their businesses.',
  //   image_url: '/assets/blog/blog-3.svg',
  //   author: 'Finance Team',
  //   created_at: '2024-11-10T00:00:00.000Z',
  //   published: true,
  //   content: '',
  // },
];
